"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    if (document.getElementById("chat-widget-script")) return;

    const script = document.createElement("script");
    script.id = "chat-widget-script";
    script.src = "/chat-widget.js"; // 👈 هذا الملف اللي أنشأناه
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}