"use client";

import { useState } from "react";

export default function BusinessCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="card-perspective h-[220px] w-[360px] cursor-pointer select-none sm:h-[240px] sm:w-[400px]"
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
          {/* Front: black side with logo */}
          <div className="card-face flex flex-col items-center justify-center gap-4 border border-white/10 bg-black shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400 text-2xl font-bold text-emerald-400">
              LB
            </div>
            <span className="text-xl font-semibold tracking-wide text-white">
              LAIRU BUSINESS
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              Tap to flip
            </span>
          </div>

          {/* Back: white side with details */}
          <div className="card-face card-face-back flex flex-col items-center justify-center gap-2 border border-black/10 bg-white p-6 text-center shadow-2xl">
            <span className="text-lg font-bold text-black">Lairu Business</span>
            <span className="text-sm text-zinc-600">Digital Business Card</span>
            <div className="mt-2 flex flex-col gap-1 text-sm text-zinc-800">
              <a
                href="mailto:udlsbusiness666@gmail.com"
                className="hover:text-emerald-700"
              >
                udlsbusiness666@gmail.com
              </a>
              <a
                href="https://www.lairubusiness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700"
              >
                www.lairubusiness.com
              </a>
              <span>+94 00 000 0000</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-emerald-200/70">Click the card to flip it</p>
    </div>
  );
}
