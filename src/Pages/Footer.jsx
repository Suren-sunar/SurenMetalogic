import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="company">
          <h2>Metalogic</h2>
          <p>Software Private Limited</p>
          <p>
            <CiLocationOn /> Saptakhel, Lalitpur (Head office)
          </p>

          <p>
            <MdCall /> +977 9851353599
          </p>
          <p>
            <HiOutlineMail /> info@metalogic.com.np
          </p>
        </div>
        <div className="links">
          <div className="column">
            <h3>Company</h3>
            <ul>
              <li>Feedback</li>
              <li>Partnership</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="column">
            <h3>Services</h3>
            <ul>
              <li>Custom Software Development</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Computing Services</li>
              <li>Quality Assurance and Testing</li>
              <li>UI/UX Designing</li>
              <li>Maintenance and Support</li>
              <li>Dev Ops</li>
            </ul>
          </div>
          <div className="column">
            <h3>Join</h3>
            <ul>
              <li>Careers at Metalogic</li>
              <li>Internships</li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <h3>Join us on Social Media</h3>
          <SocialIcon url="www.whatapp.com" />
          <SocialIcon url="www.facebook.com" />
          <SocialIcon url="www.instagram.com" />
          <SocialIcon url="www.linkedin.com" />
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Copyright 2024 MetaLogic. All rights reserved.</p>
      </div>
    </footer>
  );
};
