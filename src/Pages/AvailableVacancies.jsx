import React from "react";
import { FaSearch } from "react-icons/fa";
import 'aos/dist/aos.css';



export const AvailableVacancies = () => {
  return (
    <section data-aos="fade-up" id="available-vacancies" className="available-vacancies">
       <div className="available">
        <h3>Opportunities</h3>
      <h2>Available Vacancies</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Job Title/Keyword" />
        
           </div>
           <div className="search-bar">
           <input list="levels" id="levelInput" placeholder="Level" readonly/>
<datalist id="levels">
  <option value="Internships"/>
  <option value="Junior Level"/>
  <option value="Mid Level"/>
  <option value="Senior"/>
</datalist>

 <button className="search-button"><FaSearch className="search-icon" /></button>
 </div>
  <div className="totalvacancy">
  2 Job Offers
  </div>
      <div className="job-offers">
        <div className="job-offer">
          <h3>Frontend Intern (MERN Stack)</h3>
          <p>Full Time</p>
          <p>Lalitpur, Kathmandu</p>
          <button className="closed-button">Closed</button>
        </div>
        <p className="applicants">(219 applicants)</p>
        <div className="job-offer">
          <h3>Marketing Executive</h3>
          <p>Full Time</p>
          <p>Nepal (with potential for international travel)</p>
          <button className="apply-button">Apply</button>
        </div>
          <p className="applicants">(2 applicants)</p>
      </div>
    </section>
  );
};
