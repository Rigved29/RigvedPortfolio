
import { useMediaQuery } from '@/customHooks/useMediaHook';
import SectionWrapper from '../common/sectionWrapper';
import Form from '../contact/form';
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

const Contact = () => {

    const isMobile = useMediaQuery('(max-width: 550px)');

    return (
        <SectionWrapper classes="p-block-60 bg-BluishDark">
            <div className='' id='contact_me'>
                <div className={`d-flex jc-center g-40 margin-inline-auto ${isMobile ? 'flex-d-col' : 'flex-d-row'}`}>
                    <div className={`${isMobile ? 'w-90per margin-inline-auto' : 'w-30per'} d-flex jc-space-between flex-d-col`}>
                        <div className='heading2'>
                            <p className="color-white">Got a project?</p>
                            <p className="color-yellow">Lets Talk!</p>
                        </div>
                        <div className='mb-20 color-gray-l font-size-14'>
                            <p className='mb-10 d-flex g-5 align-items-center underline'><IoMailOutline /><span><a href={`mailto:rigvedshrivastava@gmail.com`} className='contactaTag'>rigvedshrivastava@gmail.com</a></span></p>
                            <p className='d-flex g-5 align-items-center underline'><IoCallOutline /><span><a href={`tel:+91-8109163464`} className='contactaTag'>+91-8109163464</a></span></p>
                        </div>
                    </div>
                    <div className={`${isMobile ? 'w-90per margin-inline-auto' : 'w-30per'} `}>
                        <Form />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )

}

export default Contact;