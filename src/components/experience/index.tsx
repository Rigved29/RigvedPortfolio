import { companies } from "@/constants";
import Image from "next/image";

const Experience = () => {

    return (
        <section className="p-block-30">
            <h1 className="heading2 text-center">Experience</h1>
            <p className="text-center heading3 margin-block-20">I'm proud to have collaborated with some awesome companies:</p>
            <div className="d-flex jc-space-between margin-block-30">
                {companies.map((company, i) => {
                    if (company.name === 'Febi.ai') {
                        return (
                            <div className="d-flex align-items-center g-10 jc-center">
                                <Image src={company.path} width="41" height="50" alt="Febi.ai" />Febi.ai</div>
                        )
                    } else {
                        return <Image alt={company.name} src={company.path} width={150} height={75} key={i} />
                    }
                })}
            </div>
        </section>
    )

}

export default Experience;