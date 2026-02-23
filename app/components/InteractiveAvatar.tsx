"use client";

export default function HeygenWidget() {
  return (
    <section className="flex justify-center py-28 bg-gradient-to-b from-[#f7f7f2] to-white">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-gray-100">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="font-semibold text-gray-900 text-sm tracking-tight">
                AI Assistant
              </p>
              <p className="text-xs text-emerald-500 font-medium">
                Online Now
              </p>
            </div>
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
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-medium">
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-gray-700">
            Real-time Chat
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-gray-700">
            24/7 Available
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-gray-700">
            Secure & Private
          </span>
        </div>

      </div>
    </section>
  );
}