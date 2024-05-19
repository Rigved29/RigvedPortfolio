import HeroSection from "./heroSection"
import Navbar from "./navbar";
import SkillsSection from "./skills/skills";

const HomeComp = () => {

    return (
        <main className="p-6rem">
            <HeroSection />
            <SkillsSection />
        </main>
    )

}

export default HomeComp;