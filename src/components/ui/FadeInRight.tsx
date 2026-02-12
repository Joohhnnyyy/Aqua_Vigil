"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInRightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const FadeInRight = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1.5 
}: FadeInRightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRight;
