'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster, toast } from 'sonner'
import { contactFormSchema } from '../schema';
import SelectBtn from '../common/SelectBtn';
import Loader from '../common/loader';
import { MdAttachment } from "react-icons/md";


const Form = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(contactFormSchema),
        defaultValues: {
            interestedIn: [],
            message: '',
            email: '',
            name: '',
        }
    });
    const formData = watch();
    const [loading, setLoading] = useState(false);


    const onSubmit = async (formInput: any) => {
        setLoading(true);

        const { name, email, interestedIn, message, file } = formInput;

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('interestedIn', interestedIn)
        formData.append('message', message);
        if (file) {
            formData.append('file', file);
        }


        const res = await fetch('/api/contact', {
            method: 'POST',
            body: formData,
        });
        const data = await res.json();

        if (data.status === 200) {

            toast.success('Email has been sent successfully, I will get back to you.');
            reset();
        } else {

            toast.error('Something went wrong! , please check internet connection')
        }
        setLoading(false);
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='p-20 br-10 bg-darkBlue d-flex flex-d-col' encType="multipart/form-data">
            <p className='mb-30'>I am Interested in...</p>
            <div className='mt-20 d-flex jc-start g-10'>
                <SelectBtn value="Frontend" name='Frontend' inputGrp='interestedIn' register={register} interestedIn={formData?.interestedIn} />
                <SelectBtn value="Backend" name='Backend' inputGrp='interestedIn' register={register} interestedIn={formData?.interestedIn} />
                <SelectBtn value="Full Stack" name='Full Stack' inputGrp='interestedIn' register={register} interestedIn={formData?.interestedIn} />
            </div>
            <input type='text' placeholder='Your Name' {...register('name')} className='mt-20 inputs' />
            <input type='email' placeholder='email' {...register('email')} className='mt-20 inputs' />
            <input type='text' placeholder='message' {...register('message')} className='mt-20 inputs' />
            {/*<div>
                <label htmlFor='attachment' className='font-size-12 cursor-pointer'><MdAttachment /><span className='margin-left-5'>Attach Files</span></label>
                <input type="file" {...register('file')} className='mt-20 inputs' />
            </div>*/}
            <button className='mt-20 bg-white p-5 color-black br-5 w-140 font-size-10 cursor-pointer no-border d-flex g-10 align-items-center jc-center h-30' type='submit'>{loading && <Loader size='24px' />} Send Message</button>
        </form>
    )

}

export default Form;