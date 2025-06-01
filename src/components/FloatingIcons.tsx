//import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const FloatingIcons = () => {
  const icons = [
    { 
      icon: <FaWhatsapp size={20} />, 
      href: 'https://wa.me/+5524999486640',
      color: 'hover:bg-green-600' 
    },
    { 
      icon: <FaInstagram size={20} />, 
      href: 'https://instagram.com/dev_pedroh',
      color: 'hover:bg-pink-600' 
    },
    { 
      icon: <FaFacebook size={20} />, 
      href: 'https://facebook.com/',
      color: 'hover:bg-blue-600' 
    },
    { 
      icon: <FaEnvelope size={20} />, 
      href: 'mailto:pedrohenrisa21@gmail.com',
      color: 'hover:bg-red-600' 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="floating-icons hidden lg:flex"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {icons.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-icon ${social.color}`}
          variants={item}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingIcons;