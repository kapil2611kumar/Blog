import React from 'react'
import { heading } from '../style/homeStyle'
import { motion } from 'framer-motion'

const Heading = () => <motion.h1 style ={heading} initial={{x:-200,opacity:0}} animate={{x:0 ,opacity:1}} 
transition ={{duration :2}}>  
THE BLOG </motion.h1>

export default Heading 