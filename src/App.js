import { useState ,useEffect} from 'react'
import './App.css';
import Header from './Header'
import Hero from './components/Hero'
import About from './components/About'
import img from '../src/assets/photo-1484417894907-623942c8ee29.jpeg'
import Services from '../src/components/Services'
function App() {

  const [isScrolled,setIsScrolled]=useState(false);

//   useEffect(()=>{
//   const handleScroll =()=>
//   {
//        if(window.scrollY >0 )
//        {
//             setIsScrolled(true);
//   console.log("Scrolling-1",isScrolled)
//        }
//        else{
//             setIsScrolled(false)
//        }
  
//   }
//   window.addEventListener('scroll',handleScroll);
  
//   return()=>
//   {
//        window.removeEventListener('scroll',handleScroll)
//   }
//   },[])

useEffect(() => {
     const handleScroll = () => {
       const scrollY = window.scrollY;
       setIsScrolled(scrollY > 0);
     };
 
     window.addEventListener('scroll', handleScroll);
 
     // Cleanup
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

   useEffect(() => {
     console.log("isScrolled changed:", isScrolled);
   }, [isScrolled]);
   
  return (
    <div className="app">
     <Header isScrolled={isScrolled}/>
     <Hero /> 
   <About/>
   <Services/>
    </div>
  );
}

export default App;
