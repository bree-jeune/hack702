import React from 'react';
import { motion } from 'framer-motion';

const LearnSection = () => {
    const modules = [
        { num: "01", title: "Join a Track", desc: "Choose a project that helps the community. No 'Hello World' tutorials—start with real-world problems.", time: "Asynch" },
        { num: "02", title: "Submit & iterate", desc: "Push your code. Get automated feedback instantly, then detailed human review from local senior devs.", time: "Continuous" },
        { num: "03", title: "Pair Up", desc: "Weekly meetup sessions to code alongside others. Get unblocked, share ideas, and find a mentor.", time: "Weekly" },
        { num: "04", title: "Refactor", desc: "Good code is rewritten code. Learn professional standards for readability, performance, and accessibility.", time: "Deep Dive" },
        { num: "05", title: "Contribute", desc: "Make your first open-source contribution to a city project. Get your name on the credits of a tool tens of thousands use.", time: "Forever" }
    ];

    return (
        <section id="curriculum" className="py-24 bg-[var(--color-sand)] relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[var(--color-sky-day)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10">
                <div className="max-w-[650px] mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 text-[var(--color-charcoal)]"
                    >
                        How We Learn
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[var(--color-text-muted)] leading-relaxed"
                    >
                        Modeled after Exercism.io and open source communities. You learn by doing, reviewing, and helping others.
                    </motion.p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-amber-glow)] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-8xl font-display font-bold text-[var(--color-amber)] leading-none">
                                    {module.num}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block text-sm font-bold text-[var(--color-amber)] mb-3 tracking-wide uppercase">
                                    Step {module.num}
                                </span>
                                <h3 className="font-display text-2xl font-bold mb-3 text-[var(--color-charcoal)] group-hover:text-[var(--color-amber)] transition-colors">
                                    {module.title}
                                </h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                                    {module.desc}
                                </p>
                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal-light)] bg-[var(--color-sand)] px-3 py-1.5 rounded-full border border-[var(--color-border)]">
                                    <svg className="w-4 h-4 text-[var(--color-amber)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    {module.time}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnSection;
