import React, { useState } from 'react';
import photo from './assets/photo.jpg';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build a mailto link so the message is sent to namdkgo@gmail.com
    const subject = `${form.title} (from ${form.name})`;
    const body = `Name: ${form.name}\n\n${form.message}`;
    const mailtoLink = `mailto:namdkgo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's mail client with prefilled recipient and content.
    window.location.href = mailtoLink;

    setForm({ name: '', title: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="w-full md:w-[60%] mx-auto flex justify-center snap-start items-stretch"
      style={{
        minHeight: '88vh',
        height: '88vh',
        scrollSnapAlign: 'start',
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 items-stretch w-full h-full px-6">
        {/* 왼쪽: title, 설명, 이미지 */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 h-full">
          <div className="bg-white shadow-md p-8 w-[460px] flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center tracking-wide">CONTACT</h2>
            <p className="mt-4 text-center text-sm text-gray-600">남겨주신 메시지는 확인 후 빠르게 연락드리겠습니다.</p>
            <div className="mt-6 flex justify-center">
              <img src={photo} alt="thanks" className="w-64 h-auto object-cover" />
            </div>
          </div>
        </div>
        {/* 오른쪽: 이름, 제목, 메시지, 전송 */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 items-center justify-center py-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 px-3 w-full md:w-[460px] h-10 placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 px-3 mt-1 w-full md:w-[460px] h-10 placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 px-3 mt-1 resize-none w-full md:w-[460px] h-48 placeholder-gray-400"
            required
          />
          <div className="flex justify-center mt-1">
            <button
              type="submit"
              className="uppercase text-white font-medium transition w-full md:w-[460px] h-10 bg-[#425165] hover:bg-[#39424c]"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;