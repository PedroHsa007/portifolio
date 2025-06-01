import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, 
  FaDatabase, FaMicrosoft, FaServer, FaChartBar
} from 'react-icons/fa';
import { SiTypescript, SiSelenium, SiPandas, SiOpencv, SiQlik } from 'react-icons/si';
import PageTransition from '../components/PageTransition';

//FaNodeJs

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={40} />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript size={40} />, color: "text-blue-600" },
        { name: "React", icon: <FaReact size={40} />, color: "text-blue-400" },
        { name: "React Native", icon: <FaReact size={40} />, color: "text-blue-300" },
      ],
    },
    {
      title: "Back-end",
      skills: [
        { name: "SQL", icon: <FaDatabase size={40} />, color: "text-blue-500" },
        { name: "SQL Server", icon: <FaServer size={40} />, color: "text-red-500" },
        { name: "Microsoft Access", icon: <FaMicrosoft size={40} />, color: "text-purple-500" },
      ],
    },
    {
      title: "Python",
      skills: [
        { name: "Python", icon: <FaPython size={40} />, color: "text-yellow-300" },
        { name: "Selenium", icon: <SiSelenium size={40} />, color: "text-green-500" },
        { name: "Pandas", icon: <SiPandas size={40} />, color: "text-blue-600" },
        { name: "OpenCV", icon: <SiOpencv size={40} />, color: "text-green-600" },
        { name: "PyQt5", icon: <FaPython size={40} />, color: "text-green-400" },
        { name: "YOLOv5", icon: <FaPython size={40} />, color: "text-yellow-500" },
      ],
    },
    {
      title: "Extras",
      skills: [
        { name: "Power Automate", icon: <FaMicrosoft size={40} />, color: "text-blue-400" },
        { name: "Qlik Sense", icon: <SiQlik size={40} />, color: "text-green-500" },
        { name: "Think Cell", icon: <FaChartBar size={40} />, color: "text-purple-400" },
        { name: "Microsoft Office", icon: <FaMicrosoft size={40} />, color: "text-orange-500" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="section-container">
          <h2 className="section-title">Habilidades & Tecnologias</h2>
          
          <div className="mt-16 space-y-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold mb-8 text-blue-500 flex items-center"
                >
                  <span className="mr-2">🚀</span>
                  {category.title}
                </motion.h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="tech-icon group"
                    >
                      <div className={`text-5xl mb-3 ${skill.color} group-hover:animate-pulse`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;