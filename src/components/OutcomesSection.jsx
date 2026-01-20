import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Github } from 'lucide-react';

const OutcomesSection = () => {
    const outcomes = [
        {
            icon: Github,
            title: "Contribution History",
            desc: "Don't just show a certificate. Show a green contribution graph on GitHub. That's what real engineering teams look for."
        },
        {
            icon: Users,
            title: "A Network",
            desc: "Connect with local designers, data scientists, and policy makers who care about the future of Las Vegas."
        },
        {
            icon: Globe,
            title: "Civic Impact",
            desc: "Your code will directly empower community members, providing resources, enhancing safety, and enriching cultural connections."
        }
    ];

    return (
        <section className="py-24 bg-[var(--color-charcoal)] text-[var(--color-sand)] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-amber)] opacity-5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 text-[var(--color-sand)]"
                    >
                        Beyond the Code: Real-World Impact
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {outcomes.map((outcome, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors text-center"
                        >
                            <div className="w-20 h-20 bg-[var(--color-charcoal-light)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/5 group">
                                <outcome.icon className="w-8 h-8 text-[var(--color-amber)]" />
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-4 text-[var(--color-sand)]">
                                {outcome.title}
                            </h3>
                            <p className="text-[var(--color-sand-dark)]/80 leading-relaxed text-lg">
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
