import React, { useEffect } from "react";
import anime from "animejs";
import plantImage from "../assets/plant2.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Aboutus } from "./Aboutus";
import { Plants } from "./Plants";
import { Contactus } from "./Contactus";

export const Home = () => {
  useEffect(() => {

    const handleScroll = () => {
      const hometext = document.querySelector('.text-container');
      const rect = hometext.getBoundingClientRect();
      
      
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        anime({
          targets: '.text-container',
          translateY: [50, 0], 
       
          easing: 'easeOutQuad',
          duration: 1000, 
        });
      }
    };

    handleScroll();

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="content" id="home">
        <div className="text-container">
          <h1 className="hometext">Bring your next plant home</h1>
          <h6 className="text1">
            Find your dream plant for your home decoration with us, and we will
            make it happen
          </h6>
        </div>
        <img src={plantImage} className="plt1" alt="Plant" />
      </div>
      <br />
      <Plants />
      <br />
      <Aboutus />
      <br />
      <hr />
      <Contactus />
      <Footer />
    </>
  );
};
