'use client'

import { useState } from 'react';
import { testimonials } from '../../constants';
import TestimonialCard from './testimonialCard';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import SectionWrapper from '../common/sectionWrapper';
import { useMediaQuery } from '@/customHooks/useMediaHook';

const Testimonial = () => {
    const [testimonialsData, setTestimonialsData] = useState(testimonials);
    const [current, setCurrent] = useState(2);
    const [mobCurrent, setMobCurrent] = useState(0);
    const isMobile = useMediaQuery('(max-width: 550px)');


    const handleCurrentCard = (type: string) => {

        if (isMobile) {

            if (type === 'left') {
                if (mobCurrent === testimonialsData.length - 1) {
                    return;
                }
                setMobCurrent((curr) => curr + 1);
            } else if (type === 'right') {
                if (mobCurrent === 0) {
                    return;
                }
                setMobCurrent((curr) => curr - 1);
            }

        } else {

            switch (type) {
                case 'left':
                    setCurrent((prevState) => {
                        if (prevState === 1) {
                            return testimonialsData.length;
                        }
                        return prevState - 1
                    });
                    break;
                case 'right':
                    setCurrent((prevState) => {
                        if (prevState === testimonialsData.length) {
                            return 1;
                        }
                        return prevState + 1
                    });
                    break;
                default:
                    break;
            }

        }



        // setTestimonialsData((prevState) => {

        //     const arr = [...prevState];

        //     if (arr.length > 0) {
        //         // Remove the last element and store it
        //         let lastElement = arr.pop();
        //         // Insert the last element at the beginning of the array
        //         if (lastElement) {
        //             arr.unshift(lastElement);
        //         }
        //     }

        //     return arr;

        // })

    }


    return (

        <SectionWrapper classes={`p-block-60 p-inline-1rem ${isMobile ? 'mb-400' : ''}`}>
            <h1 className="heading2 text-center color-yellow ">Testimonial</h1>
            {!isMobile ?
                <div className='d-flex margin-block-60 g-20 jc-center cardsParent'>
                    {testimonialsData.map((data, i) => <TestimonialCard name={data.name} designation={data.designation} description={data.description} imgPath={data.imgPath} current={current} idx={i + 1} isMobile={isMobile} key={`${i}-${Math.random()}`} />)}
                </div> :
                <div className='pos-relative margin-block-60 g-20'>
                    {testimonialsData.map((data, i) => <TestimonialCard name={data.name} designation={data.designation} description={data.description} imgPath={data.imgPath} current={current} idx={(i + 1) - mobCurrent} isMobile={isMobile} key={`${i}-${Math.random()}`} />)}
                </div>
            }
            <div className='d-flex g-5 jc-center' style={(isMobile ? { position: 'absolute', top: '500px', left: '40%' } : {})}>
                <span className='br-50per p-10 bg-StoneBlue cursor-pointer' onClick={() => handleCurrentCard('left')}><FaArrowLeft /></span>
                <span className='br-50per p-10 bg-StoneBlue cursor-pointer' onClick={() => handleCurrentCard('right')}><FaArrowRight /></span>
            </div>
        </SectionWrapper>

    )


}

export default Testimonial