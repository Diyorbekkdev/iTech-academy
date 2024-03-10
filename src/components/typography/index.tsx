'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
  const Tag = variant;
  const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
      <Tag className={`Typography ${variant} ${className}`}>{children}</Tag>
    </motion.div>
  );
};


