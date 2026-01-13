import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DesertBackground = () => {
    const { scrollYProgress } = useScroll();
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--color-sand)]">
            {/* Sun / Tech Orb */}
            <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full bg-[radial-gradient(circle,var(--color-amber-glow)_0%,transparent_70%)] blur-3xl opacity-60" />

            {/* Floating Tech Particles (Code bits) */}
            <ParticleContainer />

            {/* Dunes Layer 3 (Furthest) */}
            <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] left-0 w-full h-[50vh] opacity-40">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-[var(--color-sand-dark)]">
                    <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Dunes Layer 2 (Middle) */}
            <motion.div style={{ y: y2 }} className="absolute bottom-[-5%] left-0 w-full h-[40vh] opacity-60">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-[var(--color-amber-light)] opacity-20">
                    <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Tech Grid Overlay on ground */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[linear-gradient(to_top,rgba(26,26,26,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(26,26,26,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none" />
        </div>
    );
};

const ParticleContainer = () => {
    // Generate random particles once using useMemo to ensure purity
    const particles = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5,
        xOffset: (Math.random() - 0.5) * 50
    })), []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: [0, -100],
                        x: [0, p.xOffset]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`
                    }}
                    className="absolute w-1 h-1 bg-[var(--color-amber)] rounded-full"
                />
            ))}
            <motion.div
                animate={{ opacity: [0, 0.1, 0], y: [0, -50] }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute top-[40%] left-[20%] font-mono text-xs text-[var(--color-charcoal)] opacity-10 rotate-12"
            >
                {"<div>"}
            </motion.div>
            <motion.div
                animate={{ opacity: [0, 0.1, 0], y: [0, -50] }}
                transition={{ duration: 18, repeat: Infinity, delay: 5 }}
                className="absolute top-[60%] right-[30%] font-mono text-xs text-[var(--color-charcoal)] opacity-10 -rotate-6"
            >
                {"{ return null }"}
            </motion.div>
        </div>
    );
};

export default DesertBackground;
