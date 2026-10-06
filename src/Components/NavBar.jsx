import React from 'react'
import {motion} from 'motion/react'


const NavBar = () => {
  return (
    <motion.nav className="w-full  text-white border-b  border-gray-200">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
    
         className="text-2xl font-bold">
          MyLogo
        </motion.div>

        {/* Navigation Links */}
        <motion.div
        initial={{
            y:-50
        }}
        animate={{
            y:0
        }}
        transition={{type:'spring' , damping:7}}
         className="flex items-center gap-8 text-white">
          <a
            href="#"
            className="font-bold hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#HomePage.jsx"
            className="font-bold hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#"
            className="font-bold hover:text-blue-600 transition"
          >
            Services
          </a>

          <a
            href="#"
            className="font-bold hover:text-blue-600 transition"
          >
            Contact
          </a>
        
        </motion.div>

        {/* Button */}
        <button className="px-5  font-extrabold py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

      </motion.div>
    </motion.nav>
  )
}

export default NavBar