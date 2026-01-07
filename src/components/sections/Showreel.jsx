import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Play } from 'lucide-react';

const Showreel = () => {
    return (
        <section id="showreel" className="py-20 bg-[#0B0E14] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#00FFD1]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="Showreel 2026" subtitle={true} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] group cursor-pointer"
                >
                    {/* Placeholder for Showreel Video */}
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-500">
                        <div className="text-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-24 h-24 rounded-full bg-[#00FFD1] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,209,0.3)]"
                            >
                                <Play fill="#0B0E14" size={40} className="ml-2 text-[#0B0E14]" />
                            </motion.div>
                            <p className="text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest text-sm">Watch Showreel</p>
                        </div>
                    </div>

                    {/* Border Glow Animation */}
                    <div className="absolute inset-0 border-2 border-[#00FFD1]/30 rounded-2xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default Showreel;
