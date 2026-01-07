import React from 'react';
import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0B0E14] border-t border-gray-900 py-12">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex space-x-6 mb-8">
                    <a href="#" className="text-gray-400 hover:text-[#00FFD1] transition-colors"><Youtube size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-[#00FFD1] transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-[#00FFD1] transition-colors"><Linkedin size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-[#00FFD1] transition-colors"><Mail size={24} /></a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Tofan. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs mt-2">Motion Graphics Designer & Video Editor</p>
            </div>
        </footer>
    );
};

export default Footer;
