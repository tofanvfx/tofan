import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-[#0d1017]">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading title="Get In Touch" subtitle={true} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-[#11161F] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <Button variant="primary" className="w-full md:w-auto flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
