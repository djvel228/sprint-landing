import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Спринт по трафику · 30 дней · Alexeev Only",
  description:
    "30 дней практики на ферме аккаунтов в X, Threads и Reddit. Созвоны каждый понедельник, наш софт и цель — 100 лидов в день.",
  openGraph: {
    title: "Спринт по трафику · Alexeev Only",
    description:
      "30 дней совместной работы над трафиком для OnlyFans-агентств. Ферма аккаунтов, софт, еженедельные созвоны.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
