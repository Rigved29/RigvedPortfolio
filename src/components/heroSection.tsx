'use client'

import { primaryYellow } from "@/constants";
import { addAnnotation } from "@/helpers";
import { useEffect, useRef } from "react";


const HeroSection = () => {

    const spanRef = useRef<any>(null);

    useEffect(() => {
        // addAnnotation(spanRef.current, 'highlight', primaryYellow)
    }, [])


    return (
        <section>
            <div className="text-center line-height-large h-300">
                <div className="heading1">
                    <h1>Hey, It's Rigved.</h1>
                    <h1>MERN Stack Developer</h1>
                </div>
                <p>I've been working as a <span ref={spanRef}>Frontend Developer</span> for 2+ years.<br />I am based on India</p>
                <button className="squareBtn margin-block-30 bg-yellow color-black font-weight-700">Explore</button>
            </div>

        </section>
    )
}

export default HeroSection;