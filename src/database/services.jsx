import { FaServer } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';

export const servicesOffered = [
  {
    imgSrc: '/businesses.png',
    title: 'Businesses',
    description: `Optimize internal communication within your company with Discord servers 
    designed to meet corporate demands. We customize virtual work environments, incorporating 
    productivity tools, virtual meeting rooms, and efficient notification systems. 
    Strengthen team cohesion and boost operational effectiveness.`,
  },
  {
    imgSrc: '/schools.png',
    title: 'Schools',
    description: `We elevate the educational experience through Discord servers tailored 
    specifically for schools. We facilitate communication between students and teachers, 
    providing a secure and collaborative environment. Our services include educational integrations, 
    themed channels, and customized tools to stimulate academic interaction.`,
  },
  {
    imgSrc: '/gaming.png',
    title: 'Gaming Communities',
    description: `Maximize the online gaming experience with Discord servers tailored for 
    gaming communities. We offer unique customizations, game bot integrations, themed voice 
    channels, and notification systems to keep all members engaged. Create a space where 
    gamers can connect, collaborate, and compete.`,
  },
];

export const servicesIncluded = [
  {
    icon: <FaServer className="text-[2.5rem] text-neon" />,
    title: 'Initial creation and setup of Discord servers',
    description: `Our team specializes in the seamless creation and setup of Discord servers 
    tailored to your unique requirements. From establishing the foundational structure to 
    configuring essential settings, we ensure that your server is ready to provide a top-notch 
    communication platform for your community, school, or business.`,
  },
  {
    icon: <FaPaintBrush className="text-[2.5rem] text-neon" />,
    title: 'Themed and branded customizations',
    description: `Elevate the visual identity of your Discord server with our themed and 
    branded customizations. We go beyond standard setups, providing personalized designs, 
    layouts, and visual elements that align with your brand, community culture, or educational 
    institution. Make a lasting impression with a customized and cohesive appearance.`,
  },
  {
    icon: <FaRobot className="text-[3rem] text-neon" />,
    title: 'Custom game bot integrations',
    description: `Enhance the functionality of your Discord server with custom game bot 
    integrations. We tailor these bots to suit the specific needs of your gaming community, 
    providing features that facilitate engagement, competitions, and a seamless gaming experience. 
    From moderation to specialized game commands, our integrations are designed with your community in mind.`,
  },
  {
    icon: <FaTools className="text-[2.5rem] text-neon" />,
    title: 'Sector-specific tools',
    description: `Recognizing the diverse requirements of different sectors, we offer 
    sector-specific tools to optimize your Discord server. Whether you're an educational 
    institution needing unique collaboration features or a business requiring specialized 
    productivity tools, we ensure that your server is equipped with the tools essential to your sector.`,
  },
  {
    icon: <FaHeadset className="text-[2.75rem] text-neon" />,
    title: 'Ongoing support and updates',
    description: `Our commitment to your Discord server doesn't end with its creation. 
    We provide ongoing support and updates to ensure that your server remains at its best. 
    Whether it's addressing technical issues, implementing new features, or staying current 
    with Discord updates, our team is dedicated to keeping your server running smoothly over the long term.`,
  },
];
