'use client'

import { useState } from 'react';
import { testimonials } from '../../constants';
import TestimonialCard from './testimonialCard';

const Testimonial = () => {

    const [current, setCurrent] = useState(2);

    return (

        <section className="p-block-60">
            <h1 className="heading2 text-center color-yellow ">Testimonial</h1>
            <div className='d-flex margin-block-60 g-20 jc-center'>
                {testimonials.map((data, i) => <TestimonialCard name={data.name} designation={data.designation} description={data.description} imgPath={data.imgPath} current={current} idx={i + 1} />)}
            </div>
        </section>

    )


}

export default Testimonial