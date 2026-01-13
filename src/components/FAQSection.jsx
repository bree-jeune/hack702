import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
    const faqs = [
        { q: "Do I need to know how to code?", a: "Nope. That's the whole point. You'll write code in this class, but we'll build it together with AI assistance. If you can type and follow instructions, you're qualified." },
        { q: "What do I need to bring?", a: "A laptop or phone with internet access. That's it. All the tools we use are free and work in a browser." },
        { q: "Is this really free?", a: "Yes. Hack702 is funded by employers and sponsors, not learners. If you're a Las Vegas resident curious about tech, this costs you nothing but time." },
        { q: "What happens after the class?", a: "If you want to keep going, Hack702 offers a full 6-month program that takes you from this intro all the way to job-ready. But no pressure — this class is complete on its own." },
        { q: "What if I can't make the live session?", a: "All materials will be available to work through on your own time. The live session is optional — it just adds community and real-time help." }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container">
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-8 text-[var(--color-charcoal)]">
                    Common Questions
                </h2>

                <div className="grid gap-6 max-w-[800px]">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="pb-6 border-b border-[var(--color-sand-dark)] last:border-0 last:pb-0"
                        >
                            <h3 className="text-lg font-semibold mb-2 text-[var(--color-charcoal)]">
                                {faq.q}
                            </h3>
                            <p className="text-[var(--color-text-muted)]">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
