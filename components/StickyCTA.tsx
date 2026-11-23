"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-bg/90 backdrop-blur-md border-t border-border md:hidden"
          initial={reduced ? { opacity: 1 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <CTAButton className="w-full text-base py-3" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
