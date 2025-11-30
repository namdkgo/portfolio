import React, { useState } from 'react';
import photo from './assets/photo2.jpg';

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

    const subject = `${form.title} (from ${form.name})`;
    const body = `Name: ${form.name}\n\n${form.message}`;
    const mailtoLink = `mailto:namdkgo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

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
        backgroundColor: '#F2F6FA'
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 items-stretch w-full h-full px-6">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 h-full">
          <div className="bg-white shadow-md p-8 w-[460px] flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center tracking-wide">CONTACT</h2>
            <p className="mt-4 text-center text-sm text-gray-600">남겨주신 메시지는 확인 후 빠르게 연락드리겠습니다.</p>
            <div className="mt-6 flex justify-center">
              <img src={photo} alt="thanks" className="w-64 h-auto object-cover" />
            </div>

            <div className="mt-6 flex items-center gap-3 justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" fill="#333" />
              </svg>
              <span className="leading-tight">010-6361-6832</span>
            </div>

            <div className="mt-2 flex items-center gap-3 justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#333" />
              </svg>
              <span className="leading-tight">namdkgo@gmail.com</span>
            </div>

          </div>
        </div>

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