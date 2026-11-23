"use client";

import { useState, useEffect } from "react";
import { CONFIG } from "@/config";

type Phase = "pre-stream" | "post-stream" | "closed";

function getPhase(): Phase {
  const now = Date.now();
  if (now < new Date(CONFIG.streamDate).getTime()) return "pre-stream";
  if (now < new Date(CONFIG.salesDeadline).getTime()) return "post-stream";
  return "closed";
}

const labels: Record<Phase, string> = {
  "pre-stream": "Записаться на эфир",
  "post-stream": "Занять место",
  closed: "Набор закрыт · записаться в следующий поток",
};

const links: Record<Phase, string> = {
  "pre-stream": CONFIG.botLink,
  "post-stream": CONFIG.dmLink,
  closed: CONFIG.botLink,
};

export default function CTAButton({ className = "" }: { className?: string }) {
  const [phase, setPhase] = useState<Phase>("pre-stream");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPhase(getPhase());
    const id = setInterval(() => setPhase(getPhase()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <span
        className={`inline-block px-8 py-4 rounded-xl bg-accent text-bg font-bold text-lg cursor-pointer ${className}`}
      >
        Загрузка...
      </span>
    );
  }

  return (
    <a
      href={links[phase]}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 cursor-pointer text-center ${
        phase === "closed"
          ? "bg-surface text-text-muted border border-border hover:border-text-muted"
          : "bg-accent hover:bg-accent-hover text-bg"
      } ${className}`}
    >
      {labels[phase]}
    </a>
  );
}
