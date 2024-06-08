'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../schema';
import SelectBtn from '../common/SelectBtn';
import { MdAttachment } from "react-icons/md";

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactFormSchema)
    });

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='p-20 br-10 bg-darkBlue d-flex flex-d-col'>
            <p className='mb-30'>I am Interested in...</p>
            <div className='mt-20 d-flex jc-start g-10'>
                {/* <input type="checkbox" value="Frontend Development" {...register('interestedIn')} />
                <input type="checkbox" value="Backend Development" {...register('interestedIn')} />
                <input type="checkbox" value="Full Stack" {...register('interestedIn')} /> */}
                <SelectBtn value="Frontend" name='Frontend' inputGrp='interestedIn' register={register} />
                <SelectBtn value="Backend" name='Backend' inputGrp='interestedIn' register={register} />
                <SelectBtn value="Full Stack" name='Full Stack' inputGrp='interestedIn' register={register} />
            </div>
            <input type='text' placeholder='Your Name' name='name' {...register} className='mt-20 inputs' />
            <input type='email' placeholder='email' name='email' {...register} className='mt-20 inputs' />
            <input type='text' placeholder='message' name='message' {...register} className='mt-20 inputs' />
            <div>
                <label htmlFor='attachment' className='font-size-12 cursor-pointer'><MdAttachment /><span className='margin-left-5'>Attach Files</span></label>
                <input id="attachment" type="file" name='file' {...register} className='mt-20 inputs' />
            </div>
            <button className='mt-20 bg-white p-10 color-black br-5 w-100 font-size-10 cursor-pointer' type='submit'>Send Message</button>
        </form>
    )

}

export default Form;