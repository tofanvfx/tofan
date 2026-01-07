import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import Showreel from './components/sections/Showreel';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
    return (
        <div className="bg-[#0B0E14] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#00FFD1] selection:text-[#0B0E14]">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Work />
                <Showreel />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
