import { useMediaQuery } from '@/customHooks/useMediaHook';
import { projects } from '../../constants';
import SectionWrapper from '../common/sectionWrapper';
import ProjectCard from './ProjectCard';

const Works = () => {

    const isMobile = useMediaQuery('(max-width: 550px)');

    return (
        <SectionWrapper classes="p-block-60">
            <div className="d-flex jc-center align-items-center g-20 margin-right">
                <h2 className={` ${isMobile ? 'heading2Mob' : 'heading2'} text-center color-yellow`}>Works</h2>
                <h1 className={`${isMobile ? 'heading1Mob' : 'heading1'}`}>My Beautiful <br /> Projects</h1>
            </div>
            <div className={`d-grid ${isMobile ? 'ColsRows-1 w-100per' : 'ColsRows-2  w-600'} p-block-60 g-20 margin-inline-auto`}>
                {projects.map((project, i) => <ProjectCard imagePath={project.path} name={project.name} description={project.description} link={project.link} isMobile={isMobile} key={`${i}-${Math.random()}`} />)}
            </div>
        </SectionWrapper>
    )

}

export default Works;