import febiLogo from '../public/assets/Febi_logo.png';
import frontendoneLogo from '../public/assets/frontendoneLogo.svg';
import intellemoLogo from '../public/assets/intellemoLogo.svg';
import SociochargeLogo from '../public/assets/sociocharge.png';
//Projects
import yourNotes from '../public/assets/projects/yourNotes.jpg';
import videoChat from '../public/assets/projects/videoChat.jpg';
import birthday from '../public/assets/projects/birthday.jpg';
import Designer from '../public/assets/projects/desinger2.jpg';

export const SKILLS = {
    frontend: ['Javascript', 'Reactjs', 'NextJS', 'Typescript', 'HTML', 'CSS', 'SCSS', 'Redux', 'Redux Saga', 'Bootstrap', 'Tailwind', 'Materialui'],
    backend: ['Javascript', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JWT'],
    tools: ['Git', 'PostMan', 'Webpack', 'Babel'],
    learning: ['React Native']
}

export const companies = [{ name: "Febi.ai", path: febiLogo, current: true }, { name: "Intellemo", path: intellemoLogo, current: false }, { name: "Frontendone", path: frontendoneLogo, current: false }, { name: "Sociocharge", path: SociochargeLogo, current: false }];


export const projects = [{ name: 'Your Notes', path: yourNotes, description: 'An online Note Making App.' }, { name: 'Video Chat', path: videoChat, description: 'A video calling Web app.' }, { name: 'Birthday Greetings', path: birthday, description: 'Wish your loved ones on birthday in a nerdy way.' }, { name: 'Designer', path: Designer, description: 'A Designer\'s Portfolio' }]