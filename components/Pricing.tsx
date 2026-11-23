"use client";

import { useState, useEffect } from "react";
import { CONFIG } from "@/config";
import AnimateIn from "./AnimateIn";
import CTAButton from "./CTAButton";
import SeatsCounter from "./SeatsCounter";

type Phase = "pre-stream" | "post-stream" | "closed";

function getPhase(): Phase {
  const now = Date.now();
  if (now < new Date(CONFIG.streamDate).getTime()) return "pre-stream";
  if (now < new Date(CONFIG.salesDeadline).getTime()) return "post-stream";
  return "closed";
}

const included = [
  `Участие в спринте 30 дней, старт ${CONFIG.sprintStart}`,
  "Созвоны каждый понедельник с разбором твоих цифр",
  "Закрытый чат участников",
  "Доступ к нашему софту Amphis на 3 платформы (X, Instagram, Threads) на месяц",
  "После спринта - Amphis за $150/мес навсегда (обычная цена $250/мес)",
  "[[ПОДСТАВИТЬ: доступ к ферме для тестов / другие бонусы]]",
];

export default function Pricing() {
  const [phase, setPhase] = useState<Phase>("pre-stream");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPhase(getPhase());
    const id = setInterval(() => setPhase(getPhase()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="price" className="px-4 py-20 md:py-28">
      <div className="max-w-lg mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
            Цена и что входит
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="bg-surface border border-accent/30 rounded-2xl p-6 sm:p-8">
            {/* Price */}
            <div className="text-center mb-6">
              {mounted && phase === "post-stream" ? (
                <>
                  <span className="text-text-muted line-through text-xl">
                    ${CONFIG.regularPrice}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-accent ml-3">
                    ${CONFIG.streamPrice}
                  </span>
                  <p className="text-accent text-sm mt-2">до 30 ноября</p>
                </>
              ) : (
                <>
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-text">
                    ${CONFIG.regularPrice}
                  </span>
                  {phase === "pre-stream" && (
                    <p className="text-accent text-sm mt-2">
                      На эфире 27 ноября - специальная цена для первых
                      участников
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Included */}
            <ul className="space-y-3 mb-8">
              {included.map((item, i) => {
                const isTodo = item.startsWith("[[");
                return (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {isTodo ? (
                      <span className="todo text-sm">{item}</span>
                    ) : (
                      <span className="text-text-muted text-sm">{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Value line */}
            <p className="text-text-muted text-sm text-center mb-6 italic">
              Только софт отдельно стоит $250/мес
            </p>

            {/* Seats */}
            <div className="mb-6">
              <SeatsCounter />
            </div>

            {/* CTA */}
            <div className="text-center">
              <CTAButton className="w-full" />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
