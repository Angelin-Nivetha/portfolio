import img3 from '../assets/background.jpg'
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin ,AiOutlineGithub, AiOutlineInstagram  } from "react-icons/ai";
import Typical from 'react-typical'

export default function Header ({isScrolled}) {

    
return <section className='relative min-h-screen flex flex-col md:flex-row px-5 py-32 bg-header justify-center '>
  
  {/* <div className='top-0 w-full z-50 opacity-35 bg-black '> */}

 
    <div className='md:w-1/2 flex flex-col'>
    <h1 className=' text-white text-4xl font-hero-font'>
        Hi, <br/>
        I am Angelin Nivetha
        <p className='text-2xl' > 
        <Typical
        steps={['I am Full-Stack Developer',1500,'',1500]}
        loop={Infinity}
      wrapper="span"
      /> </p>
    </h1>
    <div className='flex py-10'>
        <a href="#" className='pr-5 text-blue-500 hover:text-white'><AiOutlineFacebook  size={40}/></a>
        <a href="#" className='pr-5 text-[#0A66C2] hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a href="#" className='pr-5 text-[#E4405F] hover:text-white'><AiOutlineInstagram  size={40} /></a>
        <a href="#" className='text-[#8b5cf6] hover:text-white'><AiOutlineGithub size={40} /></a>
       
    </div>
    </div>
    {/* </div> */}
    {/* <img className='md:w-1/3' src={img3}/> */}
</section>
}