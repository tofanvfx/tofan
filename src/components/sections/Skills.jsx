import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

import {
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiBlender,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiHoudini,
    SiFigma,
    SiAdobe,
    SiAutodesk
} from "react-icons/si";
import { Tv, Box, Clapperboard } from "lucide-react"; // Fallbacks suited for the theme

const skills = [
    { name: "After Effects", level: "Expert", icon: SiAdobeaftereffects, color: "#9999FF" },
    { name: "Premiere Pro", level: "Expert", icon: SiAdobepremierepro, color: "#9999FF" },
    { name: "Blender", level: "Intermediate", icon: SiBlender, color: "#EA7600" },
    { name: "Photoshop", level: "Expert", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Illustrator", level: "Advanced", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Nuke", level: "Basic", icon: Tv, color: "#F7C300" }, // Using generic icon as fallback
    { name: "Houdini", level: "Basic", icon: SiHoudini, color: "#FF4713" },
    { name: "Cinema 4D", level: "Basic", icon: Clapperboard, color: "#005599" },
    { name: "Figma", level: "Advanced", icon: SiFigma, color: "#F24E1E" },
    { name: "Adobe Animate", level: "Intermediate", icon: SiAdobe, color: "#CC2929" },
    { name: "Mocha", level: "Intermediate", icon: Box, color: "#7B5542" }, // Using generic icon
    { name: "Maya", level: "Basic", icon: SiAutodesk, color: "#37A5CC" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 bg-[#0d1017]">
            <div className="container mx-auto px-6">
                <SectionHeading title="Software Skills" subtitle={true} />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, borderColor: "#00FFD1", boxShadow: "0 0 15px rgba(0, 255, 209, 0.15)" }}
                            className="bg-[#11161F] p-6 rounded-xl border border-gray-800 transition-all duration-300 group cursor-default"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <skill.icon className="text-2xl" style={{ color: skill.color }} />
                                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white capitalize">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : skill.level === 'Intermediate' ? '70%' : '40%' }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    className="h-full bg-gradient-to-r from-[#00FFD1] to-[#6C63FF]"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-right">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
