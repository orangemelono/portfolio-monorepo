"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "@/store";
import Link from "next/link";

export function HeroSection() {
  const [_, setIsMenuOpen] = useRecoilState(isMenuOpenState);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer passionate about creating beautiful, functional, 
            and user-centered digital experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button size="lg" onClick={handleContactClick}>
            Contact Me
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}