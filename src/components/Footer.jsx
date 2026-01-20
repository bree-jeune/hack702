import React from 'react';
import { Twitter, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-charcoal)] text-[var(--color-sand)] py-20 border-t border-white/5">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to build for your city?
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
                        Join 200+ local developers, designers, and organizers building the future of Las Vegas.
                    </p>
                    <a href="#join" className="inline-flex items-center gap-2 bg-[var(--color-amber)] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[var(--color-amber-light)] transition-all hover:scale-105 shadow-[0_0_40px_var(--color-amber-glow)]">
                        <MessageCircle className="w-6 h-6" />
                        Join the Discord
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10">
                    <div className="mb-6 md:mb-0">
                        <span className="font-display text-2xl font-bold text-white block mb-2">Hack702</span>
                        <span className="text-sm text-[var(--color-text-muted)]">© 2024 Open Source Community. MIT License.</span>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-amber)] hover:text-white transition-all text-[var(--color-text-muted)]">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-amber)] hover:text-white transition-all text-[var(--color-text-muted)]">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-amber)] hover:text-white transition-all text-[var(--color-text-muted)]">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-amber)] hover:text-white transition-all text-[var(--color-text-muted)]">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
