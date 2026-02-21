"use client";

export default function HeygenWidget() {
  return (
    <section className="flex justify-center py-24 bg-gradient-to-b from-[#f7f7f2] to-white">
      
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl border border-gray-100">
        
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <p className="font-semibold text-gray-800">AI Assistant</p>
            <p className="text-xs text-emerald-500">Online Now</p>
          </div>
        </div>

        {/* VIDEO CONTAINER */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-inner">
          <div className="aspect-video">
            <iframe
              src="https://embed.liveavatar.com/v1/f0e75464-b547-499c-9b49-b8655f91b2ce"
              allow="microphone"
              title="LiveAvatar Embed"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-gray-600">
          <span className="rounded-full bg-gray-100 px-3 py-1">
            Real-time Chat
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1">
            24/7 Available
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1">
            Secure & Private
          </span>
        </div>

      </div>
    </section>
  );
}
