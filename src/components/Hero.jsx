import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './css/Hero.css'

const Hero = () => {
  const container = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Initial State for the image (Scale it up and hide it)
    gsap.set(".hero-img", { scale: 1.5, opacity: 0 });

    // 2. Animate text reveal
    tl.from(".hero-line span", {
      y: 150,
      skewY: 10,
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out",
    })
    // 3. Reveal the image (Zoom out effect)
    .to(".hero-img", {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "expo.out"
    }, "-=1.2") // Start slightly before text finishes
    // 4. Fade in footer text
    .from(".hero-copy", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    }, "-=1");

    // 5. Subtle floating animation for the image (Infinite loop)
    gsap.to(".hero-img", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <section className="hero-section" ref={container}>
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="hero-line"><span>Helping</span></h1>
          <h1 className="hero-line"><span>Developers</span></h1>
          <h1 className="hero-line italic"><span>Worldwide.</span></h1>
        </div>
        
        <div className="hero-footer">
          <p className="hero-copy">
           A platform built for helping Developers.
          </p>
        </div>
      </div>
      
        <img className='hero-img' src='src/assets/9315312.jpg' alt="Hero Visual" />

    </section>
  );
};

export default Hero;