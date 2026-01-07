import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-scroll';

const Hero = () => {
    const [text, setText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    const roles = ["Motion Graphics Designer", "Video Editor", "3D Modeler"];

    React.useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    return (
        <section id="hero" className="flex items-center justify-center min-h-screen relative overflow-hidden pt-16">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6C63FF]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00FFD1]/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#00FFD1] font-bold tracking-widest text-xl md:text-3xl mb-4 uppercase h-10 flex items-center gap-2"
                    >
                        <span className="text-white/60 text-lg md:text-xl font-normal normal-case mr-2">I'm</span>
                        {text}<span className="animate-pulse text-[#6C63FF]">|</span>
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-nowrap"
                    >
                        Motion That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD1] to-[#6C63FF]">Tells Stories</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-gray-400 text-xl md:text-2xl mb-10"
                    >
                        Turning complex ideas into stunning visual narratives through animation and sound.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link to="showreel" smooth={true} duration={500}>
                            <Button variant="primary">View Showreel</Button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <Button variant="outline">Contact Me</Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Image / Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full relative order-1 md:order-2"
                >
                    <div className="relative aspect-square w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/20 to-[#00FFD1]/10 opacity-60" />

                        {/* Placeholder Content */}
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8 text-center">
                            <div className="w-20 h-20 mb-4 rounded-full bg-[#11161F] flex items-center justify-center border border-gray-700">
                                <span className="text-2xl">👤</span>
                            </div>
                            <p className="text-sm font-light tracking-wide uppercase">Profile Photo Here</p>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00FFD1] rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#6C63FF] rounded-br-2xl" />
                    </div>

                    {/* Floating Elements around image */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 w-24 h-24 bg-[#00FFD1]/10 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#6C63FF]/10 rounded-full blur-xl z-[-1]"
                    />
                </motion.div>
            </div>

            {/* Video Editing UI Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {/* REC Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2"
                >
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-500 font-mono text-sm tracking-widest">REC</span>
                    <span className="text-gray-500 font-mono text-sm ml-2">00:00:24:12</span>
                </motion.div>

                {/* Floating Keyframes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-[20%] right-[15%]"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 border-2 border-[#00FFD1] bg-transparent rotate-45 transform"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-[30%] left-[10%]"
                >
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [45, 0, 45] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="w-8 h-8 bg-[#6C63FF] rotate-45 transform"
                    />
                </motion.div>

                {/* Timeline Grid */}
                <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 bg-[linear-gradient(transparent_0%,_#00FFD1_1px,_transparent_1px)] bg-[length:100%_20px]" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00FFD1]/30" />
                <motion.div
                    className="absolute bottom-0 left-0 h-32 w-[2px] bg-[#00FFD1]/50"
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Abstract Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#00FFD1] to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
};

export default Hero;
