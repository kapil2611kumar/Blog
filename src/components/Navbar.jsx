import React from 'react'
import {colors, icons} from "../style/global";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { links, logo, navbar, signs,icon } from '../style/homeStyle';

function Navbar() {
  return (
    <motion.nav style ={navbar} initial ={{y:-50,opacity:0}}
     animate={{y:0,opacity:1}} transition={{duration:2}}>
        <motion.div style={logo}   initial ={{y:-50,opacity:0}}
     animate={{y:0,opacity:1}} transition={{duration:1,delay:1}}>
            <h1>D</h1>
        </motion.div>

        <motion.div style={links}  initial ={{y:-50,opacity:0}}
     animate={{y:0,opacity:1}} transition={{duration:1,delay:2}}>
         <Link to ="/" style ={{color:colors.text,textDecoration:"none"}}> <span className="link">Home</span> </Link>
         <Link to ="/create" style ={{color:colors.text,textDecoration:"none"}}> <span className="link">Create a Blog</span></Link>
        </motion.div>

        <div style={signs}>
            <span style={ icon}>{icons.twitter}</span>
            <span style= {icon}>{icons.insta}</span>
            <span style={ icon}>{icons.blogIcon}</span>
        </div>
    </motion.nav>
  )
}

export default Navbar