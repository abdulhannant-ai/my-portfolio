import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, message: "", type: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus({ loading: false, message: "", type: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ loading: false, message: "Message sent successfully!", type: "success" });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({ loading: false, message: "Failed to send message. Please try again.", type: "error" });
    }
  };

  return (
    <div className="grid gap-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-600 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-600 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-600 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
        rows="4"
        required
      />
      <button
        onClick={handleSubmit}
        disabled={status.loading}
        className={`p-3 rounded-lg font-medium text-white transition duration-300 shadow-sm ${
          status.loading ? "bg-teal-400 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-600 active:bg-teal-800"
        }`}
      >
        {status.loading ? "Sending..." : "Send Message"}
      </button>
      {status.message && (
        <p className={`text-sm font-medium text-center ${status.type === "success" ? "text-teal-600" : "text-red-600"}`}>
          {status.message}
        </p>
      )}
    </div>
  );
}

export default ContactForm;