"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const items = [
  {
    q: "Нужен ли опыт?",
    a: "Нужна хотя бы одна модель или страница.",
  },
  {
    q: "Сколько времени в день?",
    a: "1-2 часа.",
  },
  {
    q: "Нужны ли дополнительные расходы (прокси, аккаунты)?",
    a: "[[ПОДСТАВИТЬ]]",
    isTodo: true,
  },
  {
    q: "Подойдёт ли, если я работаю на Mac?",
    a: "[[ПОДСТАВИТЬ]]",
    isTodo: true,
  },
  {
    q: "Что если я пропущу созвон?",
    a: "Будет запись.",
  },
  {
    q: "Есть ли возврат?",
    a: "[[ПОДСТАВИТЬ]]",
    isTodo: true,
  },
  {
    q: "Как оплатить?",
    a: "Напиши мне в Telegram, оплата в личке.",
  },
  {
    q: "Есть ли гарантия результата?",
    a: "Честно: нет. Есть система, софт и разбор твоих цифр каждую неделю.",
  },
];

function AccordionItem({
  q,
  a,
  isTodo,
  index,
}: {
  q: string;
  a: string;
  isTodo?: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <AnimateIn delay={0.05 * index}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center py-5 text-left cursor-pointer group"
        >
          <span className="font-[family-name:var(--font-heading)] font-bold text-text group-hover:text-accent transition-colors duration-200 pr-4">
            {q}
          </span>
          <span
            className={`text-text-muted text-xl shrink-0 transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduced ? { height: "auto" } : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pb-5">
                {isTodo ? (
                  <span className="todo">{a}</span>
                ) : (
                  <p className="text-text-muted">{a}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export default function FAQ() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
            Частые вопросы
          </h2>
        </AnimateIn>

        <div>
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              q={item.q}
              a={item.a}
              isTodo={item.isTodo}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
