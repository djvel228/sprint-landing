"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimateIn from "./AnimateIn";

const problems = [
  "Instagram для адалта фактически закрыт - у нас его забанили в июле 2026.",
  "Теневые баны в X и Reddit режут охваты в разы.",
  "Один аккаунт = одна точка отказа: бан - и поток подписчиков на ноль.",
  "Без трафика чатеры сидят без диалогов, а модели уходят.",
  "[[ПОДСТАВИТЬ: сколько потеряли за год]]",
];

const timeline = [
  {
    date: "20 сентября",
    text: "Запустили ферму в X (~27 аккаунтов постоянно) + Reddit",
  },
  {
    date: "Результат",
    text: "[[ПОДСТАВИТЬ: что получили, как держим планку]]",
    isTodo: true,
  },
  {
    date: "Сейчас",
    text: "Видим стратегию и зовём тебя проверить её вместе",
  },
];

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
            Наша история
          </h2>
        </AnimateIn>

        {/* Author intro */}
        <AnimateIn delay={0.1}>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">
            Я - Валерий Алексеев. У меня своё OF-агентство:{" "}
            <span className="todo">
              [[ПОДСТАВИТЬ: сколько моделей, оборот]]
            </span>
            . Мы сталкиваемся с тем же, что и ты.
          </p>
        </AnimateIn>

        {/* Problems list */}
        <div className="space-y-4 mb-12">
          {problems.map((text, i) => {
            const isTodo = text.startsWith("[[");
            return (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  delay: 0.2 + i * 0.15,
                }}
              >
                <span className="text-accent mt-0.5 shrink-0 text-lg">
                  ×
                </span>
                {isTodo ? (
                  <span className="todo">{text}</span>
                ) : (
                  <span className="text-text">{text}</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Transition */}
        <AnimateIn>
          <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-center mb-10">
            Но выход есть
          </p>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-accent/30 space-y-8 mb-12">
          {timeline.map((item, i) => (
            <AnimateIn key={i} delay={0.1 * i}>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-accent" />
                <p className="text-accent text-sm font-medium mb-1">
                  {item.date}
                </p>
                {item.isTodo ? (
                  <p className="todo">{item.text}</p>
                ) : (
                  <p className="text-text-muted">{item.text}</p>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Author photo placeholder */}
        <AnimateIn>
          <div className="w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl bg-surface border border-border flex items-center justify-center">
            <span className="text-text-muted text-sm text-center px-4">
              Фото автора - Валерий Алексеев
            </span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
