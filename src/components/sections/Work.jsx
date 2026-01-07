import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const projects = [
    {
        id: 1,
        title: "Neon Cyberpunk City",
        category: "3D Animation",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
        description: "A futuristic city concept created in Blender and composited in After Effects."
    },
    {
        id: 2,
        title: "Product Promo: Kinetic",
        category: "Motion Graphics",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "High-energy kinetic typography promo for a tech startup."
    },
    {
        id: 3,
        title: "Abstract Flow",
        category: "Experimental",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "An exploration of fluid simulation and abstract shapes."
    },
    {
        id: 4,
        title: "Educational Explainer",
        category: "2D Animation",
        image: "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1470&auto=format&fit=crop",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Simplifying complex crypto concepts through friendly 2D character animation."
    }
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="py-20 md:py-32 bg-[#0B0E14]">
            <div className="container mx-auto px-6">
                <SectionHeading title="Selected Work" subtitle={true} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Thumbnail */}
                            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-16 rounded-full bg-[#00FFD1] flex items-center justify-center mb-4 text-[#0B0E14]"
                                    >
                                        <Play fill="#0B0E14" size={24} />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-[#00FFD1] text-sm uppercase tracking-wide">{project.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-[#11161F] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative aspect-video bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={selectedProject.video}
                                        title={selectedProject.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:text-[#00FFD1] hover:bg-black transition-all"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                                            <p className="text-[#00FFD1]">{selectedProject.category}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400">{selectedProject.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Work;
