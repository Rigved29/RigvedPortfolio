import febiLogo from '../public/assets/Febi_logo.png';
import frontendoneLogo from '../public/assets/frontendoneLogo.svg';
import intellemoLogo from '../public/assets/intellemoLogo.svg';
import SociochargeLogo from '../public/assets/sociocharge.png';
//Projects
import yourNotes from '../public/assets/projects/yourNotes.jpg';
import videoChat from '../public/assets/projects/videoChat.jpg';
import birthday from '../public/assets/projects/birthday.jpg';
import Designer from '../public/assets/projects/desinger2.jpg';
//Testimonial
import mukesh from '../public/assets/Testimonial/mukesh.jpg';
import hemant from '../public/assets/Testimonial/Hemant.jpg';
import santosh from '../public/assets/Testimonial/Santhosh_pic.png';

export const SKILLS = {
    frontend: ['Javascript', 'Reactjs', 'NextJS', 'Typescript', 'HTML', 'CSS', 'SCSS', 'Redux', 'Redux Saga', 'Bootstrap', 'Tailwind', 'Materialui'],
    backend: ['Javascript', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JWT'],
    tools: ['Git', 'PostMan', 'Webpack', 'Babel'],
    learning: ['React Native']
}

export const companies = [{ name: "Febi.ai", path: febiLogo, current: true }, { name: "Intellemo", path: intellemoLogo, current: false }, { name: "Frontendone", path: frontendoneLogo, current: false }, { name: "Sociocharge", path: SociochargeLogo, current: false }];


export const projects = [{ name: 'Your Notes', path: yourNotes, description: 'An online Note Making App.' }, { name: 'Video Chat', path: videoChat, description: 'A video calling Web app.' }, { name: 'Birthday Greetings', path: birthday, description: 'Wish your loved ones on birthday in a nerdy way.' }, { name: 'Designer', path: Designer, description: 'A Designer\'s Portfolio' }]

export const testimonials = [{ name: 'Mukesh Maurya', description: "Rigved has worked with me as full time developer for over eight months; <span class='color-white'>he is enthusiastic about technology and always ready for new challenges. He is a person that you can rely on</span>, and I highly recommend him.", imgPath: mukesh, designation: 'Founder at Frontendone' }, { name: 'Hemant Shrivastava', description: "Rigved has worked with me as full time developer for over eight months; <span class='color-white'>he is enthusiastic about technology and always ready for new challenges. He is a person that you can rely on</span>, and I highly recommend him.", imgPath: hemant, designation: 'Founder at Sociocharge' }, { name: 'Simon Santosh', description: "Rigved has worked with me as full time developer for over eight months; <span class='color-white'>he is enthusiastic about technology and always ready for new challenges. He is a person that you can rely on</span>, and I highly recommend him.", imgPath: santosh, designation: 'UI/UX Designer' }]