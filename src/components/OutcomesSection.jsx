import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Terminal, CheckCircle } from 'lucide-react';

const OutcomesSection = () => {
    const outcomes = [
        {
            icon: Globe,
            title: "A Live Project",
            desc: "A real URL you can share. Text it to someone tonight. Put it on your resume tomorrow."
        },
        {
            icon: Terminal,
            title: "A New Skill",
            desc: "You'll know how to direct AI to build things. That skill transfers everywhere."
        },
        {
            icon: CheckCircle,
            title: "A Clear Answer",
            desc: "\"I want to learn more\" or \"This isn't for me\" — both are valid. You'll know which one is true for you."
        }
    ];

    return (
        <section className="py-16">
            <div className="container">
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-10 text-[var(--color-charcoal)]">
                    What You'll Walk Away With
                </h2>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-8">
                    {outcomes.map((outcome, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="text-center p-8"
                        >
                            <div className="w-16 h-16 bg-[var(--color-amber-glow)] rounded-full flex items-center justify-center mx-auto mb-5">
                                <outcome.icon className="w-7 h-7 text-[var(--color-amber)]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-[var(--color-charcoal)]">
                                {outcome.title}
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-[0.95rem]">
                                {outcome.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomesSection;
