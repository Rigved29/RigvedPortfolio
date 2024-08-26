'use client'
import { useCallback } from "react";

interface projectCardTypes {
    imagePath: any;
    name: string;
    description: string;
    link: string;
    isMobile: boolean;
}

const ProjectCard = ({ imagePath, name, description, link, isMobile }: projectCardTypes) => {

    const handleRedirect = useCallback((link: string) => {
        window.open(link, '_blank');
    }, [])

    return (
        <div>
            <div className={`${isMobile ? 'projectCardParentMob' : 'projectCardParent'}`} onClick={() => handleRedirect(link)}>
                <div className={isMobile ? 'projectCardMob' : 'projectCard'} style={{ backgroundImage: `url(${imagePath?.src})` }}>
                    <span>{name}</span>
                </div>
            </div>
            <p className="margin-block-20 text-center">{description}</p>
        </div>
    )

}

export default ProjectCard