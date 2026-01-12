"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Globe,
  MessageCircle,
  Music2,
  Youtube,
  Bot,
} from "lucide-react";

export default function LinksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFF8E8] px-4 py-24">
      {/* Wrapper */}
      <div className="relative w-full max-w-md">
        {/* Avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#FFF8E8]">
            <Image
              src="/zuccess.png"
              alt="Zuccess"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/80 backdrop-blur-xl
            rounded-[36px]
            shadow-[0_30px_80px_rgba(11,8,68,0.15)]
            px-8 pb-10 pt-24
            text-center
            border border-[#0B0844]/10
          "
        >
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-[#0B0844]">
            ZUCCESS
          </h1>

          {/* Bio */}
          <p className="mt-3 text-sm text-[#0B0844]/70 leading-relaxed">
            AI-powered digital agency blending Gen Z creativity
            with automation & innovation.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-6">
            {[
              { icon: <Instagram />, url: "https://www.instagram.com/zuccess.ai" },
              { icon: <Facebook />, url: "https://www.facebook.com/share/19obBY4CMd/" },
              { icon: <Linkedin />, url: "https://www.linkedin.com/company/zuccess/" },
              { icon: <Music2 />, url: "https://www.tiktok.com/@zuccess.ai" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11 h-11 rounded-full
                  bg-[#EA7946]/10
                  flex items-center justify-center
                  text-[#EA7946]
                  hover:bg-[#EA7946]
                  hover:text-white
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 space-y-4">
            {/* Website */}
            <a
              href="/"
              className="
                w-full flex items-center justify-center gap-3
                py-4 rounded-full
                bg-[#0B0844]
                text-white font-semibold
                shadow-lg
                hover:bg-[#EA7946]
                hover:shadow-[0_20px_50px_rgba(234,121,70,0.4)]
                transition-all
              "
            >
              <Globe className="w-5 h-5" />
              Visit Our Website
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/971585317033"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full flex items-center justify-center gap-3
                py-4 rounded-full
                bg-white
                text-[#0B0844] font-semibold
                border border-[#0B0844]/20
                hover:bg-[#0B0844]
                hover:text-white
                transition-all
              "
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* ZAI Chatbot */}
            <a
              href="https://zaichat.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full flex items-center justify-center gap-3
                py-4 rounded-full
                bg-white
                text-[#0B0844] font-semibold
                border border-[#0B0844]/20
                hover:bg-[#EA7946]
                hover:text-white
                hover:border-[#EA7946]
                transition-all
              "
            >
              <Bot className="w-5 h-5" />
              Build Your Own AI Chatbot
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@zuccess-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full flex items-center justify-center gap-3
                py-4 rounded-full
                bg-white
                text-[#0B0844] font-semibold
                border border-[#0B0844]/20
                hover:bg-[#EA7946]
                hover:text-white
                hover:border-[#EA7946]
                transition-all
              "
            >
              <Youtube className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-[#0B0844]/40">
            © Zuccess Intelligent Systems
          </p>
        </motion.div>
      </div>
    </main>
  );
}
