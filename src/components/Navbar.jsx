import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './css/Navbar.css';

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef();
  const menuRef = useRef();

  useGSAP(() => {
    // Basic reveal: Slides the "shutter" down
    gsap.to(menuRef.current, { 
      clipPath: isOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', 
      duration: 0.5,
      ease: "power2.inOut"
    });
  }, { dependencies: [isOpen], scope: container });

  return (
    <header className="main-header" ref={container}>
      <nav className="nav-container">
        <div className="logo-wrapper">
          {/* Ensure this path is correct or use a text logo for testing */}
          <img className='logo' src='src/assets/Frame 1.png' alt="Logo" />
        </div>
        
        <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'CLOSE' : 'MENU'}<div className='dot'></div>
        </button>

        <div ref={menuRef} className="mobile-overlay" style={{ pointerEvents: isOpen ? 'all' : 'none' }}>
          <ul className="menu-links">
            <li><a href="#work" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Join</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;