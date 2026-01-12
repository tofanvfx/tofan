import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) * 0.05;
        const moveY = (clientY - window.innerHeight / 2) * 0.05;
        setMousePosition({ x: moveX, y: moveY });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            id="hero"
            className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-[#050505] selection:bg-[#00FFD1] selection:text-black"
        >
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: mousePosition.x * -1,
                        y: mousePosition.y * -1,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#6C63FF]/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00FFD1]/10 rounded-full blur-[100px]"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            {/* Main Content - Unique Asymmetric Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center mt-[-5vh]">

                {/* Text Layer - Behind Image */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute z-0 left-0 md:left-10 top-1/4 md:top-auto whitespace-nowrap opacity-20 md:opacity-100 select-none pointer-events-none"
                >
                    <h1 className="text-[15vw] md:text-[12vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2A2A2A] to-transparent leading-none">
                        TOFAN
                    </h1>
                </motion.div>

                <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full relative z-10">

                    {/* Left: Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-1 md:pr-12 text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00FFD1]/30 bg-[#00FFD1]/5 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse"></span>
                            <span className="text-[#00FFD1] text-xs font-mono uppercase tracking-widest">Digital Alchemist & AI Visual Artist</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD1] to-[#6C63FF]">Imagination</span> <br />
                            Into Visual Reality
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 border-l-2 border-[#6C63FF]/50 pl-6">
                            Specializing in high-end VFX, 3D motion design, and cinematic storytelling that pushes the boundaries of perception.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <Link to="work" smooth={true} duration={800}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-[#00FFD1] text-[#050505] font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors skew-x-[-10deg]"
                                >
                                    <span className="block skew-x-[10deg]">Explore Work</span>
                                </motion.button>
                            </Link>

                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-transparent border border-[#6C63FF] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#6C63FF]/20 transition-colors skew-x-[-10deg]"
                                >
                                    <span className="block skew-x-[10deg]">Resume</span>
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Profile Image with Creative Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex-1 flex justify-center md:justify-end relative"
                    >
                        <div className="relative w-72 h-80 md:w-96 md:h-[30rem]">
                            {/* Frame Elements */}
                            <div className="absolute top-[-20px] left-[-20px] w-20 h-20 border-t-2 border-l-2 border-[#00FFD1]" />
                            <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 border-b-2 border-r-2 border-[#6C63FF]" />

                            <div className="w-full h-full bg-[#111] relative overflow-hidden group">
                                <img
                                    src="/tofan_profile.jpg"
                                    alt="Tofan Profile"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -left-12 bottom-12 bg-[#1A1A1A]/90 backdrop-blur-md p-4 border-l-4 border-[#00FFD1] shadow-2xl hidden md:block"
                            >
                                <div className="text-white font-mono text-xs mb-1 text-[#00FFD1]">EXPERIENCE</div>
                                <div className="text-3xl font-bold text-white">7+ Years</div>
                                <div className="text-gray-500 text-xs mt-1">VFX & Motion</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#00FFD1] to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
