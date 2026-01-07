import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Senior Motion Graphics Designer",
        company: "Creative Studio X",
        period: "2024 - Present",
        description: "Leading a team of designers to create high-end motion graphics for global brands."
    },
    {
        role: "Freelance Video Editor",
        company: "Self-Employed",
        period: "2021 - 2024",
        description: "Produced over 50+ video projects including commercials, music videos, and social media content."
    },
    {
        role: "Junior Animator",
        company: "Tech Media Corp",
        period: "2019 - 2021",
        description: "Assisted in creating 2D animations and explainer videos for tech products."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-[#0B0E14] relative">
            <div className="container mx-auto px-6">
                <SectionHeading title="Experience" subtitle={true} />

                <div className="max-w-3xl mx-auto mt-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#00FFD1] rounded-full border-4 border-[#0B0E14] z-10 box-content shadow-[0_0_10px_#00FFD1]" />

                            <div className="md:w-1/2" />

                            <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                <div className="bg-[#11161F] p-6 rounded-xl border border-gray-800 hover:border-[#6C63FF]/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className={`flex items-center gap-2 text-[#00FFD1] text-sm mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <Briefcase size={14} />
                                        <span>{exp.company}</span>
                                        <span className="mx-1">•</span>
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
