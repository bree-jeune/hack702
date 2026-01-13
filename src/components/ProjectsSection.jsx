import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
    const projects = [
        {
            tag: "Option A",
            title: "Personal Landing Page",
            desc: "A clean, simple page about you — your background, interests, and how to reach you. Perfect for job hunting or just having your own corner of the internet."
        },
        {
            tag: "Option B",
            title: "Neighborhood Resource Guide",
            desc: "A one-page site listing helpful resources in your community — food banks, job centers, free services. Something useful you might actually share."
        },
        {
            tag: "Option C",
            title: "Simple Calculator Tool",
            desc: "A working interactive tool — budget splitter, tip calculator, or unit converter. Real code. Real functionality. Your design."
        }
    ];

    return (
        <section className="py-16 bg-[var(--color-charcoal)] text-[var(--color-sand)]">
            <div className="container">
                <div className="max-w-[650px] mb-10">
                    <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4 text-[var(--color-sand)]">
                        Pick a Project. Ship It Today.
                    </h2>
                    <p className="text-lg text-[var(--color-sand-dark)]">
                        Choose one of three beginner-friendly projects. By the end of class, it'll be live on the internet with your name on it.
                    </p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[var(--color-charcoal-light)] rounded-xl p-8 border border-white/10 transition-transform hover:-translate-y-1 hover:border-[var(--color-amber)]"
                        >
                            <span className="inline-block bg-[var(--color-amber)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                                {project.tag}
                            </span>
                            <h3 className="font-display text-xl mb-3 text-[var(--color-sand)]">
                                {project.title}
                            </h3>
                            <p className="text-[rgba(245,240,232,0.7)] text-[0.95rem] leading-relaxed">
                                {project.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
