import Image from "next/image";

interface testimonialpropsTypes {
    description: string;
    imgPath: any;
    name: string;
    designation: string;
}

const TestimonialCard = ({ description, imgPath, name, designation }: testimonialpropsTypes) => {

    return (

        <div>
            <div>
                {description}
            </div>
            <div>
                <Image src={imgPath} alt={`img-${name}`} width={50} height={50} />
                <div>
                    <span>{name}</span>
                    <span>{designation}</span>
                </div>
            </div>
        </div>

    )

}

export default TestimonialCard;