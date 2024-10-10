'use client'

import { primaryYellow } from "@/constants";
import { addAnnotation } from "@/helpers";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./common/sectionWrapper";
import { useMediaQuery } from "@/customHooks/useMediaHook";
import avtarImg from '../../public/assets/avatar.png';

interface HeroProps {
    scrollToCompanies: () => void
}

const HeroSection = ({ scrollToCompanies }: HeroProps) => {

    const spanRef = useRef<any>(null);
    const isMobile = useMediaQuery('(max-width: 550px)');

    useEffect(() => {
        // addAnnotation(spanRef.current, 'highlight', primaryYellow)
    }, [])


    return (
        <section tabIndex={1}>
            <div className="text-center line-height-large h-500">
                <Image src={avtarImg} alt='avatar-img' width={200} height={200} className="br-50per avatarImg" />
                <div className={isMobile ? `heading1Mob` : `heading1`}>
                    <h1>Hey, It's Rigved.</h1>
                    <h1>Software Developer</h1>
                </div>
                <p className={isMobile ? 'font-size-12' : ''}>I've been working as a <span ref={spanRef}>Frontend Developer</span> for 2.5+ years.<br /><span className={`${isMobile ? 'd-none' : ''}`}>I am based on India.</span></p>
                <button className="squareBtn margin-block-30 bg-yellow color-black font-weight-700" onClick={scrollToCompanies}>Explore</button>
            </div>

        </section>
    )
}

export default HeroSection;