import { projects } from '../../constants';
import ProjectCard from './ProjectCard';

const Works = () => {

    return (
        <section className="p-block-60">
            <div className="d-flex jc-center align-items-center g-20 margin-right">
                <h2 className="heading2 text-center color-yellow">Works</h2>
                <h1 className="heading1">My Beautiful <br /> Works</h1>
            </div>
            <div className='d-grid ColsRows-2 p-block-60 g-20 w-600 margin-inline-auto'>
                {projects.map((project) => <ProjectCard imagePath={project.path} name={project.name} description={project.description} />)}
            </div>
        </section>
    )

}

export default Works;