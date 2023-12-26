import React from "react"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import img from "../assets/dev.webp"
const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  }
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Sagar Balamwar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:sagarbalamwar888@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={img} alt="me" />
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home
