import React from 'react';
import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            La croix venmo pour-over sustainable vaporware everyday carry paleo
            gastropub selvage lumbersexual aesthetic sriracha grailed. Sriracha
            vape raw denim man bun gatekeep helvetica sustainable aesthetic
            normcore affogato. Microdosing sustainable affogato, copper mug raw
            denim DIY glossier.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
