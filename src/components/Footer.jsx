import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <>
            {/* Final CTA in Footer area context or separate? Plan had CTA section. */}
            <section className="py-20 text-center" id="signup">
                <div className="container">
                    <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4 text-[var(--color-charcoal)]">
                        Ready to Build Something?
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-[500px] mx-auto">
                        Three hours. One project. Zero experience required. Sign up and we'll send you everything you need.
                    </p>

                    <a href="https://forms.gle/YOUR-FORM-ID" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--color-amber)] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-[0_4px_14px_var(--color-amber-glow)] transition-all hover:bg-[var(--color-amber-light)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_var(--color-amber-glow)]">
                        Save Your Spot
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <footer className="bg-[var(--color-charcoal)] text-[var(--color-sand)] py-12 text-center">
                <div className="container">
                    <div className="font-display text-xl font-bold mb-2">
                        Hack<span className="text-[var(--color-amber)]">702</span>
                    </div>
                    <p className="text-[rgba(245,240,232,0.6)] text-sm mb-4">
                        Free tech training for Las Vegas.
                    </p>
                    <p className="text-sm">
                        Questions? <a href="mailto:hello@hack702.org" className="text-[var(--color-amber)] hover:underline">hello@hack702.org</a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
