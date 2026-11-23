"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft | null {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs text-text-muted mt-1">{label}</span>
    </div>
  );
}

export default function CountdownTimer({
  streamDate,
  salesDeadline,
}: {
  streamDate: string;
  salesDeadline: string;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [phase, setPhase] = useState<"pre-stream" | "post-stream" | "closed">(
    "pre-stream"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function tick() {
      const now = Date.now();
      if (now < new Date(streamDate).getTime()) {
        setPhase("pre-stream");
        setTimeLeft(getTimeLeft(streamDate));
      } else if (now < new Date(salesDeadline).getTime()) {
        setPhase("post-stream");
        setTimeLeft(getTimeLeft(salesDeadline));
      } else {
        setPhase("closed");
        setTimeLeft(null);
      }
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [streamDate, salesDeadline]);

  if (!mounted) {
    return (
      <div className="flex gap-4 justify-center h-16 items-center">
        <span className="text-text-muted text-sm">Загрузка...</span>
      </div>
    );
  }

  if (phase === "closed" || !timeLeft) {
    return null;
  }

  const label = phase === "pre-stream" ? "До эфира" : "До конца продаж";

  return (
    <div className="text-center">
      <p className="text-sm text-text-muted mb-3">{label}</p>
      <div className="flex gap-4 justify-center">
        <Digit value={timeLeft.days} label="дн" />
        <span className="text-3xl sm:text-4xl font-bold text-text-muted self-start">
          :
        </span>
        <Digit value={timeLeft.hours} label="ч" />
        <span className="text-3xl sm:text-4xl font-bold text-text-muted self-start">
          :
        </span>
        <Digit value={timeLeft.minutes} label="мин" />
        <span className="text-3xl sm:text-4xl font-bold text-text-muted self-start">
          :
        </span>
        <Digit value={timeLeft.seconds} label="сек" />
      </div>
    </div>
  );
}
