'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface MotionDivProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down'; 
    delay?: number;
}

export const MotionDiv: React.FC<MotionDivProps> = ({ children, direction = 'left', delay=0.9 }) => {
    const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.9 });
    const animationDirections = {
        left: { opacity: 0, x: -30 },
        right: { opacity: 0, x: 30 },
        up: { opacity: 0, y: -30 },
        down: { opacity: 0, y: 30 },
    };

    return (
        <motion.div
            variants={{
                hidden: animationDirections[direction], 
                visible: { opacity: 1, x: 0, y: 0 },
            }}
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: delay }}
        >
            {children}
        </motion.div>
    );
};

