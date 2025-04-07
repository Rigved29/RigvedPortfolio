'use client'

import { primaryYellow } from "@/constants";
import { addAnnotation } from "@/helpers";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./common/sectionWrapper";
import { useMediaQuery } from "@/customHooks/useMediaHook";
import avtarImg from '../../public/assets/avatar.png';
import profilePic from '../../public/assets/profile-pic.png'
import dpImage from '../../public/assets/dp-img-3.png'

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
            <div className="text-center line-height-large h-500 color-white">
                <Image src={dpImage} alt='avatar-img' width={200} height={200} className="br-50per avatarImg" />
                <div className={isMobile ? `heading1Mob` : `heading1`}>
                    <h1>Hey, It's Rigved.</h1>
                    <h1>Frontend Developer</h1>
                </div>
                <p className={isMobile ? 'font-size-12' : ''}>I've been working as a <span ref={spanRef}>Frontend Developer</span> for <span className="font-weight-700 color-lightYellow">3 years.</span><br /></p>
                {/* <span className={`${isMobile ? 'd-none' : ''}`}>I am based on India.</span> */}
                {/* <p className={isMobile ? 'font-size-12' : ''}>I bring over <span className="font-weight-700 color-lightYellow">3 years</span> of experience as a  <span ref={spanRef} className="font-weight-700 color-lightYellow">Frontend Developer</span>, building intuitive <br/> and high-performance web applications.
                </p> */}
                <button className="squareBtn margin-block-30 bg-yellow color-black font-weight-700" onClick={scrollToCompanies}>Explore</button>
            </div>

        </section>
    )
}

export default HeroSection;