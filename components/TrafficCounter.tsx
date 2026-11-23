"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { CONFIG } from "@/config";
import { XIcon, InstagramIcon, ThreadsIcon, RedditIcon } from "./SocialIcons";

const perSecond = CONFIG.monthlyVisits / (30 * 24 * 3600);

const sources = [
  { key: "x" as const, label: "X (Twitter)", Icon: XIcon },
  { key: "instagram" as const, label: "Instagram", Icon: InstagramIcon },
  { key: "threads" as const, label: "Threads", Icon: ThreadsIcon },
  { key: "reddit" as const, label: "Reddit", Icon: RedditIcon },
];

function formatNumber(n: number): string {
  return Math.floor(n).toLocaleString("ru-RU");
}

export default function TrafficCounter() {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number>(Date.now());
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    startRef.current = Date.now();
    let raf: number;
    function tick() {
      const dt = (Date.now() - startRef.current) / 1000;
      setElapsed(dt);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const jitter = Math.sin(elapsed * 2.1) * 0.3 + Math.cos(elapsed * 3.7) * 0.2;
  const totalVisitors = Math.floor(perSecond * elapsed + jitter);

  const totalShare = Object.values(CONFIG.socialShare).reduce(
    (a, b) => a + b,
    0
  );
  const hasShares = totalShare > 0;

  return (
    <section ref={ref} className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-text-muted text-sm uppercase tracking-wide mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Прямо сейчас
        </motion.p>

        <motion.p
          className="text-text-muted text-lg mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Пока ты читаешь эту страницу, на OnlyFans зашло:
        </motion.p>

        <motion.div
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold text-accent tabular-nums mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {formatNumber(totalVisitors)}
        </motion.div>

        <motion.p
          className="text-text-muted text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          человек
        </motion.p>

        {/* Source breakdown */}
        <div className="space-y-4 mb-10">
          {sources.map((src, i) => {
            const share = CONFIG.socialShare[src.key];
            const visitors = hasShares
              ? Math.floor(totalVisitors * share)
              : 0;
            const barPct = hasShares ? share * 100 : 0;

            return (
              <motion.div
                key={src.key}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  delay: 0.3 + i * 0.1,
                }}
              >
                <src.Icon className="w-5 h-5 text-text-muted shrink-0" />
                <span className="text-sm text-text-muted w-24 text-left shrink-0">
                  {src.label}
                </span>
                <div className="flex-1 h-2 rounded-full bg-surface overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-accent/60"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${barPct}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                  />
                </div>
                <span className="font-[family-name:var(--font-heading)] text-sm font-bold tabular-nums w-16 sm:w-20 text-right shrink-0">
                  {hasShares ? (
                    formatNumber(visitors)
                  ) : (
                    <span className="todo text-xs">[[?]]</span>
                  )}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion */}
        <motion.p
          className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold leading-snug max-w-lg mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Это люди, которые прямо сейчас ищут, на кого подписаться. Вопрос -
          придут ли они к твоим моделям
        </motion.p>

        <motion.p
          className="text-xs text-text-muted/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          Оценка на основе данных о посещаемости OnlyFans:{" "}
          <span className="todo">
            [[ПОДСТАВИТЬ: источник и месяц]]
          </span>
        </motion.p>
      </div>
    </section>
  );
}
