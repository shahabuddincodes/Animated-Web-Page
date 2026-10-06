import React from 'react'
import {motion} from 'motion/react'

const Rightcontent = () => {
  return (
      <div className="absolute right-16 top-34 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          damping: 10,
          stiffness: 60
        }}
        className="relative"
      >

        {/* Main Glow */}
        <div className="absolute -inset-10 bg-blue-500/30 blur-3xl rounded-full"></div>

        {/* Purple Glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full"></div>

        {/* Image */}
        <motion.div
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-blue-500/40"
        >

          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">

            <img
              src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />

          </div>

        </motion.div>

        {/* Small Decorative Circle */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-blue-800 shadow-lg shadow-blue-500/50"
        />

        {/* Another Decorative Circle */}
        <motion.div
          animate={{
            y: [0, 15, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-5 -left-8 w-6 h-6 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"
        />

      </motion.div>

    </div>
  )
}

export default Rightcontent