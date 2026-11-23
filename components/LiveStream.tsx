"use client";

import { useState, useEffect } from "react";
import { CONFIG } from "@/config";
import AnimateIn from "./AnimateIn";
import CountdownTimer from "./CountdownTimer";

type Phase = "pre-stream" | "post-stream" | "closed";

function getPhase(): Phase {
  const now = Date.now();
  if (now < new Date(CONFIG.streamDate).getTime()) return "pre-stream";
  if (now < new Date(CONFIG.salesDeadline).getTime()) return "post-stream";
  return "closed";
}

export default function LiveStream() {
  const [phase, setPhase] = useState<Phase>("pre-stream");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPhase(getPhase());
    const id = setInterval(() => setPhase(getPhase()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateIn>
          {mounted && phase === "pre-stream" ? (
            <>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Хочешь узнать подробнее? Приходи на эфир
              </h2>
              <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto">
                27 ноября в 19:00 МСК покажу ферму изнутри: что мы уже сделали,
                к чему пришли и чему научились. Расскажу, как будет устроен
                спринт, и отвечу на вопросы. Участники эфира первыми получат
                оффер со скидкой Черной пятницы и бонусы.
              </p>

              <div className="mb-8">
                <CountdownTimer
                  streamDate={CONFIG.streamDate}
                  salesDeadline={CONFIG.salesDeadline}
                />
              </div>

              <a
                href={CONFIG.botLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-xl bg-accent hover:bg-accent-hover text-bg font-bold text-lg transition-colors duration-200 cursor-pointer"
              >
                Записаться на эфир
              </a>
            </>
          ) : mounted && phase === "post-stream" ? (
            <>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Запись эфира - в боте
              </h2>
              <p className="text-text-muted text-lg mb-8">
                Эфир уже прошёл, но запись доступна. Смотри и принимай решение.
              </p>
              <a
                href={CONFIG.botLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-xl bg-surface border border-border hover:border-accent text-text font-bold text-lg transition-colors duration-200 cursor-pointer"
              >
                Смотреть запись в боте
              </a>
            </>
          ) : (
            <>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Эфир прошёл
              </h2>
              <p className="text-text-muted text-lg">
                Набор в текущий поток закрыт. Запишись, чтобы узнать о
                следующем.
              </p>
            </>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
