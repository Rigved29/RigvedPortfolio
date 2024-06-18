
import SectionWrapper from '../common/sectionWrapper';
import Form from '../contact/form';
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

const Contact = () => {

    return (
        <SectionWrapper classes="p-block-60 bg-BluishDark">
            <div className=''>
                <div className="d-flex jc-center g-40 margin-inline-auto">
                    <div className="w-30per d-flex jc-space-between flex-d-col">
                        <div className='heading2'>
                            <p className="color-white">Got a project?</p>
                            <p className="color-yellow">Lets Talk!</p>
                        </div>
                        <div className='mb-20 color-gray-l font-size-14'>
                            <p className='mb-10 d-flex g-5 align-items-center underline'><IoMailOutline /><span>rigvedshrivastava@gmail.com</span></p>
                            <p className='d-flex g-5 align-items-center underline'><IoCallOutline /><span>+91-8109163464</span></p>
                        </div>
                    </div>
                    <div className="w-30per">
                        <Form />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )

}

export default Contact;