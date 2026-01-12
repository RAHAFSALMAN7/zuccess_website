"use client";
import AvatarFrame from "./components/InteractiveAvatar";

import { FaWhatsapp } from "react-icons/fa";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Rewind,
  FastForward,} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ChatWidget from "./components/ChatWidget";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
const InteractiveAvatar = dynamic(
  () => import("./components/InteractiveAvatar"),
  { ssr: false }
);

export default function Home() {
  const words = [
    { text: "ZUCCESS", color: "white" },
    { text: "—", color: "white" },
    { text: "Success", color: "white" },
    { text: "in", color: "white" },
    { text: "a", color: "white" },
    { text: "Gen", color: "#EA7946" },
    { text: "Z", color: "#EA7946" },
    { text: "Way", color: "white" },
  ];
  const [showText, setShowText] = useState(true);
  // VIDEO POPUP STATE — USED BY PUDU SECTION
  const [videoToShow, setVideoToShow] = useState<string | false>(false);

  const [showLogo, setShowLogo] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const smartHomeVideos = [
  "https://res.cloudinary.com/dl2rqs0lo/video/upload/v1765960915/zuccesshomesystem_iuskvb.mp4",
  "https://res.cloudinary.com/dl2rqs0lo/video/upload/v1765962512/zuccesshome_soxzgl.mp4",
  "https://res.cloudinary.com/dl2rqs0lo/video/upload/v1765962598/smarthome_xa7rof.mp4",
  "https://res.cloudinary.com/dl2rqs0lo/video/upload/v1765962642/Smarthomebyzuccess_ljijmo.mp4",
];

 const videoRef = useRef<HTMLVideoElement>(null);
 const [currentVideo, setCurrentVideo] = useState(0);

const [playing, setPlaying] = useState(true);
const [muted, setMuted] = useState(true);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
const togglePlay = () => {
  if (!videoRef.current) return;
  playing ? videoRef.current.pause() : videoRef.current.play();
  setPlaying(!playing);
};

const toggleMute = () => {
  if (!videoRef.current) return;
  videoRef.current.muted = !muted;
  setMuted(!muted);
};

const toggleFullscreen = () => {
  const video = videoRef.current as any;
  if (!video) return;

  // iOS
  if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen();
    return;
  }

  // Desktop / Android
  if (!document.fullscreenElement) {
    video.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
};

const seek = (seconds: number) => {
  if (!videoRef.current) return;
  videoRef.current.currentTime += seconds;
};
const prevVideo = () => {
  setCurrentVideo((prev) =>
    prev === 0 ? smartHomeVideos.length - 1 : prev - 1
  );
  setPlaying(true);
};

const nextVideo = () => {
  setCurrentVideo((prev) =>
    prev === smartHomeVideos.length - 1 ? 0 : prev + 1
  );
  setPlaying(true);
};

  useEffect(() => {
    const t1 = setTimeout(() => setShowText(false), 3000);
    const t2 = setTimeout(() => setShowLogo(true), 3500);
    const t3 = setTimeout(() => setHideIntro(true), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* =======================================================
            INTRO OVERLAY (Splash Screen)
      ======================================================= */}
      {!hideIntro && (
        <div className="fixed inset-0 bg-[#0B0844] flex items-center justify-center z-[9999]">
          {showText && (
            <motion.h1
              className="font-poppins font-bold text-4xl md:text-6xl flex flex-wrap justify-center gap-3 absolute text-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  style={{ color: word.color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.25,
                    ease: "easeOut",
                  }}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>
          )}

          {showLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image

                src="/zuccesslogo.png"
                width={380}
                height={380}
                alt="Zuccess Logo"
                loading="lazy"
                quality={85}
              />


            </motion.div>
          )}
        </div>
      )}

      {/* =======================================================
            HERO SECTION
      ======================================================= */}
      <main
        className="min-h-screen bg-[#0B0844] flex items-center justify-center overflow-hidden relative"
        id="home"
      >
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[#0B0844] text-white flex items-center justify-start px-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[180px]"
              style={{ background: "#EA7946" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ duration: 2.4, ease: "easeOut" }}
              className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full blur-[160px]"
              style={{ background: "#0B5EFF" }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl space-y-6 relative z-10"
          >
            <h1 className="text-6xl font-poppins font-bold leading-tight">
              Where <span style={{ color: "#EA7946" }}>Creativity</span> <br />
              Meets Intelligent <br />
              Technology
            </h1>

            <p className="text-xl font-nunito text-gray-200 leading-relaxed">
              We build modern, intelligent, and scalable digital solutions that help
              businesses stand out and succeed in a fast-changing world.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("our-solutions")}
              className="mt-6 w-32 h-32 rounded-full border-2 border-[#EA7946] flex items-center justify-center text-sm tracking-widest cursor-pointer"
            >
              <span className="text-[#EA7946] font-bold">SCROLL</span>
            </motion.button>
          </motion.div>
        </motion.section>
      </main>


      {/* =======================================================
      ⭐ OUR SOLUTIONS — PREMIUM ANIMATED SECTION
======================================================= */}

      <section id="our-solutions" className="w-full py-32 px-8 md:px-20 bg-[#0B0844] text-[#EA7946] relative overflow-hidden">

        {/* Subtle background glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.25, scale: 1.2 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[250px] bg-[#EA7946]/40 pointer-events-none"
        />


        <div className="max-w-7xl mx-auto relative z-10">

          {/* Title with premium animation */}
          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-poppins font-extrabold text-center drop-shadow-lg"
            style={{ color: "#EA7946" }}
          >
            OUR SOLUTIONS
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/80 text-center mt-5 text-lg md:text-xl font-nunito"
          >
            AI-powered services crafted for the modern digital world.
          </motion.p>

          {/* Animated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">

            {/* CARD COMPONENT - REUSABLE STYLE */}
            {[
              {
                title: "WhatsApp Automation",
                desc: "Automated replies, AI funnels, booking systems, intelligent support.",
                id: "whatsapp-details",
              },
              {
                title: "Interactive AI Avatar",
                desc: "AI avatars that talk, guide, answer questions & present products.",
                id: "avatar-details",
              },
              {
                title: "Real Estate AI Solutions",
                desc: "Lead automation, CRM workflows, analytics, virtual tours.",
                id: "realestate-details",
              },
              {
                title: "Company Profile Design",
                desc: "Premium company profiles with branding, design & storytelling.",
                id: "profile-details",
              },
              {
  title: "Intelligent Home Solutions",
  desc: "AI-powered smart homes, automation, security & intelligent living.",
  id: "intelligent-home",
}

            ].map((item, index) => (
              <motion.div
                key={index}
     onClick={() => scrollToSection(item.id)}

                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="
            cursor-pointer group
            bg-white/5 backdrop-blur-xl rounded-3xl p-8
            border border-white/10
            shadow-[0_0_25px_rgba(234,121,70,0.15)]
            hover:shadow-[0_0_45px_rgba(234,121,70,0.35)]
            hover:scale-[1.05]
            transition-all duration-500
            relative overflow-hidden
          "
              >
                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br from-[#EA7946]/20 to-transparent" />

                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>

                {/* Arrow Icon Animation */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 right-6 text-white/70 group-hover:text-[#EA7946]"
                >
                  ➜
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* =======================================================
   ⭐ BEYOND ASIA — FINAL STRUCTURE WITH TWO VIDEOS (WITH SOUND)
======================================================= */}
      <section
        id="beyond-asia"
        className="w-full py-40 px-8 md:px-24 bg-[#0B0844] text-white relative overflow-hidden"
      >

        {/* BACKGROUND MESH SHAPES */}
        <svg className="absolute top-0 left-0 w-[420px] opacity-[0.07]" viewBox="0 0 600 600">
          <path
            fill="#EA7946"
            d="M421.5,299.5Q425,349,387,381.5Q349,414,299.5,441Q250,468,214,429Q178,390,142.5,355Q107,320,102,260Q97,200,150,168.5Q203,137,256.5,123Q310,109,354,144Q398,179,414,229.5Q430,280,421.5,299.5Z"
          />
        </svg>

        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff15_1px,transparent_1px)] bg-[size:22px_22px]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* =================== SECTION TITLE =================== */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-white"
          >
            <span className="text-[#EA7946]">Zuccess</span> × Beyond Asia
          </motion.h1>

          {/* =================== TOP: TEXT + HORIZONTAL VIDEO =================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* LEFT — Horizontal Video WITH SOUND */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <video
  src="https://res.cloudinary.com/dl2rqs0lo/video/upload/v1765972849/compressed_holome_lw3bor.mp4"
  controls
  playsInline
  preload="metadata"
  className="w-full rounded-2xl shadow-2xl object-cover"
>
  Your browser does not support the video tag.
</video>

            </motion.div>

            {/* RIGHT — text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-extrabold text-[#EA7946]">
                Beyond Asia Partnership
              </h2>

              <p className="mt-6 text-white/80 leading-relaxed text-lg font-nunito">
                Zuccess and Beyond Asia unite to bring cutting-edge AI innovation to one
                of the fastest-growing regions in the world.
                <br /><br />
                Together, we create next-level digital experiences and deliver powerful,
                future-ready AI solutions across Asia and the Middle East.
              </p>

              <motion.a
                href="https://www.byond.asia/"
                target="_blank"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 px-10 py-4 bg-[#EA7946] text-white font-bold rounded-full shadow-lg hover:shadow-xl"
              >
                Visit Beyond Asia Website →
              </motion.a>
            </motion.div>
          </div>

          {/* SPACING */}
          <div className="h-28" />

          {/* =================== BOTTOM: CARDS + PHONE VIDEO =================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

            {/* LEFT — CARDS STACKED */}
            <div className="space-y-10">
              {[
                {
                  title: "Personalised Interaction",
                  text: "Human-centric AI that creates meaningful, intuitive digital experiences.",
                },
                {
                  title: "Strategic Positioning",
                  text: "At the forefront of AI evolution, blending technology with empathy.",
                },
                {
                  title: "Market Potential",
                  text: "Huge opportunities across Asia & the Middle East across all sectors.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="
              bg-white/5 border border-white/10 rounded-3xl 
              p-8 shadow-xl backdrop-blur-xl
            "
                >
                  <h3 className="text-2xl font-bold text-[#EA7946] mb-3">{card.title}</h3>
                  <p className="text-white/70">{card.text}</p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT — Vertical Video (Phone Frame) WITH SOUND*/}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div className="relative w-[260px] rounded-[32px] p-3 bg-[#111] shadow-2xl border border-white/10">

                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black/40 rounded-b-2xl" />

                <video
                  src="/partners/byondasia.mp4"
                  controls
                  playsInline
                  className="w-full h-[520px] rounded-[26px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =======================================================
      🔽 DETAILS SECTIONS
======================================================= */}
{/* =========================================================================
   ⭐ WHATSAPP AUTOMATION — PREMIUM EXPANDED MARKETING SECTION
============================================================================ */}
<section
  id="whatsapp-details"
  className="w-full py-40 px-10 md:px-24 bg-[#FFF8E8] text-[#0B0844] relative overflow-hidden"
>
  {/* Soft Pattern Background */}
  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#0B0844_1px,transparent_1px)] bg-[size:42px_42px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">

    {/* LEFT — TEXT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Headline */}
      <h2 className="text-6xl md:text-7xl font-extrabold leading-tight font-poppins text-[#0B0844]">
        Automate Your
        <span className="text-[#EA7946] block mt-4">
          WhatsApp Experience
        </span>
      </h2>

      {/* Subhead */}
      <p className="text-xl text-[#0B0844]/80 font-nunito leading-relaxed max-w-lg">
        Make your WhatsApp work for you — not the other way around.
        With AI-driven automation, your business can respond instantly,
        qualify leads, close sales, and support customers 24/7 without
        needing a human team.
      </p>

      {/* Power Bullets */}
      <div className="space-y-4 mt-6">
        {[
          "Instant replies powered by AI — no delays, no missed opportunities.",
          "Lead qualification + booking flows tailored to your business.",
          "AI funneling system that increases conversions automatically.",
          "24/7 customer support with human-like understanding.",
          "Perfect for sales, support, real estate, clinics, and e-commerce.",
        ].map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 text-lg text-[#0B0844]/85"
          >
            <div className="min-w-3 h-3 bg-[#EA7946] mt-2 rounded-full"></div>
            <p>{text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="https://zaichat.net"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          inline-block mt-10 px-12 py-5 rounded-full
          bg-[#EA7946] text-white font-bold text-xl
          shadow-lg shadow-[#EA7946]/40
          hover:shadow-xl hover:shadow-[#EA7946]/60
          transition-all tracking-wide
        "
      >
        Start Automating — It’s Free →
      </motion.a>
    </motion.div>

    {/* RIGHT — IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center relative"
    >
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#EA7946]/30 blur-[120px] rounded-full -z-10"></div>

      <Image
        src="/Zaichatpalform.png"
        width={500}
        height={500}
        alt="WhatsApp Automation Platform"
        className="object-contain drop-shadow-2xl rounded-3xl"
      />
    </motion.div>
  </div>

  {/* =========================================================================
     💬 FLOATING WHATSAPP ICON — ZUCCESS OFFICIAL BOT
  ========================================================================= */}
  <motion.a
    href="https://wa.me/971585137033?text=Try%20chatting%20with%20the%20official%20Zuccess%20chatbot"
    target="_blank"
    aria-label="Chat with Zuccess WhatsApp Bot"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="
      fixed bottom-8 right-8 z-50
      w-16 h-16 flex items-center justify-center
      rounded-full bg-[#25D366] text-white
      shadow-xl shadow-[#25D366]/40
      hover:shadow-2xl hover:shadow-[#25D366]/60
      transition-all
    "
  >
    <FaWhatsapp className="text-3xl" />
  </motion.a>
</section>

{/* =========================================================================
⭐ INTELLIGENT HOME — SMART CONTROL PANEL EXPERIENCE
============================================================================ */}
<section
  id="intelligent-home"
  className="relative w-full py-40 px-8 md:px-20 bg-gradient-to-b from-[#020617] to-[#0B0844] text-white overflow-hidden"
>
  {/* Ambient Glows */}
  <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#EA7946]/20 blur-[260px] rounded-full" />
  <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-[#0B5EFF]/25 blur-[260px] rounded-full" />

  <div className="max-w-7xl mx-auto relative z-10 space-y-24">

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto"
    >
      <h2 className="text-6xl md:text-7xl font-extrabold">
        Intelligent
        <span className="block text-[#EA7946] mt-2">
          Smart Home Ecosystem
        </span>
      </h2>

      <p className="mt-8 text-xl text-white/75 leading-relaxed">
        A fully integrated smart living platform that connects lighting,
        climate, security, energy, and automation into one seamless AI-powered system.
      </p>
    </motion.div>

    {/* ================= VIDEO PANEL ================= */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      <div
        className="
          relative
          w-[320px] md:w-[380px]
          aspect-[9/16]
          rounded-[36px]
          overflow-hidden
          bg-black
          border border-white/20
          shadow-[0_40px_120px_rgba(0,0,0,0.6)]
        "
      >
        {/* Camera Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black/60 rounded-full z-20" />

        {/* VIDEO */}
        <video
          key={currentVideo}
          ref={videoRef}
          src={smartHomeVideos[currentVideo]}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* PREV BUTTON */}
        <button
          onClick={prevVideo}
          aria-label="Previous video"
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            z-30
            w-12 h-12
            rounded-full
            bg-black/60 backdrop-blur
            text-white text-2xl
            flex items-center justify-center
            shadow-lg
            hover:bg-black/80
            active:scale-95
            transition
          "
        >
          ‹
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextVideo}
          aria-label="Next video"
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            z-30
            w-12 h-12
            rounded-full
            bg-black/60 backdrop-blur
            text-white text-2xl
            flex items-center justify-center
            shadow-lg
            hover:bg-black/80
            active:scale-95
            transition
          "
        >
          ›
        </button>

        {/* CONTROL BAR */}
        <div
          dir="ltr"
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            z-30
            bg-black/55 backdrop-blur-xl
            border border-white/20
            rounded-full px-5 py-3
            flex items-center gap-4
            shadow-xl
          "
        >
          <button onClick={() => seek(-10)}>
            <Rewind size={16} className="text-white/80 hover:text-white" />
          </button>

          <button onClick={togglePlay}>
            {playing ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white" />
            )}
          </button>

          <button onClick={() => seek(10)}>
            <FastForward size={16} className="text-white/80 hover:text-white" />
          </button>

          <button onClick={toggleMute}>
            {muted ? (
              <VolumeX size={16} className="text-white/80" />
            ) : (
              <Volume2 size={16} className="text-white" />
            )}
          </button>

          <button onClick={toggleFullscreen}>
            <Maximize size={16} className="text-white/80 hover:text-white" />
          </button>
        </div>
      </div>
    </motion.div>

    {/* ================= FEATURES GRID ================= */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Full Automation",
          text: "Control lighting, AC, curtains, and devices automatically or manually.",
        },
        {
          title: "AI Security",
          text: "Smart surveillance, motion detection, and real-time alerts.",
        },
        {
          title: "Energy Intelligence",
          text: "Optimize energy usage with AI-driven efficiency monitoring.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-8
            shadow-lg hover:shadow-xl transition
          "
        >
          <h3 className="text-2xl font-bold text-[#EA7946] mb-4">
            {item.title}
          </h3>
          <p className="text-white/70 leading-relaxed">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>

    {/* ================= CTA ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.a
        href="https://zuccess.io/"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          inline-block px-14 py-5 rounded-full
          bg-[#EA7946] text-white font-bold text-xl
          shadow-lg shadow-[#EA7946]/40
          hover:shadow-xl hover:shadow-[#EA7946]/60
          transition-all
        "
      >
        Discover Intelligent Living →
      </motion.a>
    </motion.div>

  </div>
</section>



      {/* =========================================================================
   ⭐ FUTURISTIC AI AVATAR — GLASS + GRADIENT PREMIUM DESIGN
   ========================================================================= */}
      <section
        id="avatar-details"
        className="
    relative w-full py-32 px-8 md:px-20 
    bg-gradient-to-b from-[#020617] via-[#0B0844] to-[#0B0844]
    text-white overflow-hidden
  "
      >
        {/* Floating Blurs for Atmosphere */}
        <div className="absolute top-[-100px] right-[0] w-[450px] h-[450px] bg-[#EA7946]/30 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-100px] left-[0] w-[350px] h-[350px] bg-[#0B5EFF]/20 blur-[200px] rounded-full"></div>

        {/* Floating Gradient Lines */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('/grid-light.svg')] bg-cover bg-center"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#fff] to-[#EA7946] bg-clip-text text-transparent">
                Meet Your AI Avatar
              </span>
              <span className="block text-4xl mt-3 text-white/80">
                Human-like • Intelligent • Always Available
              </span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Transform your website with a next-generation AI avatar that communicates,
              understands, reacts, and engages with your audience in a lifelike and
              ultra-responsive manner.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              {[
                "Ultra-realistic animations",
                "Understands intent instantly",
                "Multilingual in real time",
                "Perfect for sales & support",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-3 text-white/85"
                >
                  <div className="w-3 h-3 bg-[#EA7946] rounded-full"></div>
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — AVATAR CARD WITH INTERACTIVE BUBBLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center relative group"
          >
            {/* 💬 Floating Attention Bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
              className="
      absolute -top-12 left-1/2 -translate-x-1/2
      bg-white/20 backdrop-blur-xl 
      text-white text-sm px-4 py-2 
      rounded-full shadow-lg
      opacity-0 group-hover:opacity-100
      translate-y-2 group-hover:translate-y-0
      transition-all duration-700
      bubble-animation
      pointer-events-none
    "
            >
              Try Talking to Me!
            </motion.div>

            {/* 🎥 Avatar Card */}
            <div
              className="
      w-[90%] md:w-[80%]
      backdrop-blur-xl bg-white/10 
      p-6 rounded-3xl border border-white/20
      shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      relative z-10
      group-hover:scale-[1.02]
      transition duration-500
    "
            >
              <AvatarFrame />
            </div>
          </motion.div>


        </div>
      </section>
 {/* =========================================================================
 ⭐ PROJECTS WE’VE WORKED ON — SEAPOINT CASE STUDY
============================================================================ */}
<section
  id="realestate-details"
  className="w-full py-32 px-8 md:px-20 bg-[#FFF8E8] text-[#0B0844]"
>
  <div className="max-w-5xl mx-auto space-y-20">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="text-center space-y-6"
    >

      {/* SECTION LABEL */}
      <p className="text-sm md:text-base uppercase tracking-widest text-[#0B0844]/60">
        Projects We’ve Worked On
      </p>

      <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
        SeaPoint 
      </h2>

      <p className="text-lg md:text-xl text-[#EA7946] font-medium">
        Smart Digital Experience • AI Call Center • Integrated Systems
      </p>

      {/* Divider */}
      <div className="mx-auto w-20 h-[3px] bg-[#EA7946] rounded-full"></div>
    </motion.div>

    {/* DESCRIPTION */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center text-[#0B0844]/85 text-lg leading-relaxed space-y-6"
    >
      <p>
        SeaPoint is a comprehensive digital project that we developed to deliver
        a modern and seamless online experience. The platform combines elegant
        design with smart digital functionality, tailored to support real-world
        business operations.
      </p>

      <p>
        As part of the SeaPoint project, we implemented an AI-powered Call Center
        solution that enhances customer communication through intelligent call
        routing, real-time monitoring, and AI-assisted agent support.
      </p>

      
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="text-center space-y-4"
    >
      <a
        href="https://seapointmknn.netlify.app"
        target="_blank"
        className="
          inline-block px-12 py-4 rounded-full 
          bg-[#EA7946] text-white font-semibold text-lg
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300
        "
      >
        Explore SeaPoint Project
      </a>

      <p className="text-sm text-[#0B0844]/70">
        Access the AI-powered Call Center system:
        <a
          href="https://mkn-callcenter-frontend.onrender.com/"
          target="_blank"
          className="ml-1 underline text-[#EA7946] font-medium"
        >
          Open Call Center Dashboard
        </a>
      </p>
    </motion.div>

  </div>
</section>





      {/* =======================================================
    COMPANY PROFILE DESIGN — ULTRA PREMIUM ANIMATION
======================================================= */}
      <section
        id="profile-details"
        className="w-full py-36 px-8 md:px-20 bg-[#0B0844] text-white overflow-hidden relative"
      >
        {/* DARK FADE-IN OVERLAY */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[#0B0844]"
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TITLE – PREMIUM ENTRANCE */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.6, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-extrabold text-center tracking-wide text-[#EA7946]"
          >
            Company Profile Design
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/80 text-center max-w-3xl mx-auto mt-6 text-lg md:text-xl"
          >
            Premium corporate profile design crafted with high-end branding, modern layouts, and elegant storytelling.
          </motion.p>

          {/* CARDS GRID WITH INSANE ANIMATION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">

            {[
              {
                title: "AKH Company Profile",
                img: "/company/AKHCp.png",
                link: "https://drive.google.com/file/d/1MpKYXIUV9BKDueQfwBpMX_dFLOk-PVu_/view?usp=sharing",
                delay: 0.2,
              },
              {
                title: "ZUCCESS Company Profile",
                img: "/company/zuccessCp.png",
                link: "https://drive.google.com/file/d/1pjFFVB1NeNVhMhzMC3n3Q6WhnBb2byFm/view?usp=sharing",
                delay: 0.4,
              },
              {
                title: "Intelligent Home Profile",
                img: "/company/intellignthome.png",
                link: "https://drive.google.com/file/d/1y-K8DSPWbPpB3AuD3CvkMZ2ps4T8qt0o/view?usp=sharing",
                delay: 0.6,
              }
            ].map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                target="_blank"
                initial={{ opacity: 0, y: 100, rotate: -5, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: card.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                {/* CARD HOVER 3D ANIMATION */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8 }}
                  transition={{ type: "spring", stiffness: 170, damping: 12 }}
                  className="w-full h-[260px] bg-white/10 shadow-xl rounded-xl overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={card.img}
                    width={400}
                    height={300}
                    alt={card.title}
                    className="object-contain w-full h-full group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                </motion.div>

                {/* NAME — WHITE CREAM */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.delay + 0.3 }}
                  className="mt-5 text-center font-bold text-xl"
                  style={{ color: "#FFF8E8" }}
                >
                  {card.title}
                </motion.p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================================
    ⭐ PUDU ROBOTICS — SMART SERVICE ROBOTS (WITH VIDEO POPUPS & LINKS)
============================================================================ */}
      <section
        id="pudu-robots"
        className="w-full py-32 px-8 md:px-20 bg-[#0B0844] text-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-[#EA7946]/20 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 left-20 w-[350px] h-[350px] bg-white/10 blur-[140px] rounded-full" />
        </div>

        {/* ⭐ VIDEO POPUP – ONLY THIS ONE */}
        {videoToShow && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
            onClick={() => setVideoToShow(false)}
          >
            <div className="relative w-[90%] md:w-[70%] lg:w-[55%] rounded-2xl overflow-hidden shadow-xl">
              <video
                src={videoToShow}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={() => setVideoToShow(false)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-6xl font-poppins font-bold"
          >
            Pudu Robotics
            <span className="text-[#EA7946]"> — Smart Service Robots</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-lg text-white/80 max-w-3xl mx-auto font-nunito"
          >
            As an official AI solutions provider & reseller, we bring next-generation
            delivery & cleaning robots to hospitality, healthcare, and enterprise sectors.
          </motion.p>

          {/* ⭐ OFFICIAL PUDU WEBSITE BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="https://www.pudurobotics.com/en"
              target="_blank"
              className="
          inline-block px-10 py-4 rounded-full 
          bg-[#EA7946] text-white font-bold text-lg
          shadow-lg hover:scale-105 hover:shadow-[#EA7946]/40 
          transition-all
        "
            >
              Learn More on PUDU Robotics →
            </a>
          </motion.div>

          {/* Robots Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* ROBOT 1 — FlashBot Max */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl overflow-hidden hover:scale-[1.03] transition shadow-lg"
            >
              <div className="w-full h-[300px] bg-white flex items-center justify-center p-6">
                <Image
                  src="/robots/FlashBot.png"
                  width={400}
                  height={300}
                  alt="FlashBot Max"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">FlashBot Max</h3>
                <p className="text-white/70 mt-2 text-sm">
                  Building Delivery Expert
                </p>

                <button
                  onClick={() => setVideoToShow("/partners/FlashBot.mp4")}
                  className="mt-4 px-5 py-2 rounded-full bg-[#EA7946] text-white text-sm font-semibold hover:bg-[#f28b5f] transition"
                >
                  ▶ Watch Video
                </button>
              </div>
            </motion.div>

            {/* ROBOT 2 — Heavy-Payload Delivery Robot */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl overflow-hidden hover:scale-[1.03] transition shadow-lg"
            >
              <div className="w-full h-[300px] bg-white flex items-center justify-center p-6">
                <Image
                  src="/robots/bellabot.png"
                  width={400}
                  height={300}
                  alt="Heavy-Payload Delivery Robot"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">Heavy-Payload Delivery Robot</h3>
                <p className="text-white/70 mt-2 text-sm">
                  High-capacity autonomous robot for industrial operations.
                </p>

                <button
                  onClick={() => setVideoToShow("/partners/pudu_t600.mp4")}
                  className="mt-4 px-5 py-2 rounded-full bg-[#EA7946] text-white text-sm font-semibold hover:bg-[#f28b5f] transition"
                >
                  ▶ Watch Video
                </button>
              </div>
            </motion.div>

            {/* ROBOT 3 — MT1 Max */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl overflow-hidden hover:scale-[1.03] transition shadow-lg"
            >
              <div className="w-full h-[300px] bg-white flex items-center justify-center p-6">
                <Image
                  src="/robots/parameters_robot.png"
                  width={400}
                  height={300}
                  alt="PUDU MT1 Max"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">PUDU MT1 Max</h3>
                <p className="text-white/70 mt-2 text-sm">
                  AI-powered 3D Perception Robotic Sweeper
                </p>

                <button
                  onClick={() => setVideoToShow("/partners/mt1_max_en.mp4")}
                  className="mt-4 px-5 py-2 rounded-full bg-[#EA7946] text-white text-sm font-semibold hover:bg-[#f28b5f] transition"
                >
                  ▶ Watch Video
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
   ⭐ ZUCCESS — SOFT CREAM PREMIUM FOOTER
============================================================================ */}
      <footer
        className="
    relative w-full 
    bg-[#FFF8E8] text-[#0B0844] 
    pt-24 pb-12 px-10 md:px-24 
    overflow-hidden
  "
      >

        {/* subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#0B0844_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* ===================== LOGO + INTRO ===================== */}
          <div>
            <Image
              src="/zuccessfooter.png"
              width={160}
              height={160}
              alt="Zuccess AI Solutions Company Logo"
              className="opacity-90"
            />

            <p className="text-[#0B0844]/70 mt-6 leading-relaxed max-w-xs">
              Innovative AI-powered solutions crafted to elevate your business and create
              future-ready digital experiences.
            </p>
          </div>

          {/* ===================== LOCATIONS ===================== */}
          <div>
            <h3 className="text-xl font-bold text-[#EA7946] mb-5">Locations</h3>

            <ul className="space-y-5 text-[#0B0844]/70 text-sm leading-relaxed">

              <li>
                <p className="font-semibold text-[#0B0844]">Ajman, UAE</p>
                <p className="text-[#EA7946]">Akh building, Jurf 3</p>
              </li>

              <li>
                <p className="font-semibold text-[#0B0844]">Nablus, Palestine</p>
                <p className="text-[#EA7946]">Rafidia Tower, 9th Floor</p>
              </li>

              <li>
                <p className="font-semibold text-[#0B0844]">Saudi Arabia</p>
                <p className="text-[#EA7946]">Khobar — الصفقة المضمونة</p>
              </li>

            </ul>
          </div>

          {/* ===================== CONTACT ===================== */}
          <div>
            <h3 className="text-xl font-bold text-[#EA7946] mb-5">Contact</h3>

            <ul className="space-y-5 text-[#0B0844]/70 text-sm">

              <li className="flex items-center gap-3">
                <a href="mailto:info@zuccess.ai" className="hover:text-[#EA7946] transition">
                  info@zuccess.ai
                </a>
              </li>

              <li className="flex items-center gap-3">
                <a href="tel:+971503294644" className="hover:text-[#EA7946] transition">
                  +971-503294644
                </a>
              </li>

            </ul>
          </div>

          {/* ===================== CLIENTS ===================== */}
          <div>
            <h3 className="text-xl font-bold text-[#EA7946] mb-5">Our Clients</h3>

            <ul className="space-y-2 text-[#0B0844]/70 text-sm leading-relaxed">
              <li>• Abdullah Khodair Alharbi</li>
              <li>• High Performance Industry</li>
              <li>• Industrial Dimensions Contracting</li>
              <li>• AMG Events</li>
              <li>• Advance Micro Technology</li>
            </ul>
          </div>
        </div>

        {/* ===================== DIVIDER ===================== */}
        <div className="w-full border-t border-[#0B0844]/10 mt-20 mb-6"></div>

        {/* ===================== COPYRIGHT ===================== */}
        <p className="text-center text-[#0B0844]/50 text-xs tracking-wide">
          © 2025 Zuccess Intelligent Systems L.L.C — All Rights Reserved
        </p>

        {/* ===================== SEO SCHEMA (JSON-LD) ===================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zuccess Intelligent Systems",
              legalName: "Zuccess Intelligent Systems L.L.C",
              url: "https://zuccess.ai",
              logo: "https://zuccess.ai/zuccessfooter.png",
              description:
                "Zuccess provides AI-powered automation, robotics, WhatsApp bots, digital transformation and modern enterprise technology solutions.",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+971503294644",
                  contactType: "customer support",
                  areaServed: "UAE",
                  availableLanguage: ["English", "Arabic"],
                },
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressCountry: "UAE",
                  addressLocality: "Ajman",
                  streetAddress: "Akh building, Jurf 3",
                },
                {
                  "@type": "PostalAddress",
                  addressCountry: "Palestine",
                  addressLocality: "Nablus",
                  streetAddress: "Rafidia Tower, 9th Floor",
                },
                {
                  "@type": "PostalAddress",
                  addressCountry: "Saudi Arabia",
                  addressLocality: "Khobar",
                  streetAddress: "Al-Safqa Al-Madmonah",
                },
              ],
            }),
          }}
        ></script>

      </footer>

 
    </>
  );
}
