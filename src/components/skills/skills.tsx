import BlurredBgBox from "../common/blurredBgBox";
import { SKILLS } from "@/constants";
import { FaLaptopCode } from "react-icons/fa6";
import { BsTerminalFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import SectionWrapper from "../common/sectionWrapper";
import { useMediaQuery } from "@/customHooks/useMediaHook";


const SkillsBox = ({ category, skills, icon }: { category: string, skills: string[], icon: any }) => {

    return (
        <div className="w-100per d-flex flex-d-col g-20">
            <div className="d-flex g-5 align-items-center">
                {icon}
                <h1 className="color-yellow line-height-normal font-size-large font-weight-500">{category}</h1>
            </div>
            <ul className="w-100per d-flex flex-wrap g-5 line-height-normal p-left-20">
                {skills.map((skill: string, i) => <li className="margin-right-20 skills-li" key={`${i}-${Math.random()}`}>{skill}</li>)}
            </ul>
        </div>
    )

}

const SkillsSection = () => {

    const isMobile = useMediaQuery('(max-width: 550px)');


    return (
        <SectionWrapper classes={isMobile ? 'p-inline-2rem' : 'p-block-60 p-inline-6rem'}>
            <h1 id="skillSec" className="heading2 text-center">Skills</h1>
            <div className={`margin-block-30 d-flex jc-space-between g-20 flex-wrap ${isMobile ? 'flex-d-col align-items-center' : 'flex-d-row'}`}>
                <BlurredBgBox classes={isMobile ? "w-100per" : 'w-30per'}>
                    <SkillsBox category='Front-End Development' skills={SKILLS['frontend']} icon={<CgWebsite />} />
                </BlurredBgBox>
                <BlurredBgBox classes={isMobile ? "w-100per" : 'w-30per'} >
                    <SkillsBox category='Back-End Development' skills={SKILLS['backend']} icon={<BsTerminalFill />} />
                </BlurredBgBox>
                <BlurredBgBox classes={isMobile ? "w-100per" : 'w-30per'} >
                    <SkillsBox category='Tools' skills={SKILLS['tools']} icon={<CgWebsite />} />
                </BlurredBgBox>
                {/* <BlurredBgBox classes="w-25per" children={<SkillsBox category='Learning' skills={SKILLS['learning']} />} /> */}
            </div>
        </SectionWrapper>
    )
}

export default SkillsSection;