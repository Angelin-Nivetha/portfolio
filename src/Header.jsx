import { Bars3Icon } from '@heroicons/react/24/solid'
import { xmarkIcon } from '@heroicons/react/24/solid'
import { useState ,useEffect} from 'react'


export default function Header ({isScrolled}) {
   const [toggle,setToggle]=useState(false);


   console.log("Scrolling-received",isScrolled)



return <header className={`fixed top-0 w-full z-50 flex justify-between px-5  py-3  ${isScrolled? 'bg-secondary': 'bg-header'}`}>
<a href='#' className="font-bold text-white"> Nivetha </a>
<nav className="hidden md:block">
<ul className="flex text-white">
     <li><a href="#">Home</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Projects</a></li>
     <li><a href="#"></a>Contact</li>

</ul>
</nav>

{toggle &&  <nav className="block md:hidden">
<ul className="flex flex-col  text-white mobile-nav">
<button><xmarkIcon/></button>

     <li><a href="#">Home</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Projects</a></li>
     <li><a href="#"></a>Contact</li>

</ul>
</nav>
}

<button className='block md:hidden' onClick={()=>setToggle(!toggle)}><Bars3Icon className='text-white h-5'/> </button>
   </header>
      
 

    };


