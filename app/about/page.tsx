"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar"; // ⬅ تمت إضافة النافبار هنا
import { Sparkles, PenTool, Handshake, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E8] text-[#0B0844] relative">

      {/* ========================= NAVBAR ========================= */}
      <Navbar />

      {/* ========================= HERO FULLSCREEN IMAGE ========================= */}
      <section className="relative w-full h-screen overflow-hidden">

        <Image
          src="/amani.png"
          alt="About Zuccess"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl"
          >
            Get to know <span className="text-[#EA7946]">Us!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed"
          >
            We’re Zuccess — a Gen Z team blending creativity and AI to help brands grow
            smarter, faster, and bolder.
          </motion.p>
        </div>

        {/* Scroll Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() =>
            document.getElementById("about-mission")?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            absolute bottom-10 left-1/2 -translate-x-1/2
            w-14 h-14 rounded-full border-2 border-white/40
            flex items-center justify-center
            text-white hover:text-[#EA7946]
            hover:border-[#EA7946]
            transition-all duration-300
            backdrop-blur-md bg-white/10
          "
        >
          <span className="text-3xl animate-bounce">↓</span>
        </motion.button>
      </section>

      {/* ========================= WHO ARE WE ========================= */}
      <section
        id="about-mission"
        className="relative w-full py-32 px-8 md:px-24 bg-[#FFF8E8]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center text-[#0B0844]"
        >
          Who Are We?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-[#0B0844]/80 mt-6 max-w-4xl mx-auto text-center leading-relaxed"
        >
          We fuse AI with Gen Z creativity to power smarter businesses, stronger communities,
          and a future driven by imagination.
        </motion.p>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-2xl p-10 shadow-md border border-[#0B0844]/10"
          >
            <h3 className="text-3xl font-bold text-[#EA7946] mb-4">Our Mission</h3>
            <p className="text-[#0B0844]/80 text-lg leading-relaxed">
              Empowering businesses with smart automation, AI innovation, and creative
              intelligence — all designed for real-world impact.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-2xl p-10 shadow-md border border-[#0B0844]/10"
          >
            <h3 className="text-3xl font-bold text-[#EA7946] mb-4">Our Vision</h3>
            <p className="text-[#0B0844]/80 text-lg leading-relaxed">
              100 weeks. 100 companies. 100 Gen-Z minds reshaping the future with AI-powered
              innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================= WHAT DRIVES US ========================= */}
      <section className="relative w-full py-32 px-8 md:px-24 bg-[#FFF8E8] overflow-hidden">

        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle,#EA7946_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-6xl font-extrabold text-[#0B0844]"
        >
          What <span className="text-[#EA7946]">Drives</span> Us
        </motion.h2>

        <p className="text-center text-lg max-w-2xl mx-auto text-[#0B0844]/70 mt-4">
          Our core values that fuel every idea, decision, and innovation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">

          {[
            {
              num: "1",
              title: "Innovation First",
              text: "AI at the heart of everything.",
              icon: <Sparkles className="w-10 h-10 text-[#EA7946]" />
            },
            {
              num: "2",
              title: "Creative Precision",
              text: "Details that leave a mark.",
              icon: <PenTool className="w-10 h-10 text-[#EA7946]" />
            },
            {
              num: "3",
              title: "Client-Centric Ownership",
              text: "Your success is ours.",
              icon: <Handshake className="w-10 h-10 text-[#EA7946]" />
            },
            {
              num: "4",
              title: "Speed with Purpose",
              text: "Fast, effective delivery.",
              icon: <Rocket className="w-10 h-10 text-[#EA7946]" />
            }
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="
                bg-white/40 backdrop-blur-xl 
                p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                border border-white/60
                hover:scale-105 hover:shadow-[0_20px_60px_rgba(234,121,70,0.3)]
                transition-all duration-500 cursor-default
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-[#EA7946]/10 flex items-center justify-center mb-6">
                {v.icon}
              </div>

              <span className="text-3xl font-extrabold text-[#EA7946]">{v.num}</span>

              <h3 className="text-2xl font-bold mt-3 text-[#0B0844]">{v.title}</h3>

              <p className="text-[#0B0844]/70 mt-3 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="w-full py-32 px-8 md:px-24 bg-[#FFF8E8]">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-6xl font-extrabold text-[#0B0844]"
        >
          Why <span className="text-[#EA7946]">Zuccess</span>
        </motion.h2>

        <p className="text-center text-lg max-w-3xl mx-auto text-[#0B0844]/70 mt-6">
          Explore Zuccess through real projects, immersive experiences, and impactful stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-5xl mx-auto">

          {[
            { title: "Zuccess Company Profile | All Services in One Video", url: "https://youtu.be/M-R8kvkJ-No?si=6Mr9WYLJ_vGbBC3K" },
            { title: "Zuccess Interactive Virtual Tour | Step Into the Future", url: "https://youtu.be/Qw_cONJKDug?si=5XMIS5SmxaPrfuUe" },
            { title: "Inside HPI’s Facility | Professional Video Tour by Zuccess", url: "https://youtu.be/LrS1cmpq64I?si=8IakJwSsNbRbCtzB" },
            { title: "Safety First | HPI Employee Awareness Video", url: "https://youtu.be/6kmpjcb0tdc?si=9EssfGM3v4g4LQyp" },
            { title: "HPI Company Profile | Presented by Sara & Rashid", url: "https://youtu.be/NdaU19Cbpdw?si=cZBNO1OCw-jKDQw9" },
            { title: "AMT Professional Video | Showcasing Innovation with Zuccess", url: "https://youtu.be/xjcmXF3MkWQ?si=aHOUdZcd7iRpAt2L" },
          ].map((video, i) => (
            <motion.a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="
          flex items-center gap-6 p-6 rounded-3xl
          bg-white/60 backdrop-blur
          border border-[#0B0844]/10
          shadow-md hover:shadow-xl hover:scale-[1.02]
          transition-all
        "
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EA7946]/10 flex items-center justify-center">
                ▶
              </div>

              <h3 className="text-lg font-semibold text-[#0B0844] hover:text-[#EA7946] transition">
                {video.title}
              </h3>
            </motion.a>
          ))}

        </div>
      </section>

      {/* ========================= CLIENTS CAROUSEL ========================= */}
      <section className="w-full py-32 px-8 md:px-24 bg-[#FFF8E8] text-[#0B0844]">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-extrabold"
        >
          Our <span className="text-[#EA7946]">Clients</span>
        </motion.h2>

        <p className="text-center text-lg max-w-2xl mx-auto text-[#0B0844]/70 mt-4">
          We don’t just provide services — we become your partners in success.
        </p>

        <div className="w-full overflow-hidden mt-16">
          <div className="flex gap-16 animate-scroll whitespace-nowrap">

            {[
              { name: "Abdullah Khodair Alharbi", img: "/clients/abdullah_khodair.png" },
              { name: "High Performance Industry", img: "/clients/high_performance_industry.png" },
              { name: "Industrial Dimensions Contracting", img: "/clients/industrial_dimensions.png" },
              { name: "AMG Events", img: "/clients/amg_events.png" },
              { name: "Advance Micro Technology", img: "/clients/advance_micro_technology.png" },
            ]
              .concat([
                { name: "Abdullah Khodair Alharbi", img: "/clients/abdullah_khodair.png" },
                { name: "High Performance Industry", img: "/clients/high_performance_industry.png" },
                { name: "Industrial Dimensions Contracting", img: "/clients/industrial_dimensions.png" },
                { name: "AMG Events", img: "/clients/amg_events.png" },
                { name: "Advance Micro Technology", img: "/clients/advance_micro_technology.png" },
              ])
              .map((client, i) => (
                <div key={i} className="inline-flex flex-col items-center">
                  <div className="w-28 h-28 bg-white rounded-xl shadow-md border border-[#0B0844]/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={client.img}
                      alt={client.name}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm text-[#0B0844]/70 whitespace-nowrap">
                    {client.name}
                  </p>
                </div>
              ))}

          </div>
        </div>

      </section>

      {/* ========================= FOOTER ========================= */}
      <footer
        className="
          relative w-full bg-[#FFF8E8] text-[#0B0844]
          pt-24 pb-12 px-10 md:px-24 overflow-hidden
        "
      >
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#0B0844_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Logo */}
          <div>
            <Image
              src="/zuccessfooter.png"
              width={160}
              height={160}
              alt="Zuccess Footer Logo"
              className="opacity-90"
            />

            <p className="text-[#0B0844]/70 mt-6 max-w-xs leading-relaxed">
              Innovative AI-powered solutions crafted to elevate your business and create
              future-ready digital experiences.
            </p>
          </div>

          {/* Locations */}
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

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#EA7946] mb-5">Contact</h3>
            <ul className="space-y-4 text-[#0B0844]/70 text-sm">
              <li>
                <a href="mailto:info@zuccess.ai" className="hover:text-[#EA7946] transition">
                  info@zuccess.ai
                </a>
              </li>
              <li>
                <a href="tel:+971503294644" className="hover:text-[#EA7946] transition">
                  +971-503294644
                </a>
              </li>
            </ul>
          </div>

          {/* Clients */}
          <div>
            <h3 className="text-xl font-bold text-[#EA7946] mb-5">Our Clients</h3>
            <ul className="space-y-2 text-[#0B0844]/70 text-sm">
              <li>• Abdullah Khodair Alharbi</li>
              <li>• High Performance Industry</li>
              <li>• Industrial Dimensions Contracting</li>
              <li>• AMG Events</li>
              <li>• Advance Micro Technology</li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-[#0B0844]/10 mt-16 mb-6"></div>

        <p className="text-center text-[#0B0844]/50 text-xs">
          © 2025 Zuccess Intelligent Systems L.L.C — All Rights Reserved
        </p>
      </footer>

    </main>
  );
}
