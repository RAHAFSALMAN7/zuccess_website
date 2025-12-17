"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      serviceNeeded: e.target.serviceNeeded.value,
      comment: e.target.comment.value,
    };

    try {
      await emailjs.send(
        "service_jim3ubh", // Service ID
        "template_jregs2i", // Template ID
        formData,
        "NHOaPQ0UuwKramoTM" // Public Key
      );

      setSuccess(true);
      e.target.reset();

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Email Error:", error);
    }
  };

  return (
    <main className="bg-[#0B0844] min-h-screen text-white pt-32 relative">

      {/* BG geometric pattern */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce z-[999]">
          <CheckCircle className="w-6 h-6" />
          <span>Message Sent Successfully!</span>
        </div>
      )}

      {/* HERO TITLE */}
      <section className="text-center px-8 md:px-24 py-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold"
        >
          Contact <span className="text-[#EA7946]">Us</span>
        </motion.h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-white/70">
          Whether you’re ready to start a project, ask a question, or explore a partnership—
          we’re here to help you build the future.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-24 relative z-10">

        {/* EMAIL */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20 flex flex-col items-center">
          <Mail className="w-12 h-12 text-[#EA7946]" />
          <h3 className="text-2xl font-bold mt-4">Email Us</h3>
          <p className="text-white/70 mt-3 text-center">We respond within a few hours.</p>
          <a href="mailto:zuccessai@gmail.com" className="mt-4 text-[#EA7946] font-semibold">
            zuccessai@gmail.com
          </a>
        </div>

        {/* PHONE */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20 flex flex-col items-center">
          <Phone className="w-12 h-12 text-[#EA7946]" />
          <h3 className="text-2xl font-bold mt-4">Call Us</h3>
          <p className="text-white/70 mt-3 text-center">We’re always happy to talk.</p>
          <a href="tel:+971503294644" className="mt-4 text-[#EA7946] font-semibold">
            +971 50 329 4644
          </a>
        </div>

        {/* LOCATION */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20 flex flex-col items-center">
          <MapPin className="w-12 h-12 text-[#EA7946]" />
          <h3 className="text-2xl font-bold mt-4">Our Offices</h3>
          <p className="text-white/70 mt-3 text-center">UAE • Palestine • Saudi Arabia</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-4xl mx-auto mt-24 px-8 md:px-0 relative z-10">
        <h2 className="text-4xl font-extrabold text-center">Send Us a Message</h2>

        <form onSubmit={sendEmail} className="mt-12 bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20 space-y-6">
          <input name="firstName" type="text" required placeholder="First Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white" />

          <input name="lastName" type="text" required placeholder="Last Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white" />

          <input name="email" type="email" required placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white" />

          <input name="serviceNeeded" type="text" placeholder="Service Needed"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white" />

          <textarea name="comment" rows={5} required placeholder="Write your message..."
            className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-full bg-[#EA7946] text-white text-lg font-bold shadow-lg"
          >
            Send Message →
          </motion.button>
        </form>
      </section>

      {/* MAPS SECTION */}
      <section className="mt-32 px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Saudi Arabia */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d458229.94321264885!2d50.165055!3d26.199234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e839e8ef58d9%3A0xef778812d8b6aad1!2z2KfZhNiu2KjYsSDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2sus!4v1765189483212!5m2!1sar!2sus"
          className="w-full h-[350px] rounded-3xl border-none" loading="lazy" />

        {/* Palestine */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d179837.36982858906!2d-75.866175!3d45.228399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2z2KPZiNiq2KfZiNin2Iwg2KPZiNmG2KrYp9ix2YrZiNiMINmD2YbYr9in!5e0!3m2!1sar!2sus!4v1765189528294!5m2!1sar!2sus"
          className="w-full h-[350px] rounded-3xl border-none" loading="lazy" />

        {/* UAE */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230658.77149690734!2d55.525949!3d25.403361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5764dd8fbe79%3A0xcda090de6445a819!2z2LnYrNmF2KfZhiAtINin2YTYpdmF2KfYsdin2Kog2KfZhNi52LHYqNmK2Kkg2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2sus!4v1765189562332!5m2!1sar!2sus"
          className="w-full h-[350px] rounded-3xl border-none" loading="lazy" />
      </section>

      <div className="h-40" />

      {/* ========================= WHATSAPP FLOAT BUTTON ========================= */}
      <a
        href="https://wa.me/971585137033"
        target="_blank"
        className="
          fixed bottom-6 right-6 
          bg-[#25D366]
          w-16 h-16 
          rounded-full 
          flex items-center justify-center 
          shadow-xl 
          hover:scale-110 
          transition 
          z-[999]
        "
      >
        {/* SVG ICON */}
        <svg
          fill="white" 
          height="38"
          width="38"
          viewBox="0 0 32 32"
        >
          <path d="M16.027 3.003c-7.168 0-13 5.832-13 13 0 2.289.594 4.535 1.719 6.519L3 29l6.65-1.719c1.9.996 4.043 1.521 6.24 1.521h.01c7.168 0 13-5.832 13-13s-5.832-12.999-13-12.999zm0 23.666h-.009c-1.962 0-3.889-.521-5.568-1.508l-.398-.234-3.945 1.02 1.055-3.85-.258-.396c-1.066-1.639-1.629-3.535-1.629-5.497 0-5.625 4.58-10.205 10.206-10.205 5.625 0 10.205 4.58 10.205 10.205 0 5.625-4.58 10.205-10.205 10.205zm5.447-7.613c-.298-.149-1.758-.868-2.031-.966-.273-.099-.472-.149-.67.149-.198.298-.768.966-.94 1.164-.173.198-.347.223-.645.074-.298-.149-1.255-.463-2.391-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.459.13-.608.134-.133.298-.347.446-.521.149-.173.198-.298.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.67-.51l-.57-.01c-.198 0-.521.074-.793.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.074 4.487.709.306 1.262.489 1.693.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347z"></path>
        </svg>
      </a>

    </main>
  );
}
