import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Sellpoint from '../components/Sellpoint';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Teams from '../components/Teams';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <Sellpoint />
        <Portfolio/>
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="teams">
        <Teams />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
