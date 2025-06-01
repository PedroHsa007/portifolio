//import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="section-container flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/20">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEWC91FAV0XkA/profile-displayphoto-shrink_800_800/B4DZayJKWdHsAg-/0/1746745472652?e=1754524800&v=beta&t=RgdtPnaUH8SyAZ2xCoW0-yJHHRSTxMDwJLNduzJCIAo"
                  alt="Pedro Henrique"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-gray-800 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-blue-500 font-bold">24 anos</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Olá, eu sou</span>
              <span className="text-blue-500 block">Pedro Henrique Oliveira de Sá</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              "Estudante de Sistemas de Informação apaixonado por tecnologia e inovação."
            </p>
            <p className="text-gray-400 mb-8">
              Tenho 24 anos e estou construindo minha carreira no mundo da tecnologia. Sou apaixonado por Analise dados e Suporte tecnico. Tenho grande facilidade de aprendizado, trabalho em equipe, proatividade, assíduo, pontual.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/skills">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  Minhas Habilidades
                  <ChevronRight size={18} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-gray-800 text-blue-500 font-bold py-3 px-6 border border-blue-500 rounded-lg shadow-lg"
                >
                  Entrar em Contato
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </PageTransition>
  );
};

export default Home;