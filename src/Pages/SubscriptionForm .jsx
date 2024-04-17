import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setValidEmail(false);
    } else {
      alert(`Welcome to Our Community!

        Thank you for subscribing to our newsletter. Get ready for exclusive updates, offers, and more! 🎉`);

      setEmail("");
    }
  };

  return (
    <div className="subscription-container" id="subscription-container">
      <h2>Subscribe to our Newsletters</h2>
      <p>
        Stay informed, inspired, and equipped with the latest trends and
        breakthroughs in your field.
      </p>
      <form onSubmit={handleSubmit} className="subscription-form">
        <input
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="Please Enter Your Email"
          className={`email-input ${validEmail ? "" : "invalid"}`}
        />
        {!validEmail && (
          <p className="error-message">Please enter a valid email address.</p>
        )}
        <button type="submit" className="subscribe-button">
        <HiOutlineMail />  Subscribe
        </button>
      </form>
    </div>
  );
};
