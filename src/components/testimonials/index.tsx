import { testimonials } from '../../constants';
import TestimonialCard from './testimonialCard';

const Testimonial = () => {


    return (

        <section className="p-block-60">
            <h1 className="heading2 text-center color-yellow">Testimonial</h1>
            <div>
                {testimonials.map((data) => <TestimonialCard name={data.name} designation={data.designation} description={data.description} imgPath={data.imgPath} />)}
            </div>
        </section>

    )


}

export default Testimonial