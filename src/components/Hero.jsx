import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CreditCard, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-16 pb-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-[radial-gradient(ellipse_at_center,var(--color-amber-glow)_0%,transparent_70%)] pointer-events-none z-0" />

            <div className="container relative z-10">
                <div className="max-w-[800px]">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-[var(--color-amber)] text-white px-4 py-1.5 text-sm font-medium rounded-full mb-6 uppercase tracking-wide"
                    >
                        Free Intro Class
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] mb-6 text-[var(--color-charcoal)]"
                    >
                        Zero to <span className="text-[var(--color-amber)]">Shipped</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-[var(--color-text-muted)] mb-8 max-w-[600px]"
                    >
                        Build your first AI-powered project in 3 hours. No experience needed. Walk away with a live website you made yourself.
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        href="#signup"
                        className="inline-flex items-center gap-2 bg-[var(--color-amber)] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-[0_4px_14px_var(--color-amber-glow)] transition-all hover:bg-[var(--color-amber-light)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_var(--color-amber-glow)]"
                    >
                        Save Your Spot
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 flex flex-wrap gap-8 text-[0.95rem] text-[var(--color-text-muted)]"
                    >
                        <div className="flex items-center gap-2">
                            <Clock className="w-[18px] h-[18px] text-[var(--color-amber)]" />
                            ~3 hours
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-[18px] h-[18px] text-[var(--color-amber)]" />
                            Las Vegas / Online
                        </div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-[18px] h-[18px] text-[var(--color-amber)]" />
                            100% Free
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
