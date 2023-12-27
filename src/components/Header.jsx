/* eslint-disable react/prop-types */

import { AiOutlineMenu } from "react-icons/ai"
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
        </button>
      </nav>
    </>
  )
}

export const HeaderPhone = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  )
}

export const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Sagar.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact US
      </a>
    </div>
    <a href="mailto:sagarbalamwar888@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header
