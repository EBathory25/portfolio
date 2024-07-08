import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';




function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  const logo = '/images/logomed.png'

  useEffect(()=>{
    const handleScroll = () =>{
        window.scrollY > 50 ? setIsScrolled(true): setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () =>{
        window.removeEventListener('scroll',handleScroll)
    }
  },[])


  return (
    <header className={`header-main z-40 w-full fixed bg-dark-blue  text-bright-yellow h-24 ${isScrolled ? 'header-main':'header-scrolled'} ${isOpen? 'menu-open':'menu-close'}`}>
      <div className="container  mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <img src={logo}  className={`logo transition-all duration-300 ${isScrolled ? 'logo-scrolled' : ''}`} alt="portfolio-logo"/>
        </div>
        <nav className="hidden md:flex text-xl space-x-8">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline py-4 ">
            About
          </Link>
          <Link to="main" smooth={true} duration={500} className="cursor-pointer hover:underline py-4 ">
            Welcome
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline py-4">
            Contact
          </Link>
          <Link to="knowledge" smooth={true} duration={500} className="cursor-pointer hover:underline py-4">
            Knowledge
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden flex flex-col align-center items-center text-center">
           <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline py-4 menu-item">
            About
          </Link>
          <Link to="main" smooth={true} duration={500} className="cursor-pointer hover:underline py-4 menu-item">
            Welcome
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline py-4 menu-item">
            Contact
          </Link>
          <Link to="knowledge" smooth={true} duration={500} className="cursor-pointer hover:underline py-4 menu-item">
            Knowledge
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;