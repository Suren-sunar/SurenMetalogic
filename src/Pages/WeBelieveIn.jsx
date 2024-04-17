import React, { useEffect } from "react";
import { Card } from "../Components";
import Aos from "aos";
import 'aos/dist/aos.css';


export const WeBelieveIn = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [onscroll]);
  return (
    <section data-aos="fade-up" id="webelieve ">
      <div className="believe">
        <h2>Values</h2>
        <h1>We Believe in</h1>
        <span className="line">
          We believe in creating an environment where individuals can thrive and
          make a
        </span>
        <p className="line">meaningful impact</p>
      </div>
      <div className="card-collection">
        <div className="learning">
          <Card
            img="continues learning.png"
            body="Continious Learning"
            content="We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey."
          />
        </div>
        <div className="teamwork">
          <Card
            img="teamwork.png"
            body="Team Work"
            content="We believe that best solutions comes from diverse perspective and collaborative efforts."
          />
        </div>
        <div className="innovation">
          <Card
            img="innovation.png"
            body="Innovation"
            content="Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards."
          />
        </div>
        <div className="mentorship">
          <Card
            img="mentorship.png"
            body="Mentorship"
            content="We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement."
          />
        </div>
        <div className="mission">
          <Card
            img="mission.png"
            body="Tangible Impact Impact"
            content="We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey."
          />
        </div>
        <div className="adaptability">
          <Card
            img="tiger.png"
            body="Adaptability"
            content="Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey"
          />
        </div>
      </div>
    </section>
  );
};
