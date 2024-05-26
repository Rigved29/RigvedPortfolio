interface projectCardTypes {
    imagePath: any;
    name: string;
    description: string;
}

const ProjectCard = ({ imagePath, name, description }: projectCardTypes) => {

    return (
        <div>
            <div className="projectCardParent">
                <div className="projectCard" style={{ backgroundImage: `url(${imagePath?.src})` }}>
                    <span>{name}</span>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )

}

export default ProjectCard