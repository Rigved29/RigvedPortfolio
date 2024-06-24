'use client'
import React, { useEffect } from "react";
import Experience from "../components/experience/index";
import HeroSection from "./heroSection"
import Navbar from "./navbar";
import SkillsSection from "./skills/skills";
import Testimonial from "./testimonials";
import Works from "./works";
import Contact from "./contact";

const HomeComp = () => {

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
        <main className="p-block-6rem">
            <HeroSection />
            <SkillsSection />
            <Experience />
            <Works />
            <Testimonial />
            <Contact />
        </main>
    )

}

export default HomeComp;