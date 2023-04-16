import React from 'react'
import  Tilt  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
return (
<Tilt className="xs:w-[250px] w-full">
<motion.div
variants={fadeIn('right', 'spring', 0.75 * index, 0.75)}
className="w-full green-pink-gradient p-[1px] rounded-[60px] shadow-card"
>
<div options={{
  max: 45,
  scale: 1,
  speed: 450
}}
className="bg-tertiary rounded-[60px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
>
<img src={icon} alt={title}
className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
</div>
</motion.div>

</Tilt>
)
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>Introduction</p>
<h2 className={styles.sectionHeadText}>Overview</h2>

    </motion.div>
    
    <motion.p
    variants={fadeIn('', '', 0.5, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
I am a newly skilled Web-Developer. I have extensive knowledge of HTML, CSS &#40; including tailwind and Bootstrap &#41; , JavaScript, ReactJS and its libraries such as ThreeJS ,React-tilt, React-vertical ,React-three-fiber etc.
Since most of these technologies and implementations are self taught I am confident in my skills of learning and I am very keen to learn more and perfect my knowledge of developing effective websites which gives best user experience. 

    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services, index) => (
        <ServiceCard key={services.title} index={index} {...services} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')