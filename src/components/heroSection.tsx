'use client'

import { primaryYellow } from "@/constants";
import { addAnnotation } from "@/helpers";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./common/sectionWrapper";
import { useMediaQuery } from "@/customHooks/useMediaHook";
import avtarImg from '../../public/assets/avatar.png';


const HeroSection = () => {

    const spanRef = useRef<any>(null);
    const isMobile = useMediaQuery('(max-width: 550px)');

    console.log('line17', isMobile);

    useEffect(() => {
        // addAnnotation(spanRef.current, 'highlight', primaryYellow)
    }, [])


    return (
        <section>
            <div className="text-center line-height-large h-500">
                <Image src={avtarImg} alt='avatar-img' width={200} height={200} className="br-50per avatarImg" />
                <div className={isMobile ? `heading1Mob` : `heading1`}>
                    <h1>Hey, It's Rigved.</h1>
                    <h1>MERN Stack Developer</h1>
                </div>
                <p className={isMobile ? 'font-size-14' : ''}>I've been working as a <span ref={spanRef}>Frontend Developer</span> for 2+ years.<br />I am based on India</p>
                <button className="squareBtn margin-block-30 bg-yellow color-black font-weight-700">Explore</button>
            </div>

        </section>
    )
}

export default HeroSection;