import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        { q: "Experience level required?", a: "Zero to Senior. We maintain a beginner track for new learners and an advanced track for contributors who want to mentor or build core infrastructure." },
        { q: "Is this really free?", a: "Yes. Forever. We are an open-source community funded by corporate sponsors who care about the local tech ecosystem. No income share agreements, no hidden fees." },
        { q: "Who owns my code?", a: "The community. All projects are open-source (MIT License). You can put it on your portfolio, fork it, or build a startup on top of it." },
        { q: "Can I join remotely?", a: "Most collaboration happens on our Discord and GitHub. We host monthly in-person meetups in Downtown Las Vegas for code sprints." },
        { q: "I'm a designer/PM, can I join?", a: "Absolutely. Civic tech needs research, design, and product management just as much as it needs code." }
    ];

    return (
        <section id="faq" className="py-24 bg-[var(--color-sand)]">
            <div className="container">
                <div className="text-center max-w-[700px] mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-[clamp(2rem,4vw,3rem)] font-bold mb-6 text-[var(--color-charcoal)]"
                    >
                        Community FAQ
                    </motion.h2>
                </div>

                <div className="grid gap-6 max-w-[800px] mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm"
                        >
                            <h3 className="text-xl font-bold mb-4 text-[var(--color-charcoal)] flex items-start justify-between gap-4">
                                {faq.q}
                                <Plus className="w-5 h-5 text-[var(--color-amber)] shrink-0" />
                            </h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
