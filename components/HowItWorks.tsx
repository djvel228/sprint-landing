"use client";

import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Получаешь ферму и софт",
    desc: "Запускаешь трафик на свою модель",
  },
  {
    num: "02",
    title: "Работаешь неделю",
    desc: "Ведёшь аккаунты, публикуешь контент, собираешь лидов",
  },
  {
    num: "03",
    title: "Понедельник - созвон",
    desc: "Каждый показывает отчёт: сколько аккаунтов, публикаций, лидов",
  },
  {
    num: "04",
    title: "Разбор и оптимизация",
    desc: "Забираем то, что работает у лучших, правим то, что не работает",
  },
];

const leaderboard = [
  { rank: 1, name: "Участник A", accounts: "—", posts: "—", leads: "—" },
  { rank: 2, name: "Участник B", accounts: "—", posts: "—", leads: "—" },
  { rank: 3, name: "Участник C", accounts: "—", posts: "—", leads: "—" },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Что такое спринт и как он устроен
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-10 text-center">
            <p className="text-accent font-medium">
              Это не курс с записями. Программы с уроками нет - есть 30 дней
              работы и отчётность.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={0.1 + i * 0.1}>
              <div className="bg-surface border border-border rounded-xl p-5 h-full">
                <span className="text-accent font-[family-name:var(--font-heading)] text-3xl font-bold opacity-40">
                  {step.num}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mt-2 mb-1">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm">{step.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Leaderboard mockup */}
        <AnimateIn>
          <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
            <div className="px-5 py-3 border-b border-border">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wide text-text-muted">
                Рейтинг участников (пример)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-text-muted text-left">
                    <th className="px-5 py-3 font-medium">#</th>
                    <th className="px-5 py-3 font-medium">Участник</th>
                    <th className="px-5 py-3 font-medium text-right">
                      Аккаунты
                    </th>
                    <th className="px-5 py-3 font-medium text-right">Посты</th>
                    <th className="px-5 py-3 font-medium text-right">Лиды</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((row) => (
                    <tr key={row.rank} className="border-t border-border/50">
                      <td className="px-5 py-3 font-bold text-accent">
                        {row.rank}
                      </td>
                      <td className="px-5 py-3">{row.name}</td>
                      <td className="px-5 py-3 text-right text-text-muted">
                        {row.accounts}
                      </td>
                      <td className="px-5 py-3 text-right text-text-muted">
                        {row.posts}
                      </td>
                      <td className="px-5 py-3 text-right text-text-muted">
                        {row.leads}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <p className="text-text-muted text-center italic">
            Мы не продаём волшебную кнопку. Мы даём систему, софт и 30 дней
            тестов рядом с практиками.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
