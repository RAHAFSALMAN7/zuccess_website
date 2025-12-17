"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      scrollToSection("home");
    } else {
      router.push("/");
    }
  };

  const navItems = [
    { id: "home", label: "Home", type: "home" },
    { id: "/about", label: "About", type: "page" },
    { id: "/contact", label: "Contact", type: "page" }, // ← الآن contact صفحة مستقلة
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-gradient-to-r from-[#0B0844]/40 via-[#0B0844]/20 to-[#0B0844]/40
        border-b border-white/10 shadow-xl
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* LOGO = رجوع للهوم */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer group"
            onClick={handleHomeClick}
          >
            <div className="relative w-[150px] h-[150px]">
              <div className="
                absolute inset-0 blur-[90px] rounded-full 
                bg-[#EA7946]/50 opacity-60 
                group-hover:opacity-80 transition duration-300
              " />
              <Image
                src="/zuccess_logo.png"
                alt="Zuccess Logo"
                fill
                className="relative z-10 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            
            {navItems.map((item, idx) => {

              // PAGES مثل About / Contact
              if (item.type === "page") {
                return (
                  <Link
                    key={idx}
                    href={item.id}
                    className="
                      relative px-4 py-2 text-white/90 font-medium text-lg
                      group transition hover:text-white
                    "
                  >
                    <span className="
                      absolute bottom-0 left-0 h-[2px] w-0
                      bg-gradient-to-r from-[#EA7946] to-[#ff9a6c]
                      group-hover:w-full transition-all duration-300
                    " />
                    {item.label}
                  </Link>
                );
              }

              // ONLY HOME USES SCROLL
              if (item.type === "home") {
                return (
                  <motion.button
                    key={idx}
                    onClick={handleHomeClick}
                    className="
                      relative px-4 py-2 text-white/90 font-medium text-lg
                      group transition hover:text-white
                    "
                  >
                    <span className="
                      absolute bottom-0 left-0 h-[2px] w-0
                      bg-gradient-to-r from-[#EA7946] to-[#ff9a6c]
                      group-hover:w-full transition-all duration-300
                    " />
                    {item.label}
                  </motion.button>
                );
              }

            })}

          </div>

          {/* MOBILE ICON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#EA7946]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">

            {navItems.map((item, idx) => {

              if (item.type === "page") {
                return (
                  <Link
                    key={idx}
                    href={item.id}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-6 py-3 text-white/90 hover:bg-white/10 rounded-lg"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === "home") {
                return (
                  <button
                    key={idx}
                    onClick={() => { handleHomeClick(); setIsOpen(false); }}
                    className="block w-full text-left px-6 py-3 text-white/90 hover:bg-white/10 rounded-lg"
                  >
                    Home
                  </button>
                );
              }

            })}

          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
