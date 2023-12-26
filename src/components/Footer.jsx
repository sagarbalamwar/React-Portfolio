import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/95533401?v=4"
          alt="footer"
        />
        <h2>Sagar Balamwar</h2>
        <p>Develop and Debug</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.linkedin.com/in/sagar-balamwar-b6b758228/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/sagarbalamwar" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/sagarbalamwar/" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer
