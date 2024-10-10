'use client';
import { companies } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from "react";
import SectionWrapper from "../common/sectionWrapper";
import { useMediaQuery } from "@/customHooks/useMediaHook";




const CompanyLogo = ({ company, i, handleHover, isMobile }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    const companyName = company.name;

    switch (companyName) {
        case 'Febi.ai':
            return (
                // <div className="d-flex jc-center flex-d-col">
                //     <div className="d-flex align-items-center g-10 jc-center">
                //         <Image src={company.path} width="50" height="50" alt="Febi.ai" /><span className="font-weight-700 font-size-xl">Febi.ai</span>
                //     </div>
                //     <p className="text">
                //         Currently Working
                //     </p>
                // </div>
                <div className="d-flex align-items-center g-10 jc-center cursor-pointer compImg">
                    <Image src={company.path} width={isMobile ? "30" : '50'} height={isMobile ? "30" : "50"} alt="Febi.ai" /><span className="font-weight-700 font-size-xl">Febi.ai</span>
                </div>
            );

        case 'Sociocharge':
            return <Image alt={company.name} src={company.path} width={isMobile ? 150 : 200} height={50} key={i} className="margin-auto bg-white p-10 br-20 cursor-pointer compImg" />
        default:
            return (<Image alt={company.name} src={company.path} width={isMobile ? 150 : 200} height={isMobile ? 60 : 110} key={i} className="margin-inline-auto cursor-pointer compImg" />)
    }
}

interface experienceprops {
    companiesRef: any
}

const Experience = ({ companiesRef }: experienceprops) => {

    const isMobile = useMediaQuery('(max-width: 550px)');

    const handleHover = (name: string, currentCompany: boolean) => {
        if (currentCompany) {
            // console.log('line8', name);
        }
    }

    return (
        <SectionWrapper classes={isMobile ? 'p-block-60 p-inline-3rem' : 'p-block-60 p-inline-6rem'}>
            <h1 className={isMobile ? 'heading2Mob text-center' : 'heading2 text-center'} tabIndex={3}>I'm proud to have collaborated with some <br />awesome companies</h1>
            {/* <p className="text-center heading3 margin-block-20">I'm proud to have collaborated with some awesome companies:</p> */}
            <div className={`companiesDiv ${isMobile ? 'p-top-20 ' : ''}`} ref={companiesRef} >
                {companies.map((company, i) => <CompanyLogo company={company} idx={i} handleHover={handleHover} isMobile={isMobile} key={`${i}-${Math.random()}`} />)}
            </div>
        </SectionWrapper>
    )

}

export default Experience;