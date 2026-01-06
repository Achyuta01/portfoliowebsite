// last seen the project video 01 : 50 : 24
import React from 'react';
import "./Contact.css";
import message from "./messgae.png";
import email from "./email.png";
import phone from "./phone.png";
import location from "./location.png";
import arrow from "./arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c7ea91cb-8ea8-4477-b7f6-debaa2dd3fec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
          <li> <img src={email} alt="" />achyutanandajena456@gmail.com</li>
          <li> <img src={phone} alt="" />8260812016</li>
          <li> <img src={location} alt="" />77 Cuttack, Athgarh<br/> MA, 02139, India</li>
        </ul>
      </div>
      <div className="cotact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </>
  );
};

export default Contact;
