"use client";

import { useEffect, useRef } from "react";

export default function HeygenWidget() {
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const host = "https://labs.heygen.com";
    const url =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJkNmMzNDRhNmY0ZTc0Y2RkYWE2MzE2ZjBlNzVmMzhiMSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2Q2YzM0NGE2ZjRlNzRjZGRhYTYzMTZmMGU3NWYzOGIxL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImZlMGQ1YzczMDU1MDQ1N2Q4ZDM0Y2YxNDI5MWI5MjhmIiwidXNlcm5hbWUiOiI2ODA3YTliMjIxOWE0YzdiOGZhNWMyNTQ0NjQ2MTI5ZSJ9&inIFrame=1&autoplay=1";

    // منع التكرار
    if (iframeRef.current.querySelector("iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.allow = "microphone; camera";
    iframe.title = "AI Assistant";
    iframe.className = "absolute inset-0 w-full h-full border-0";

    iframeRef.current.appendChild(iframe);

    return () => {
      iframe.remove();
    };
  }, []);

  return (
    <section className="flex justify-center py-20 bg-gradient-to-b from-[#f7f7f2] to-white">
      <div className="relative w-full max-w-[420px] rounded-3xl bg-[#ebebdf] p-5 shadow-2xl">
        
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <p className="font-semibold leading-tight">AI Assistant</p>
            <p className="text-xs text-emerald-500">Online Now</p>
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative h-[260px] rounded-2xl overflow-hidden bg-black">
          <div ref={iframeRef} className="absolute inset-0" />
        </div>

        {/* FEATURES */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-600">
          <span className="rounded-full bg-white px-3 py-1">
            Real-time Chat
          </span>
          <span className="rounded-full bg-white px-3 py-1">
            24/7 Available
          </span>
          <span className="rounded-full bg-white px-3 py-1">
            Secure & Private
          </span>
        </div>
      </div>
    </section>
  );
}
