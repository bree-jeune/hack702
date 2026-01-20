import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DesertBackground = () => {
    const { scrollYProgress } = useScroll();

    // Parallax values for depth
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--color-sand)]">
            {/* Atmospheric Background Gradients */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-[var(--color-sky-day)]/10 to-transparent" />
                <motion.div
                    style={{ opacity }}
                    className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,var(--color-amber-glow)_0%,transparent_70%)] blur-[120px] opacity-40"
                />
                <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            {/* Floating Code Micro-assets (Ambient Tech) */}
            <TechFloatingParticles />

            {/* Layered Atmostpheric Blobs */}
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[60vh] bg-[var(--color-sand-dark)]/20 blur-[80px] rounded-[100%] rotate-3"
            />
            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-[-5%] right-[-10%] w-[110%] h-[50vh] bg-[var(--color-amber-glow)]/10 blur-[100px] rounded-[100%] -rotate-2"
            />

            {/* Premium Tech Grid */}
            <div className="absolute bottom-0 left-0 w-full h-full perspective-[1000px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 2 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100vh] origin-bottom scale-x-[1.5]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, var(--color-charcoal) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--color-charcoal) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                        transform: 'rotateX(75deg) translateY(20%)',
                    }}
                />
                <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[var(--color-sand)] via-[var(--color-sand)]/80 to-transparent z-10" />
            </div>
        </div>
    );
};

const TechFloatingParticles = () => {
    const [bits] = useState(() =>
        Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 80 + 10,
            text: ['<div>', '{...}', 'const', '=>', '</div>', '[]', '{}', '</>'][Math.floor(Math.random() * 8)],
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 10,
            xOffset: (Math.random() - 0.5) * 40
        }))
    );

    return (
        <div className="absolute inset-0 z-0">
            {bits.map(bit => (
                <motion.div
                    key={bit.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [0, 0.1, 0],
                        y: [0, -150],
                        x: [0, bit.xOffset]
                    }}
                    transition={{
                        duration: bit.duration,
                        repeat: Infinity,
                        delay: bit.delay,
                        ease: "linear"
                    }}
                    style={{
                        left: `${bit.left}%`,
                        top: `${bit.top}%`,
                    }}
                    className="absolute font-mono text-[10px] text-[var(--color-charcoal)] tracking-widest pointer-events-none"
                >
                    {bit.text}
                </motion.div>
            ))}
        </div>
    );
};

export default DesertBackground;
