import { Header } from './components';
import ListaProjetos from './components/ListaProjetos';


export default function App() {

  return (
    <div className='bg-gray-100 py-8 quantico-regular'>
      <div className='container mx-auto px-xl'>
        <Header />
      </div>


      <div className='flex justify-items-end justify-end'>

<div className="w-[20%] ">

</div>

  <div className="mr-4 w-[80%]">



  <ListaProjetos/>

  
  </div>


</div>

    </div>
  )
}
