"use client";

import { CONFIG } from "@/config";

export default function SeatsCounter() {
  const { seatsTotal, seatsLeft } = CONFIG;
  const taken = seatsTotal - seatsLeft;
  const pct = (taken / seatsTotal) * 100;

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-text-muted">Занято мест</span>
        <span className="font-[family-name:var(--font-heading)] font-bold text-text">
          {taken} / {seatsTotal}
        </span>
      </div>
      <div className="h-2 rounded-full bg-surface overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      {seatsLeft <= 5 && seatsLeft > 0 && (
        <p className="text-accent text-sm mt-2 text-center font-medium">
          Осталось {seatsLeft} {seatsLeft === 1 ? "место" : seatsLeft < 5 ? "места" : "мест"}
        </p>
      )}
    </div>
  );
}
