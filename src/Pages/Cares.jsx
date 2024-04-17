import React from "react";
import { Card } from "../Components";
import 'aos/dist/aos.css';


export const Cares = () => {
  return (
    <section  data-aos="fade-up" id="cares">
      <div className="cares">
        <h2>
          Metalogic Cares For <br /> You
        </h2>

        <p className="line">
          We're less about valuing perks and more about valuing people. Our
          employee benefits are built around enhancing your wellbeing - at work
          and at home
        </p>
      </div>
      <div className="cares-card">
        <div className="bonus">
          <Card img="bonus.png" body="Performance Bonus" />
        </div>
        <div className="health">
          <Card img="health.png" body="Health Benefits" />
        </div>
        <div className="paid">
          <Card img="paid.png" body="Paid Leave Policy" />
        </div>
        <div className="learning">
          <Card img="learning.png" body="Learning And Development" />
        </div>
        <div className="food">
          <Card img="food.png" body="Food Credit" />
        </div>
        <div className="team">
          <Card img="team.png" body="Team Activities" />
        </div>
      </div>
    </section>
  );
};
