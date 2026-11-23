"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  XIcon,
  ThreadsIcon,
  InstagramIcon,
  RedditIcon,
} from "./SocialIcons";
import CountdownTimer from "./CountdownTimer";
import CTAButton from "./CTAButton";
import SeatsCounter from "./SeatsCounter";
import { CONFIG } from "@/config";

const floatingIcons = [
  { Icon: XIcon, x: -120, y: -80, delay: 0 },
  { Icon: ThreadsIcon, x: 130, y: -60, delay: 0.2 },
  { Icon: InstagramIcon, x: -140, y: 60, delay: 0.4 },
  { Icon: RedditIcon, x: 150, y: 80, delay: 0.6 },
];

function FloatingIcon({
  Icon,
  x,
  y,
  delay,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  delay: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="absolute text-text-muted/20 hidden md:block"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        reduced
          ? { opacity: 0.2, scale: 1 }
          : {
              opacity: [0.1, 0.25, 0.1],
              scale: [0.9, 1.1, 0.9],
              y: [0, -12, 0],
            }
      }
      transition={
        reduced
          ? { duration: 0.3, delay }
          : { duration: 4, repeat: Infinity, delay, ease: "easeInOut" }
      }
    >
      <Icon className="w-10 h-10" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-12 overflow-hidden">
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {floatingIcons.map((props, i) => (
            <FloatingIcon key={i} {...props} />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Supheading */}
        <motion.p
          className="text-accent text-sm font-medium tracking-wide uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Спринт по трафику · 30 дней · {CONFIG.seatsTotal} мест
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Соцсети душат адалт. Мы нашли, где трафик ещё живой - и проверим это
          вместе с тобой
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-text-muted text-lg sm:text-xl mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          30 дней практики на ферме аккаунтов в X, Threads и Reddit. Созвоны
          каждый понедельник, наш софт и цель - 100 лидов в день.
        </motion.p>

        {/* Timer */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CountdownTimer
            streamDate={CONFIG.streamDate}
            salesDeadline={CONFIG.salesDeadline}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTAButton />
        </motion.div>

        {/* Seats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SeatsCounter />
        </motion.div>
      </div>
    </section>
  );
}
