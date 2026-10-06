import { motion, useScroll } from "motion/react";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";

function App() {
  const {scrollYProgress}=useScroll()
  return (
    <div>
      
     <motion.div 
     style={{
      scaleX:scrollYProgress
     }}
     className="origin-left w-full h-2 bg-red-600 fixed"/>
      <div  className="bg-[#0B0F19]">
        <HomePage />
        <Contact />

      </div>







      {/* <motion.div
      initial={{ x: 0 }}
      animate={{ x: 800 }}
      transition={{ duration: 3,
        ease:'easeIn'
       }}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "green",
      }}
      
    />
    <motion.h1
  initial={{ color: "#ff0000" }}
  animate={{ color: "#020202" }}
  transition={{ duration: 3, repeat:Infinity
   }}

>
  Hello SHAHAB
</motion.h1>

<motion.button>
  click here
</motion.button>
<motion.div
style={{width:'50px', height:'50px', border: "2px solid #ff0000" }}
  // className="w-10 h-10 rounded-full border-4 border-blue-500"
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  }}
/> */}



    </div>




  );
}

export default App;