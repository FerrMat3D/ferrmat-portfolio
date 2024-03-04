import { Header } from './components';
import ListaProjetos from './components/ListaProjetos';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState  } from "react";
import { Canvas  } from '@react-three/fiber';
import { Box, PerspectiveCamera } from '@react-three/drei';
import { GreekStatue } from './GLTFComponents/GreekStatue';


import { GlitchMode } from 'postprocessing'
import { Glitch, EffectComposer } from "@react-three/postprocessing";



export default function App() {



  const controls = useAnimation();

  const controlsleft = useAnimation();
 // const orbitControls = useRef(); // Referência para os controles de órbita

 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        y: -scrollY,
        transition: { type: 'spring', stiffness: 500, damping: 200 }
      });
    };

    const handleScrollleft = () => {
      const scrollY = window.scrollY;
      controlsleft.start({
        y: scrollY,
        transition: { type: 'spring', stiffness: 100, damping: 50 }
      });
    };


    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollleft);
    window.addEventListener('mousemove', handleMouseMove);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollleft);
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, [controls, controlsleft]);


  return (
    <div className='bg-gray-100 py-8 quantico-regular'>
      <div className='container mx-auto px-xl'>
        <Header />
      </div>


      <div className='flex justify-items-end justify-end '>
  <motion.div className="w-[80%] bg-gray-100" animate={controlsleft}>


    <Canvas className='bg-gray-100'>
    <PerspectiveCamera 
              makeDefault // Defina a câmera como padrão
              position={[0, 0, 300]} // Defina a posição inicial da câmera
              fov={75} // Defina o campo de visão
              aspect={window.innerWidth / window.innerHeight} // Defina a proporção da tela
              near={0.1} // Defina o plano de corte próximo
              far={1000} // Defina o plano de corte distante
            />


      <GreekStatue position={[0, -50, -50]} rotation={[(mousePosition.y -0.02 * Math.PI /4) /2 , (mousePosition.x -0.2* Math.PI ) , (mousePosition.y * -Math.PI /5)/4]} />
      <EffectComposer>


      <Glitch
    delay={[0.1, 1]} // min and max glitch delay
    duration={[0.1, 0.5]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  />
</EffectComposer>



    </Canvas>
  </motion.div>


  <motion.div className="mr-4 ml-auto w-[125%]" style={{ position: "relative", zIndex: 1 }} animate={controls}>
    <ListaProjetos/>
  </motion.div>
</div>

    </div>
  )
}