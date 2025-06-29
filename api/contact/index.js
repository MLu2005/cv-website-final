module.exports = async function (context, req) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: "All fields are required."
    };
    return;
  }

  // Tu normalnie wysyłamy maila albo zapisujemy do DB — tymczasem tylko log
  context.log(`New contact message from ${name} (${email}): ${message}`);

  context.res = {
    status: 200,
    body: "Message received!"
  };
};
