import React from 'react';
import { motion } from 'framer-motion';
import { Map, ThermometerSun, Radio, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
    const projects = [
        {
            icon: <Map className="w-6 h-6" />,
            tag: "Data & Access",
            title: "Community Resource Map",
            desc: "Aggregate open data to help residents find cooling stations, food banks, and library services nearby.",
            color: "from-emerald-500 to-teal-400"
        },
        {
            icon: <ThermometerSun className="w-6 h-6" />,
            tag: "Public Safety",
            title: "Vegas Heat Monitor",
            desc: "A real-time dashboard tracking temperature extremes and air quality across Clark County neighborhoods.",
            color: "from-amber-500 to-red-400"
        },
        {
            icon: <Radio className="w-6 h-6" />,
            tag: "Culture",
            title: "Local Artist Showcase",
            desc: "A digital gallery highlighting the work of local musicians, muralists, and creators in the 702.",
            color: "from-purple-500 to-pink-400"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[var(--color-charcoal)] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            <div className="container relative z-10">
                <div className="max-w-[700px] mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--color-amber)] font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Civic Tech Projects
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 text-[var(--color-sand)]"
                    >
                        Build for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-sand)] to-[var(--color-text-muted)]">
                            The 702.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[var(--color-sand-dark)]/80 leading-relaxed"
                    >
                        We don't build throwaway apps here. Work on open-source tools that solve real problems for your neighbors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-charcoal-light)] to-[var(--color-charcoal)] rounded-2xl opacity-50 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md" />
                            <div className="relative h-full bg-[var(--color-charcoal-light)] rounded-2xl p-8 border border-white/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                                {/* Gradient Blob */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-bl-full blur-2xl transition-opacity group-hover:opacity-20`} />

                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[var(--color-sand)] group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">
                                        {project.tag}
                                    </span>
                                    <h3 className="font-display text-2xl font-bold text-[var(--color-sand)] group-hover:text-[var(--color-amber)] transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-[var(--color-sand-dark)]/70 mb-8 text-sm leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="mt-auto flex items-center text-sm font-bold text-[var(--color-sand)] group-hover:gap-2 transition-all">
                                    Explore Codebase
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
