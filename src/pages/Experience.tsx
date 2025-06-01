//import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, FileText } from 'lucide-react';
import PageTransition from '../components/PageTransition';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Estagiário",
      company: "CSN",
      period: "2024 - atual",
      description: [
        "Automação com Power Automate e VBA",
        "Python + Excel + Qlik Sense",
        "Desenvolvimento de soluções para automatizar processos internos",
        "Análise de dados e criação de dashboards"
      ]
    },
    {
      title: "Almoxarife",
      company: "Casa de Saúde Santa Maria",
      period: "2023",
      description: [
        "Gestão de alimentos e notas fiscais",
        "Controle de inventário e estoque",
        "Organização de documentação"
      ]
    },
    {
      title: "Jovem Aprendiz",
      company: "Casa de Saúde Santa Maria",
      period: "2021 - 2022",
      description: [
        "Produção de documentos e apoio administrativo",
        "Assistência em tarefas administrativas",
        "Arquivamento e organização de documentos"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="section-container">
          <h2 className="section-title">Experiências Profissionais</h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 relative pl-6 md:pl-0"
          >
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`timeline-item mb-16 md:mb-24 md:w-1/2 md:clear-right ${
                  index % 2 === 0 ? "md:float-left md:pr-12 md:text-right" : "md:float-right md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card card-hover relative"
                >
                  {/* Date pill */}
                  <div className="absolute -top-4 right-4 md:right-auto md:left-4 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <div className="flex flex-col items-start pt-2">
                    <div className="flex items-center mb-2">
                      <Briefcase className="mr-2 text-blue-500" size={20} />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.company}</p>
                    
                    <div className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="mt-1 mr-2 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            
            <div className="clear-both"></div>
          </motion.div>
          
          {/* Current position highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-800/50"
          >
            <div className="flex items-center mb-4">
              <FileText className="mr-3 text-blue-500" size={24} />
              <h3 className="text-xl font-bold">Posição Atual</h3>
            </div>
            <p className="text-gray-300">
              Atualmente sou estagiário na CSN, onde estou aplicando e expandindo meus conhecimentos em automação
              e análise de dados. Trabalho com tecnologias como Power Automate, VBA, Python e Qlik Sense para
              desenvolver soluções que otimizam processos internos e proporcionam insights a partir de dados.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;