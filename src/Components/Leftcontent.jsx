import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'


const Leftcontent = () => {
  const text = 'Welcome to My Website';

  const [click, setclick] = useState(false)
  const [open, setOpen] = useState(true);

  function remove() {
    setclick(!click)
    console.log(click)
  }


  return (
    <>
      <AnimatePresence>
        {click && (
          // <motion.div
          //   initial={{ opacity: 0, scale: 0.8 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   exit={{ opacity: 0, scale: 0.8 }}
          // >
          //   Modal
          // </motion.div>
          <motion.div
            initial={{
              x: -1000
            }}
            animate={{
              x: -230
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              type: 'spring',
              damping: 6,
              stiffness: 30
            }}
            exit={{
              x: -1000
            }}
            className="bg-gray-900 w-[60%] text-right p-6 top-40 h-80 absolute  border border-gray-900 rounded-xl shadow-md">

            <motion.h2
              initial={{ width: 0 }}
              whileInView={{ width: `${text.length - 1.4}ch` }}
              transition={{
                duration: 3,
                repeatType: 'reverse', repeat: Infinity, ease: `steps(${text.length})`,
              }} className="relative left-100 text-2xl  font-bold text-white mb-3 overflow-hidden whitespace-nowrap" > {text} </motion.h2>

            <p className=" text-white leading-relaxed mb-5">
              Build modern and responsive websites using React and Tailwind CSS. <br />
              Create beautiful interfaces with simple and reusable components.
            </p>


          </motion.div>
        )}



      </AnimatePresence >
      <button
        onClick={remove}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
      <button
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() =>
        {
          
          setOpen(!open)
          console.log(open);
          
        }
        } 
        >
        Projects
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
          className='text-white absolute left-30 leading-8 mt-2 rounded-2xl p-1'
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundColor:'blue',
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
          >
            <p>React Project</p>
            <p>Redux Project</p>
            <p>Portfolio</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}

export default Leftcontent