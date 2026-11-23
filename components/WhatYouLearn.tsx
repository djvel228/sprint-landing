"use client";

import AnimateIn from "./AnimateIn";

const skills = [
  {
    title: "Привлекать аудиторию",
    desc: "В X, Threads, Reddit - три платформы, где адалт ещё живой",
  },
  {
    title: "Вести ферму аккаунтов",
    desc: "Без банов, с ротацией и прокси - системно, а не вручную",
  },
  {
    title: "Приводить лидов на модель",
    desc: "Из постов и профилей - прямо в OnlyFans",
  },
  {
    title: "Уникализировать контент",
    desc: "Чтобы платформы не определяли дубликаты",
  },
  {
    title: "Считать юнит-экономику",
    desc: "Трафика: сколько стоит лид, какая связка окупается",
  },
  {
    title: "Строить трафик как систему",
    desc: "А не лотерею - процессы, метрики, масштабирование",
  },
];

export default function WhatYouLearn() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
            Чему научишься
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <AnimateIn key={i} delay={0.05 * i}>
              <div className="bg-surface border border-border rounded-xl p-5 h-full hover:border-accent/40 transition-colors duration-200">
                <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">
                  {skill.title}
                </h3>
                <p className="text-text-muted text-sm">{skill.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
