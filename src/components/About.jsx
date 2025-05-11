import img2 from '../assets/img-2-cropped (2) (1).png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState ,useEffect} from 'react'
export default function About ({isScrolled}) {
    const [tabIndex, setTabIndex] = useState(0);

   return <section className='flex flex-col md:flex-row justify-center bg-header px-5'>
    <div>
        <img className='md:w-1/2 py-4' src={img2} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center font-hero-font'>
        <h1 className='text-4xl  text-white border-b-4 border-[#5653e6] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5 text-white'>Full-Stack Developer with MERN expertise, experienced in building dynamic web applications and responsive UIs using HTML, CSS, JavaScript, and React.js. Proficient in backend development with Node.js and Express.js, and skilled in database management using MongoDB and MySQL. </p>
            <p className='pb-5 text-white'>Familiar with Java for object-oriented programming. Efficient with Git, GitHub, and VS Code, with a passion for performance optimization, user experience, and continuous learning.</p>

            <Tabs className='text-white' selectedIndex={tabIndex} onSelect={(index) => {{setTabIndex(index)};console.log("index",index) }}>
    <TabList className='flex flex-wrap justify-start mb-4 cursor-pointer'>
    <Tab className={`inline-block px-4 hover:bg-white hover:text-black ${tabIndex==0 ? 'border-b-4 border-[#5653e6]':'none'}  `} >Education</Tab>

      <Tab className={`px-4 inline-block  hover:bg-white hover:text-black ${tabIndex==1 ? 'border-b-4 border-[#5653e6]':'none'}`}>Skills</Tab>
      <Tab className={`inline-block px-4 hover:bg-white hover:text-black ${tabIndex==2 ? 'border-b-4 border-[#5653e6]':'none'}  `} >Experience</Tab>
    </TabList>
<div className={` w-full md:w-3/4   px-6 min-h-[400px]`}>
<TabPanel >
  <ul>
  <li>
    <span className='text-[#5653e6]'>2018-2020</span>
    <br />
    Bachelor of Education
    <br />
    Dr.NGP College of Education, Coimbatore
    <br />
    Completed with 88%
  </li>

  <br />
  <ul>
  <li>
    <span className='text-[#5653e6]'>2015-2018</span>
    <br />
    B.Sc Maths with Computer Applications
    <br />
    Dr.NGP Arts and Science College,Coimbatore
    <br />
    Completed with 74%
  </li>
</ul>
<br />
<ul>
  <li>
    <span className='text-[#5653e6]'>2014-2015</span>
    <br />
    HSC
    <br />
    St.Joseph's Mat.hr.sec.School, Tirupur
    <br />
    Completed with 88%
  </li>
</ul>
<br />
<ul>
  <li>
    <span className='text-[#5653e6]' >2012-2013</span>
    <br />
    SSLC
    <br />
    St.Joseph's Mat.hr.sec.School, Tirupur
    <br />
    Completed with 90%
  </li>
</ul>

</ul>

    </TabPanel>
<TabPanel>
    <ul>
    <li>HTML </li>
      <li>CSS </li>
      <li>JAVASCRIPT </li>
      <li>REACT JS </li>
      <li>MONGODB</li>
      <li>NODE JS </li>
      <li>MYSQL</li>
      <li>JAVA </li>
    </ul>
     
    </TabPanel> 

 

    <TabPanel>
    <ul>
    <li>
    <span className='text-[#5653e6]'>2024-To Present</span>
    <br />
    Web Developer
    <br />
    Santhila Databot Pvt Limited ,Erode Tamilnadu
    <br />
       </li>
      
    </ul>
     
    </TabPanel> 

    </div> 
    
    
    
  </Tabs>
        </div>
            
 
            
            </div>
   </section>
   
  

}