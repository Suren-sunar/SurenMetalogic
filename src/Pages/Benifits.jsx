import React from "react";
import { Card } from "../Components";
import 'aos/dist/aos.css';


export const Benifits = () => {
  return (
    <section data-aos="fade-up" id="benifits">
      <div className="believe">
        <h2>Benifits </h2>
        <h1> Life At MetaLogic</h1>
      </div>
      <div className="card-benefits">
        <div className="flexibility">
          <Card
            img="flexibility.png"
            body="Flexibility at work"
            content="Do your best work at a time and place that fits us and your work-life balance."
          />
        </div>
        <div className="ownership">
          <Card
            img="ownership.png"
            body="Take Ownership"
            content="Take responsibility to solve customer challenges by acting as your own boss."
          />
        </div>
        <div className="unlimited">
          <Card
            img="unlimited.png"
            body="Unlimited Growth"
            content="With no inner circle. absolutely everyone has the same opportunity to thrive."
          />
        </div>
        <div className="heard">
          <Card
            img="heard.png"
            body="Make Yourself Heard"
            content="We encourage diverse perspectives - making it count in achieving our collective goals."
          />
        </div>
        <div className="spirit">
          <Card
            img="sprite.png"
            body="Team Spirit
"
            content="Come together, work as one – this is at the heart of how we work, achieve results and collaborate."
          />
        </div>
        <div className="inclusivity">
          <Card
            img="heard.png"
            body="Inclusivity at Work"
            content="We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions"
          />
        </div>
        <div className="transparent">
          <Card
            img="Transparent.png"
            body="Transparent Environment"
            content="Build confidence in a culture of trust and open communication - with each other and our clients."
          />
        </div>
        <div className="fuel">
          <Card
            img="fuel.png"
            body="Fuel Your Passion"
            content="We encourage you to strive, push the limits and achieve your dreams by being best you can be.

         "
          />
        </div>
      </div>
    </section>
  );
};
