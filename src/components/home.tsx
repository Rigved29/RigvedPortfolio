import Experience from "../components/experience/index";
import HeroSection from "./heroSection"
import Navbar from "./navbar";
import SkillsSection from "./skills/skills";
import Testimonial from "./testimonials";
import Works from "./works";
import Contact from "./contact";

const HomeComp = () => {

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