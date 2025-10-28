import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    name: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('메시지가 전송되었습니다.');
    setForm({
      email: '',
      phone: '',
      name: '',
      title: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center snap-start"
      style={{
        minHeight: '94vh',
        height: '94vh',
        scrollSnapAlign: 'start',
        marginTop: '6vh',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-8 items-start w-full h-full"
      >
        {/* 왼쪽: 이메일, 전화 */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <label className="flex flex-col gap-2">
            <span className="mb-1">E-mail :</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="mb-1">Phone :</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            />
          </label>
        </div>
        {/* 오른쪽: 이름, 제목, 메시지, 전송 */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="border rounded px-3 py-2 h-40 resize-none"
            required
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="border rounded px-8 py-2 hover:bg-gray-100 transition"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;