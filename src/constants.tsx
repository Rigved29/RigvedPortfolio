import febiLogo from '../public/assets/Febi_logo.png';
import frontendoneLogo from '../public/assets/frontendoneLogo.svg';
import intellemoLogo from '../public/assets/intellemoLogo.svg';
import SociochargeLogo from '../public/assets/socioChargeLogo.svg';
//Projects
import yourNotes from '../public/assets/projects/yourNotes.jpg';
import videoChat from '../public/assets/projects/videoChat.jpg';
import birthday from '../public/assets/projects/birthday.jpg';
import Designer from '../public/assets/projects/desinger2.jpg';
import Dga from '../public/assets/projects/dga.png';
//Testimonial
import mukesh from '../public/assets/Testimonial/mukesh.jpg';
import hemant from '../public/assets/Testimonial/Hemant.jpg';
import santosh from '../public/assets/Testimonial/Santhosh_pic.png';

//social media logos
import instagramLogo from '../public/assets/Social_logos/insta_logo.svg';
import fbLogo from '../public/assets/Social_logos/fb_logo.svg';
import twitterLogo from '../public/assets/Social_logos/twiiter_logo.svg';
import linkedinLogo from '../public/assets/Social_logos/linkedin_logo.svg';
import GithubLogo from '../public/assets/Social_logos/github_logo.svg';
import { link } from 'fs';

export const primaryYellow = "#e5de00";


export const SKILLS = {
    frontend: ['Javascript', 'Reactjs', 'NextJS', 'Typescript', 'HTML', 'CSS', 'SCSS', 'Redux', 'Redux Saga', 'Bootstrap', 'Tailwind', 'Materialui'],
    backend: ['Javascript', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JWT'],
    tools: ['Git', 'PostMan', 'Webpack', 'Babel', 'JIRA'],
    learning: ['React Native']
}

export const companies = [{ name: "Febi.ai", path: febiLogo, current: true }, { name: "Intellemo", path: intellemoLogo, current: false }, { name: "Frontendone", path: frontendoneLogo, current: false }, { name: "Sociocharge", path: SociochargeLogo, current: false }];


export const projects = [{ name: 'Designer', path: Designer, description: 'A Designer\'s Portfolio', link: 'http://uxdesaner.netlify.app' }, { name: 'DGA', path: Dga, description: 'A NextGen Academy for dentists.', link: 'https://dga.inclouder.tech' },
// { name: 'Your Notes', path: yourNotes, description: 'An online Note Making App.', 
// link: 'https://your-notes-chi.vercel.app/allnotes' },
{ name: 'Video Chat', path: videoChat, description: 'A video calling Web app.', link: 'https://video-chat-app-rho.vercel.app/' }, { name: 'Birthday Greetings', path: birthday, description: 'Wish your loved ones on birthday in a nerdy way.', link: 'https://birthday-wish-alpha.vercel.app/' }]

export const testimonials = [{ name: 'Mukesh Maurya', description: "Rigved has worked with me as full time developer for over eight months; <span class='color-white'>he is enthusiastic about technology and always ready for new challenges. He is a person that you can rely on</span>, and I highly recommend him.", imgPath: mukesh, designation: 'Founder at Frontendone' }, { name: 'Hemant Shrivastava', description: "Rigved has worked with me as full time developer for over eight months; <span class='color-white'>he is enthusiastic about technology and always ready for new challenges. He is a person that you can rely on</span>, and I highly recommend him.", imgPath: hemant, designation: 'Founder at Sociocharge' }, { name: 'Simon Santosh', description: "Rigved has worked with me as full time developer for over eight months; <span class='color-white'>he is enthusiastic about technology and always ready for new challenges. He is a person that you can rely on</span>, and I highly recommend him.", imgPath: santosh, designation: 'UI/UX Designer' }]


export const socialMediaHandles = [
    { name: 'Linkedin', imgPath: linkedinLogo, link: 'https://www.linkedin.com/in/rigved-shrivastava-7055671a5/' },
    { name: 'Github', imgPath: GithubLogo, link: 'https://github.com/Rigved29' },
    // { name: 'Instagram', imgPath: instagramLogo, link: '#' }
]