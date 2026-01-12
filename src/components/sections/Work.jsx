import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const categories = [
    "All",
    "Motion Graphics",
    "VFX",
    "AI Visual Stories",
    "Product Visualization"
];

const projects = [

    {
        id: 7,
        title: "3D Motion Tracking in Cinema 4D",
        category: "VFX",
        image: "https://img.youtube.com/vi/PiDpeqjfX8s/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/PiDpeqjfX8s",
        description: "3D Motion tracking demonstration using Cinema 4D."
    },
    {
        id: 8,
        title: "Car Accident Visual Effects",
        category: "VFX",
        image: "https://img.youtube.com/vi/cFVRLcTGr1U/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/cFVRLcTGr1U",
        description: "Visual effects breakdown of a realistic road accident scene created using After Effects."
    },
    {
        id: 9,
        title: "Decapitated Head Fall VFX",
        category: "VFX",
        image: "https://img.youtube.com/vi/LhyT7MabkI0/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/LhyT7MabkI0",
        description: "After Effects VFX breakdown featuring a complex compositing of a decapitated head effect."
    },
    {
        id: 10,
        title: "Ganesh Chaturthi Animation 2019",
        category: "Motion Graphics",
        image: "https://img.youtube.com/vi/s7BPZyR06FU/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/s7BPZyR06FU",
        description: "Motion graphics animation celebrating Ganesh Chaturthi."
    },
    {
        id: 11,
        title: "Ganesh Chaturthi Animation 2020",
        category: "Motion Graphics",
        image: "https://img.youtube.com/vi/NYBZ1eJL3-4/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/NYBZ1eJL3-4",
        description: "Updated motion graphics tribute for Ganesh Chaturthi 2020."
    },
    {
        id: 12,
        title: "Happy Diwali Animation 2019",
        category: "Motion Graphics",
        image: "https://img.youtube.com/vi/CkXrwDY-hcA/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/CkXrwDY-hcA",
        description: "Festive motion graphics animation for Diwali celebrations."
    },
    {
        id: 13,
        title: "Dussehra Ravan Vadh Animation",
        category: "Motion Graphics",
        image: "https://img.youtube.com/vi/8AjNju9rNic/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/8AjNju9rNic",
        description: "Animation depicting the Ravan Vadh for Dussehra."
    },
    {
        id: 14,
        title: "Many Faces, One Soul - AI Film",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/9vDOD751P7I/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/9vDOD751P7I",
        description: "An AI-generated cinematic music video blending poetry, storytelling, and song."
    },
    {
        id: 15,
        title: "Epic Mountain Horse Ride - AI Short",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/TWspvmigqeg/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/TWspvmigqeg",
        description: "Breathtaking AI-generated short video created with Google Veo, Gemini & ChatGPT."
    },
    {
        id: 16,
        title: "New Odia Romantic Song",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/rhqp2HpZvJg/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/rhqp2HpZvJg",
        description: "Heart-touching Odia romantic song created with stunning AI visuals."
    },
    {
        id: 17,
        title: "Tume Mo Akasha Ra Jahna",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/-1TN6mvPSVM/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/-1TN6mvPSVM",
        description: "Official music video for a romantic Odia song, featuring AI-generated storytelling."
    },
    {
        id: 18,
        title: "Pehli Bar Usne Dekha - AI Music Video",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/QmibxBwZm1o/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/QmibxBwZm1o",
        description: "Official AI music video for a romantic Hindi song about first love."
    },
    {
        id: 19,
        title: "Happy New Year 2020 Animation",
        category: "Motion Graphics",
        image: "https://img.youtube.com/vi/lHfyN2bI7Fk/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/lHfyN2bI7Fk",
        description: "Celebratory motion graphics animation for New Year 2020."
    },
    {
        id: 20,
        title: "The Last Acorn - Animated Short",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/1e7WnclWFzg/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/1e7WnclWFzg",
        description: "A heartwarming animated short film about a little squirrel, inspired by magical Indian folktales."
    },
    {
        id: 21,
        title: "The Owl Who Ate Too Much - Cartoon",
        category: "AI Visual Stories",
        image: "https://img.youtube.com/vi/YhqMfAtPSVQ/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/YhqMfAtPSVQ",
        description: "A funny cartoon story about a hungry owl at a bird restaurant run by a parrot and a crow."
    },
    {
        id: 22,
        title: "3D Product Visualization",
        category: "Product Visualization",
        image: "https://img.youtube.com/vi/dsAvytjH4oQ/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/dsAvytjH4oQ",
        description: "A high-quality 3D product visualization showcasing detailed texturing and lighting."
    }
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="work" className="py-20 md:py-32 bg-[#0B0E14]">
            <div className="container mx-auto px-6">
                <SectionHeading title="Selected Work" subtitle={true} />

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                ? "bg-[#00FFD1] text-[#0B0E14] border-[#00FFD1]"
                                : "bg-transparent text-gray-400 border-gray-700 hover:border-[#00FFD1] hover:text-[#00FFD1]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
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
                    </AnimatePresence>
                </motion.div>

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
