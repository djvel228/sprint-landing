"use client";

import AnimateIn from "./AnimateIn";

const forYou = [
  "У тебя уже есть модель или агентство",
  "Не умеешь стабильно вести трафик или упёрся в его потолок",
  "Не понимаешь, как устроены алгоритмы соцсетей и почему аккаунты улетают в бан",
  "Готов уделять 1-2 часа в день",
  "Хочешь считать цифры, а не верить",
];

const notForYou = [
  "Ищешь пассивный доход без работы",
  "Ещё нет ни одной модели",
  "Ждёшь гарантий заработка",
];

export default function ForWhom() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
            Для кого / не для кого
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For you */}
          <AnimateIn delay={0.1}>
            <div className="bg-surface border border-border rounded-xl p-6 h-full">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent mb-4">
                Для тебя, если:
              </h3>
              <ul className="space-y-3">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">+</span>
                    <span className="text-text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Not for you */}
          <AnimateIn delay={0.2}>
            <div className="bg-surface border border-border rounded-xl p-6 h-full">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-muted mb-4">
                Не для тебя, если:
              </h3>
              <ul className="space-y-3">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-text-muted mt-0.5 shrink-0">−</span>
                    <span className="text-text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
