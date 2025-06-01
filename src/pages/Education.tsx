import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  status: 'Em andamento' | 'Concluído' | 'Trancado';
  description?: string;
  icon: React.ReactNode;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Sistemas de Informação",
      institution: "FOA",
      period: "2021 - atual",
      status: "Em andamento",
      description: "8º Período. Com foco em Analise de Dados, Analise de Banco de dados e Suporte Tecnico",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Engenharia Mecânica",
      institution: "FOA",
      period: "2020 - 2021",
      status: "Trancado",
      icon: <School size={24} />
    },
    {
      degree: "Ensino Médio",
      institution: "Firjan SESI",
      period: "2019",
      status: "Concluído",
      icon: <BookOpen size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="section-container">
          <h2 className="section-title">Formação Acadêmica</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 space-y-8"
          >
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex flex-col md:flex-row md:items-center card card-hover p-8"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full ${
                    item.status === 'Em andamento' 
                      ? 'bg-blue-600/20 text-blue-500' 
                      : item.status === 'Concluído'
                        ? 'bg-green-600/20 text-green-500'
                        : 'bg-red-600/20 text-red-500'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Em andamento' 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : item.status === 'Concluído'
                          ? 'bg-green-600/20 text-green-400'
                          : 'bg-red-600/20 text-red-400'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                  
                  <div className="mb-3 text-gray-400 flex items-center">
                    <School size={16} className="mr-2" />
                    <span>{item.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{item.period}</span>
                  </div>
                  
                  {item.description && (
                    <p className="text-gray-300">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Current education highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-800/50"
          >
            <div className="flex items-center mb-4">
              <Award className="mr-3 text-blue-500" size={24} />
              <h3 className="text-xl font-bold">Curso Atual</h3>
            </div>
            <p className="text-gray-300">
              Atualmente estou cursando o 7º período de Sistemas de Informação na FOA, onde tenho me dedicado 
              especialmente às áreas de desenvolvimento de software, análise de dados e inteligência artificial. 
              Meu TCC está focado em visão computacional utilizando YOLO e OpenCV para aplicações práticas.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;