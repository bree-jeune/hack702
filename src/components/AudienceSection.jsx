import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const AudienceSection = () => {
    const items = [
        { text: "You've never written code", desc: "and you're not sure if you'd even like it. This is a low-risk way to find out." },
        { text: "You're curious about AI tools", desc: "but haven't figured out how to actually use them for something real." },
        { text: "You're thinking about a career change", desc: "and want to test whether tech makes sense before committing months to learning." },
        { text: "Traditional bootcamps haven't worked for you", desc: "too expensive, too rigid, or too much assumed knowledge." }
    ];

    return (
        <section className="py-16">
            <div className="container">
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-8 text-[var(--color-charcoal)]">
                    This Class Is For You If...
                </h2>

                <div className="grid gap-4 max-w-[700px]">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start gap-4 bg-white p-5 rounded-lg border border-[var(--color-sand-dark)]"
                        >
                            <Check className="w-6 h-6 text-[var(--color-amber)] mt-0.5 shrink-0" />
                            <p className="text-base">
                                <strong className="text-[var(--color-charcoal)]">{item.text}</strong> — {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
