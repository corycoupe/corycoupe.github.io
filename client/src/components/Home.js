import React from 'react';
import Cards from './Cards';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';

const Home = (props) => {
  return (
    <div className='div'>
      <div className='home'>
        <div className='home-container'>
          <div className='home-container__hero-image'>
            <div className='home-container__text-container'>
              <h1 className='home-container__text-container__header'>
                Cory Coupe
              </h1>
              <h2 className='home-container__text-container__header'>
                Full Stack Web Developer
              </h2>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Cards />
      <Contact />
    </div>
  );
};

export default Home;
