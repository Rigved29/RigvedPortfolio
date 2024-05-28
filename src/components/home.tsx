import Experience from "../components/experience/index";
import HeroSection from "./heroSection"
import Navbar from "./navbar";
import SkillsSection from "./skills/skills";
import Testimonial from "./testimonials";
import Works from "./works";

const HomeComp = () => {

    return (
        <main className="p-6rem">
            <HeroSection />
            <SkillsSection />
            <Experience />
            <Works />
            <Testimonial />
        </main>
    )

}

export default HomeComp;