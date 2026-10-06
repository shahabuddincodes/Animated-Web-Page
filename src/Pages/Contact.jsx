import React from 'react'
import {motion} from 'motion/react'

const Contact = () => {
  return (
    <motion.section
    
     className="min-h-screen  text-white px-6 py-20">
        

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
         initial={{ x:-600 }}
          whileInView={{x: 20 }}
          transition={{ duration:1,  type:'spring', damping:30 }}
        className="mb-14">
          <p className="text-blue-500 font-medium mb-3">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Let's work together.
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl">
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </motion.div>


        {/* Contact Content */}
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2, ease:'easeOut'}}
         className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Contact Information
            </h2>

            <div className="space-y-7">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="text-white mt-1">
                    shahab@example.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <p className="text-white mt-1">
                    +92 300 1234567
                  </p>
                </div>

              </div>


              {/* Location */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p className="text-white mt-1">
                    Peshawar, Pakistan
                  </p>
                </div>

              </div>

            </div>


            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-800">

              <p className="text-gray-400 mb-4">
                Follow me
              </p>

              <div className="flex gap-3">

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  in
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  Git
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  X
                </a>

              </div>

            </div>

          </div>


          {/* Right Side - Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Send me a message
            </h2>

            <div className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project discussion"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition resize-none"
                />
              </div>


              {/* Button */}
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
                Send Message
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </motion.section>
  )
}

export default Contact