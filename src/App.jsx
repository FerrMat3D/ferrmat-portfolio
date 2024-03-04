import { Header } from './components';
import ListaProjetos from './components/ListaProjetos';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { GreekStatue } from './GLTFComponents/GreekStatue';


import { GlitchMode } from 'postprocessing'
import { Glitch, EffectComposer } from "@react-three/postprocessing";



export default function App() {



  const controls = useAnimation();
  const orbitControls = useRef(); // Referência para os controles de órbita

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        y: -scrollY,
        transition: { type: 'spring', stiffness: 500, damping: 200 }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);


  return (
    <div className='bg-gray-100 py-8 quantico-regular'>
      <div className='container mx-auto px-xl'>
        <Header />
      </div>


      <div className='flex justify-items-end justify-end h-fit '>
  <div className="w-[50%] bg-gray-100">
    <Canvas className='bg-gray-100'>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.5}/>
      <GreekStatue position={[50, 0, 0]} rotation={[0, 0, 0]} />
      <EffectComposer>
      <Glitch
    delay={[1.5, 10]} // min and max glitch delay
    duration={[0.2, 1.0]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  />
</EffectComposer>

      <OrbitControls
      ref={orbitControls}
      enableDamping
      dampingFactor={0.1} // Experimente diferentes valores aqui
      rotateSpeed={0.5}
    />

    </Canvas>
  </div>
  <motion.div className="mr-4 w-[100%]" style={{ position: "relative", zIndex: 1 }} animate={controls}>
    <ListaProjetos/>
  </motion.div>
</div>

    </div>
  )
}