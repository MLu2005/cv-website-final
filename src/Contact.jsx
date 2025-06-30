import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Server error.");
    }
  };

  return (
    <div style={wrapperStyle}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          rows={6}
          required
        />
        <button type="submit" style={buttonStyle}>Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

// 🔧 Style

const wrapperStyle = {
  maxWidth: "600px",
  margin: "5rem auto",
  padding: "2rem",
  backgroundColor: "#1e1e1e",
  borderRadius: "8px",
  boxShadow: "0 0 20px rgba(0,0,0,0.4)",
  color: "white",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
};

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "0.8rem",
  border: "none",
  borderRadius: "4px",
  fontSize: "1rem",
  cursor: "pointer",
};

export default Contact;
