import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const AudienceSection = () => {
    const items = [
        { text: "Curious Citizen", desc: "You want to understand how tech shapes our city and want to have a say in it." },
        { text: "Problem Solver", desc: "You see inefficiencies in public services and want to build tools to fix them." },
        { text: "Aspiring Developer", desc: "You want real code reviews and mentorship, not just another video tutorial." },
        { text: "Community Organizer", desc: "You need technical tools to help your cause reach more people." }
    ];

    return (
        <section className="py-24 bg-[var(--color-sand-dark)]/30">
            <div className="container">
                <div className="text-center max-w-[700px] mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-[clamp(2rem,4vw,3rem)] font-bold mb-6 text-[var(--color-charcoal)]"
                    >
                        Who is this for?
                    </motion.h2>
                    <p className="text-xl text-[var(--color-text-muted)]">
                        We are a diverse community of makers, not just a coding class.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-5 bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-amber-glow)] flex items-center justify-center">
                                <Check className="w-5 h-5 text-[var(--color-amber)]" strokeWidth={3} />
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)] mb-2">
                                    {item.text}
                                </h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed text-[0.95rem]">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
