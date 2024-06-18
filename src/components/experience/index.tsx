'use client';
import { companies } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from "react";
import SectionWrapper from "../common/sectionWrapper";




const CompanyLogo = ({ company, i, handleHover }: any) => {
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
                <div className="d-flex align-items-center g-10 jc-center">
                    <Image src={company.path} width="50" height="50" alt="Febi.ai" /><span className="font-weight-700 font-size-xl">Febi.ai</span>
                </div>
            );
        default:
            return (<Image alt={company.name} src={company.path} width={200} height={110} key={i} className="margin-inline-auto" />)
    }
}

const Experience = () => {

    const handleHover = (name: string, currentCompany: boolean) => {
        if (currentCompany) {
            console.log('line8', name);
        }
    }

    return (
        <SectionWrapper classes="p-block-60 p-inline-6rem">
            <h1 className="heading2 text-center">I'm proud to have collaborated with some <br />awesome companies</h1>
            {/* <p className="text-center heading3 margin-block-20">I'm proud to have collaborated with some awesome companies:</p> */}
            <div className="companiesDiv">
                {companies.map((company, i) => <CompanyLogo company={company} idx={i} handleHover={handleHover} />)}
            </div>
        </SectionWrapper>
    )

}

export default Experience;