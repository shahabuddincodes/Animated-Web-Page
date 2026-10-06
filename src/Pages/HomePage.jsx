import React from 'react'
import {motion} from 'motion/react'
import NavBar from '../Components/NavBar'
import Leftcontent from '../Components/Leftcontent'
import Rightcontent from '../Components/Rightcontent'

const HomePage = () => {
  return (
    <div className='h-screen '>
        <NavBar/>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default HomePage