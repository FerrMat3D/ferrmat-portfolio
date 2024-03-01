import React from 'react';

const HollowText = ({ text, color }) => {
  const textStyle = {
    WebkitTextFillColor: 'transparent', // Torna o preenchimento do texto transparente
    WebkitTextStroke: color, // Define a cor da borda do texto
    WebkitTextStrokeWidth: '2px', // Define a largura da borda
  };

  return (
    <h1 className="text-5xl cursor-pointer uppercase font-bold" style={textStyle} >
      {text}
    </h1>
  );
};

export default HollowText;