import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MapPin, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,var(--color-amber-glow)_0%,transparent_70%)] opacity-60 blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,125,46,0.08)_0%,transparent_70%)] blur-3xl" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-sand-dark)] border border-[var(--color-border)] mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-amber)]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-charcoal-light)]">
                            Civic Tech Initiative
                        </span>
                    </motion.div>

                    <h1 className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-[1] mb-8 text-[var(--color-charcoal)] tracking-tight">
                        Code for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-light)] relative">
                            Las Vegas.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-amber)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-10 max-w-[540px] leading-relaxed">
                        A free, open-source community building technology for our city.
                        No barriers. No tuition. Just citizens solving problems together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#signup"
                            className="inline-flex items-center gap-3 bg-[var(--color-charcoal)] text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-black/5 hover:bg-[var(--color-charcoal-light)] transition-all group"
                        >
                            <Users className="w-5 h-5 text-[var(--color-amber)] group-hover:text-white transition-colors" />
                            Join the Community
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <div className="flex items-center gap-6 px-6 py-4 rounded-xl border border-[var(--color-border)] bg-white/50 backdrop-blur-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-[var(--color-sand-dark)] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[var(--color-text-muted)]">
                                        {i === 3 ? '+' : ''}
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-[var(--color-charcoal)]">
                                <span className="font-bold">Active</span> Contributors
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[var(--color-border)] grid grid-cols-3 gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[var(--color-amber)] font-bold">
                                <Code2 className="w-5 h-5" />
                                <span>Open Source</span>
                            </div>
                            <span className="text-sm text-[var(--color-text-muted)]">MIT Licensed Projects</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[var(--color-amber)] font-bold">
                                <MapPin className="w-5 h-5" />
                                <span>Local First</span>
                            </div>
                            <span className="text-sm text-[var(--color-text-muted)]">Clark County Focused</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[var(--color-amber)] font-bold">
                                <Users className="w-5 h-5" />
                                <span>Mentorship</span>
                            </div>
                            <span className="text-sm text-[var(--color-text-muted)]">Peer-to-Peer Learning</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Element - Right Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-[var(--color-amber-glow)] border border-[var(--color-border)] p-2">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-charcoal)] relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] to-[#2a2a2a]" />

                            {/* Map / Data Visualization Mockup */}
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/10 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-[var(--color-amber)] text-4xl mb-2 font-display font-bold">702</div>
                                    <div className="text-white/50 text-sm tracking-widest uppercase">Public Data API</div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/10"
                            >
                                Heat Safety Index: <span className="text-[var(--color-amber)] font-bold">Live</span>
                            </motion.div>
                        </div>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-amber)] opacity-10 blur-[60px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
