import React from "react"

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  )
}

const NavContent = () => (
  <>
    <h2>Sagar.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact US</a>
    </div>
    <a href="mailto:sagarbalamwar888@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header
