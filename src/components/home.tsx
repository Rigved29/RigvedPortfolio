'use client'
import React, { useEffect, useState } from "react";
import Experience from "../components/experience/index";
import HeroSection from "./heroSection"
import Navbar from "./navbar";
import SkillsSection from "./skills/skills";
import Testimonial from "./testimonials";
import Works from "./works";
import Contact from "./contact";

const HomeComp = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const handleSidebarClose = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false)
        }
    }

    useEffect(() => {

        const sections = document.querySelectorAll('.secWrapper');


        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); // Stop observing once the animation has been triggered
                }
            });

        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

    }, [])


    return (
        <main className="p-bottom-6rem w-100per">
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} handleSidebarClose={handleSidebarClose} />
            <section onClick={() => handleSidebarClose()}>
                <HeroSection />
                <SkillsSection />
                <Experience />
                <Works />
                <Testimonial />
                <Contact />
            </section>
        </main>
    )

}

export default HomeComp;