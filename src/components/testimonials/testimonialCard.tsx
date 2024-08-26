import Image from "next/image";

interface testimonialpropsTypes {
    description: string;
    imgPath: any;
    name: string;
    designation: string;
    current: number;
    idx: number;
    isMobile: boolean;
}

const TestimonialCard = ({ description, imgPath, name, designation, current, idx, isMobile }: testimonialpropsTypes) => {

    return (

        <div className={`${isMobile ? 'testimonialCardMob' : 'testimonialCard'} ${idx === current ? 'scaleUp' : ''}`} style={isMobile ? { transform: `translateX(${(idx - 1) * 100}%)` } : {}}>
            <div className="mb-30">
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="margin-block-20 d-flex jc-start g-10 align-items-center">
                <Image src={imgPath} alt={`img-${name}`} width={50} height={50} className="br-50per" />
                <div className="d-flex flex-d-col">
                    <span className="color-white font-weight-500">{name}</span>
                    <span>{designation}</span>
                </div>
            </div>
        </div>

    )

}

export default TestimonialCard;