import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    pixel, text, news, dalle, gym,
    freecodecamp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "HTML",
      company_name: "FreeCodeCamp",
      icon: freecodecamp,
      iconBg: "#383E56",
      date: "Oct 2022",
      points: [
        "Developing and maintaining web applications skeletons from scratch.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "CSS",
      company_name: "FreeCodeCamp",
      icon: freecodecamp,
      iconBg: "#E6DEDD",
      date: "Nov 2023",
      points: [
        "Developing and designing the web applications to give them an elegant look from base CSS.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Creating better UI designs using CSS libraries like Bootstrap, Tailwind for faster implementations.",
      ],
    },
    {
      title: "JavaScript",
      company_name: "FreeCodeCamp",
      icon: freecodecamp,
      iconBg: "#383E56",
      date: "Dec 2023",
      points: [
        "Developing Javascript logics to tackle and manipulate JS datatypes.",
        "Using old and new JavaScript predefined functions to tackle various challenges faced by developers.",
        "Contributed over 300+ hours of codework and completing 150+ questions on freeCodeCamp",
        "Accustomed to various JS techniques like Debugging, Destructuring, Data manipulation, etc",
        "Implementation of JavaScript logics on web applications to give them life and provide better and plesant user experience.",
      ],
    },
    {
      title: "ReactJS",
      company_name: "FreeCodeCamp",
      icon: freecodecamp,
      iconBg: "#E6DEDD",
      date: "Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Using my ReactJS skills to make few pens on CodePen."
      ],
    },
  ];
  
 
  const projects = [
    {
      name: "Pixel Bytes",
      description:
        "A Graphic designer firm's website. This project uses a lot of react libraries such as framer-motion, react-tilt, react-vertical etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pixel,
      source_code_link: "https://github.com/SirNick89/pixel-byte",
    },
    {
      name: "Gym Excercises",
      description:
        "Web application that enables users to search for exercises, and search exercises by various endpoints such as body parts, exercise type etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "materialui",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/SirNick89/gym-exercises",
    },
    {
      name: "Dall-E 2.0",
      description:
        "An AI image generator web application which uses DALL-E API to generate art from the prompt given by user, also uses cloudinary to save or share the images.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/SirNick89/dall-e",
    },
    {
      name: "WiseMen News",
      description:
        "A web application to show top news headlines, which can be streamlined by user for specific news genre.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: news,
      source_code_link: "https://github.com/SirNick89/news-app",
    },
    {
      name: "Text Utils",
      description:
        "A text editing application wwhich provides various usefull text editing presets.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: text,
      source_code_link: "https://github.com/SirNick89/Text-Utils",
    },
  ];
  
  export { services, technologies, experiences, projects };