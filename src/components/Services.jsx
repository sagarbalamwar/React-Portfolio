import { motion } from "framer-motion"
import { AiFillIeCircle, AiFillAndroid } from "react-icons/ai"
const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
      opacity: 0,
      y: "-100%",
    },
    three: {
      opacity: 0,
      x: "100%",
    },
  }

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillAndroid />
          <span>Software Development</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.1,
          }}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.three}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillIeCircle />
          <span>UI/UX Design</span>
        </motion.div>
      </section>
    </div>
  )
}

export default Services
