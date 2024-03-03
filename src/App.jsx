import { Header } from './components';
import ListaProjetos from './components/ListaProjetos';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function App() {


  const controls = useAnimation();

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


      <div className='flex justify-items-end justify-end'>

<div className="w-[20%] ">

</div>

  <motion.div className="mr-4 w-[80%]"
  style={{ position: "relative" }} // necessário para animação de rolagem suave
  animate={controls}>



  <ListaProjetos/>

  
  </motion.div>


</div>

    </div>
  )
}
