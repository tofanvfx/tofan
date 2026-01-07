import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-[#0B0E14] relative">
            <div className="container mx-auto px-6">
                <SectionHeading title="About Me" subtitle={true} />

                <div className="flex flex-col items-center mt-16 max-w-4xl mx-auto text-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Motion Graphics Designer & Video Editor
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                            I’m a Motion Graphics Designer and Video Editor with strong experience in creating educational, cinematic, and promotional visuals. I love turning ideas into engaging motion stories using design, animation, and sound.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            With a keen eye for detail and a passion for storytelling, I seamlessly blend creativity with technical expertise to deliver high-quality visual content that captivates audiences.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
