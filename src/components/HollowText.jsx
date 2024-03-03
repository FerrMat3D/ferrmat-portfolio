import React from 'react';
import { motion } from 'framer-motion';

const HollowText = ({ text, color, size, fadefade }) => {

  const textStyle = {
    WebkitTextStroke: color,
    WebkitTextStrokeWidth: '2px',
  };

  return (
    <motion.h1
      className={`text-${size} cursor-pointer uppercase font-bold `}
      style={textStyle}
      initial={{
        WebkitTextFillColor: fadefade ? '#000000' : '#f3f4f6' // Estado inicial
      }}
      animate={{
        WebkitTextFillColor: fadefade ? '#f3f4f6' : '#000000' // Estado final
      }}
      transition={{ duration: fadefade ? 0.5 : 1, ease: "easeIn" }} // Transição suave
    >
      {text}
    </motion.h1>
  );
};

export default HollowText;
