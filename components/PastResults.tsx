"use client";

import { useRef } from "react";
import AnimateIn from "./AnimateIn";

const slides = [
  "[[ПОДСТАВИТЬ: скрин + результат участника 1]]",
  "[[ПОДСТАВИТЬ: скрин + результат участника 2]]",
  "[[ПОДСТАВИТЬ: скрин + результат участника 3]]",
  "[[ПОДСТАВИТЬ: скрин + результат участника 4]]",
];

export default function PastResults() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
            Результаты прошлого спринта
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="text-text-muted text-center mb-10">
            Год назад мы уже проводили спринт по Reddit.
          </p>
        </AnimateIn>

        {/* Horizontal swipeable slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((text, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-72 sm:w-80 aspect-[4/3] bg-surface border border-border rounded-xl flex items-center justify-center p-6"
            >
              <span className="todo text-center text-sm">{text}</span>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-xs text-center mt-4">
          Свайпай для просмотра →
        </p>
      </div>
    </section>
  );
}
