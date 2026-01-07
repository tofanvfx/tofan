import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyle = "px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 transform";
    const variants = {
        primary: "bg-[#00FFD1] text-[#0B0E14] hover:bg-[#00e6bc] hover:shadow-[0_0_20px_rgba(0,255,209,0.4)]",
        outline: "border border-[#00FFD1] text-[#00FFD1] hover:bg-[#00FFD1]/10 hover:shadow-[0_0_20px_rgba(0,255,209,0.2)]",
        secondary: "bg-[#6C63FF] text-white hover:bg-[#5a52d5] hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;
