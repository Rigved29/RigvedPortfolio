import febiLogo from '../public/assets/Febi_logo.png';
import frontendoneLogo from '../public/assets/frontendoneLogo.svg';
import intellemoLogo from '../public/assets/intellemoLogo.svg';
import SociochargeLogo from '../public/assets/sociocharge.png';
//Projects
import yourNotes from '../public/assets/projects/yourNotes.jpg';
import videoChat from '../public/assets/projects/videoChat.jpg';
import birthday from '../public/assets/projects/birthday.jpg'

export const SKILLS = {
    frontend: ['Javascript', 'Reactjs', 'NextJS', 'Typescript', 'HTML', 'CSS', 'SCSS', 'Redux', 'Redux Saga', 'Bootstrap', 'Tailwind', 'Materialui'],
    backend: ['Javascript', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JWT'],
    tools: ['Git', 'PostMan', 'Webpack', 'Babel'],
    learning: ['React Native']
}

export const companies = [{ name: "Febi.ai", path: febiLogo, current: true }, { name: "Intellemo", path: intellemoLogo, current: false }, { name: "Frontendone", path: frontendoneLogo, current: false }, { name: "Sociocharge", path: SociochargeLogo, current: false }];


export const projects = [{ name: 'Your Notes', path: yourNotes, description: 'It is a online note app where you can add, edit and delete your notes.' }, { name: 'Video Chat', path: videoChat, description: 'It is a web-app for video calling. Every user in it has a uniqueID, with the help of it you can make a video call.' }, { name: 'Birthday Greetings', path: birthday, description: 'Wish your loved ones on birthday in a nerdy way.' }]