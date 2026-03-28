import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Frontend Developer",
        company: "Aveti Learning",
        period: "Jan 2025 - Present · 1 yr 3 mos",
        points: [
            "Developing responsive and interactive web interfaces for internal tools and educational platforms.",
            "Building reusable UI components using modern frontend frameworks.",
            "Creating dashboards and workflow systems to improve productivity.",
            "Collaborating with designers and backend developers to deliver scalable web applications."
        ],
        skills: "JavaScript, React.js and +3 skills"
    },
    {
        role: "Motion Graphics Designer",
        company: "Aveti Learning",
        period: "Mar 2020 - Jan 2025 · 4 yrs 11 mos",
        points: [
            "Designed and produced animated educational content and explainer videos.",
            "Created motion graphics and visual storytelling for digital learning materials.",
            "Worked closely with academic teams to convert complex concepts into engaging visual animations.",
            "Produced high-quality video edits and motion graphics for educational platforms."
        ],
        skills: "After Effects, Adobe Premiere Pro and +3 skills"
    },
    {
        role: "Graphic Designer",
        company: "Aveti Learning",
        period: "Apr 2019 - Mar 2020 · 1 yr",
        points: [
            "Designed digital posts and creative visuals for educational and promotional content.",
            "Performed photo manipulation and image editing to create visually engaging graphics.",
            "Created custom background graphics and vector elements for digital media.",
            "Developed illustrations and graphic assets for various design requirements."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-[#0B0E14] relative">
            <div className="container mx-auto px-6">
                <SectionHeading title="Experience" subtitle={true} />

                <div className="max-w-4xl mx-auto mt-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-800" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-10 mb-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-3 top-8 -translate-x-1/2 w-4 h-4 bg-[#00FFD1] rounded-full border-4 border-[#0B0E14] z-10 box-content shadow-[0_0_10px_#00FFD1]" />

                            <div className="bg-[#11161F] p-6 rounded-xl border border-gray-800 hover:border-[#6C63FF]/50 transition-colors duration-300 text-left">
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-[#00FFD1] text-sm mb-4">
                                    <Briefcase size={14} />
                                    <span>{exp.company}</span>
                                    <span className="mx-1">•</span>
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc pl-5">
                                    {exp.points.map((point, pointIndex) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                                {exp.skills && (
                                    <p className="text-gray-500 text-xs mt-4">
                                        {exp.skills}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
