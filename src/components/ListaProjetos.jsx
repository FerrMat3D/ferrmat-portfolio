import React, { useState } from 'react';
import HollowText from './HollowText';

const ListaProjetos = () => {
  const [hoveredItems, setHoveredItems] = useState({});

  const handleHover = (index) => {
    setHoveredItems((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHoveredItems((prev) => ({ ...prev, [index]: false }));
  };

  const projetos = [
    { id: 1, nome: "* Gas-Station", ano: 2023 },
    { id: 2, nome: "* Portifolio Website", ano: 2024 },
    { id: 3, nome: "* Projeto Projetos", ano: 2020 },
    { id: 4, nome: "* Menino de Vó", ano: 2022 },
    { id: 5, nome: "* #ThreeJS Game", ano: 2028 },
    { id: 6, nome: "* POPOPó", ano: 2025 },
    { id: 7, nome: "* SEIOQUELA", ano: 2026 },

    // Adicione mais objetos aqui conforme necessário
  ];

  return (
    <div className='relative inline-block cursor-pointer'>
    <ul className="perspective space-y-4">
      {projetos.map((projeto) => (
        <li
          key={projeto.id}
          onMouseEnter={() => handleHover(projeto.id)}
          onMouseLeave={() => handleMouseLeave(projeto.id)}
          className='text-right'
        >
          <div className='inline-block'>
            <p className="year flex text-left text-4xl text-blue-500">{projeto.ano}</p> 
            {hoveredItems[projeto.id] ? (
              <HollowText text={<span dangerouslySetInnerHTML={{ __html: projeto.nome }} />} color="black" size="9xl" fadefade={true}/>
            ) : (
              <h1 className='text-9xl font-bold uppercase'><HollowText text={<span dangerouslySetInnerHTML={{ __html: projeto.nome }} />} color="black" size="9xl" fadefade={false}/></h1>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ListaProjetos;
