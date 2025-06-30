const { BlobServiceClient } = require("@azure/storage-blob");

const containerName = "visitorcounter";
const counterBlobName = "counter.json";
const ipLogBlobName = "ips.json";

const getClient = () =>
  BlobServiceClient.fromConnectionString(process.env.AzureWebJobsStorage);

const getBlobContent = async (container, blob) => {
  const blockBlobClient = container.getBlockBlobClient(blob);
  const downloadBlockBlob = await blockBlobClient.download(0);
  const downloaded = await streamToBuffer(downloadBlockBlob.readableStreamBody);
  return downloaded.toString() || "{}";
};

const saveBlobContent = async (container, blob, content) => {
  const blockBlobClient = container.getBlockBlobClient(blob);
  await blockBlobClient.upload(content, Buffer.byteLength(content), {
    blobHTTPHeaders: { blobContentType: "application/json" },
  });
};

const streamToBuffer = async (readableStream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => chunks.push(data instanceof Buffer ? data : Buffer.from(data)));
    readableStream.on("end", () => resolve(Buffer.concat(chunks)));
    readableStream.on("error", reject);
  });
};

module.exports = async function (context, req) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";
  const now = new Date();
  const THREE_HOURS = 3 * 60 * 60 * 1000;

  const blobServiceClient = getClient();
  const containerClient = blobServiceClient.getContainerClient(containerName);

  await containerClient.createIfNotExists();

  let count = 0;
  try {
    const counterJson = await getBlobContent(containerClient, counterBlobName);
    count = JSON.parse(counterJson).visits || 0;
  } catch {}

  let ipMap = {};
  try {
    const ipJson = await getBlobContent(containerClient, ipLogBlobName);
    ipMap = JSON.parse(ipJson);
  } catch {}

  const lastVisit = new Date(ipMap[ip] || 0);
  const timeDiff = now - lastVisit;

  if (timeDiff > THREE_HOURS) {
    count++;
    ipMap[ip] = now.toISOString();
    await saveBlobContent(containerClient, counterBlobName, JSON.stringify({ visits: count }));
    await saveBlobContent(containerClient, ipLogBlobName, JSON.stringify(ipMap));
  }

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { visits: count }
  };
};
