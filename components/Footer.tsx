import AnimateIn from "./AnimateIn";

export default function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-border">
      <AnimateIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">
            Alexeev Only
          </p>
          <div className="flex justify-center gap-6 text-text-muted text-sm">
            <a
              href="https://t.me/MY_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Telegram
            </a>
            <span className="todo text-xs self-center">
              [[ПОДСТАВИТЬ: YouTube ссылка]]
            </span>
          </div>
        </div>
      </AnimateIn>
    </footer>
  );
}
