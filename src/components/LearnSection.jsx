import React from 'react';
import { motion } from 'framer-motion';

const LearnSection = () => {
    const modules = [
        { num: "01", title: "What AI Actually Is", desc: "Cut through the hype. Learn what large language models can and can't do — and why that matters for your work.", time: "~15 min" },
        { num: "02", title: "Prompting That Works", desc: "One simple framework to get useful outputs instead of generic garbage. Practice it until it's second nature.", time: "~20 min" },
        { num: "03", title: "Build Your Project", desc: "Pick your project and build it with AI assistance. You'll write real code — but you won't do it alone.", time: "~60-90 min" },
        { num: "04", title: "Make It Yours", desc: "Customize colors, text, and layout. Learn to ask \"how do I change X?\" and actually implement the answer.", time: "~20 min" },
        { num: "05", title: "Ship It Live", desc: "Deploy your project to the real internet. Get a link you can share. See your work out in the world.", time: "~15 min" }
    ];

    return (
        <section className="py-16">
            <div className="container">
                <div className="max-w-[650px] mb-10">
                    <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4 text-[var(--color-charcoal)]">
                        What We'll Cover
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        Five modules designed to get you building fast. No lectures. No fluff. Just enough to be dangerous.
                    </p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-7 shadow-sm border border-[var(--color-sand-dark)]"
                        >
                            <div className="font-display text-3xl font-bold text-[var(--color-amber)] leading-none mb-3">
                                {module.num}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-[var(--color-charcoal)]">
                                {module.title}
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-[0.95rem] mb-3">
                                {module.desc}
                            </p>
                            <div className="text-sm text-[var(--color-amber)] font-medium">
                                {module.time}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnSection;
