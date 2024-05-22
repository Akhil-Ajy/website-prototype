import '../pages/ContactUs.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l9e5wir', 'template_06ipigi', form.current, {
        publicKey: 'SxssFq70kGHUsklj0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        alert("Email Sent To Client")
      );
  };
    return (
      <div className='contactus-wrapper'>
        <form ref={form} onSubmit={sendEmail}>
        <div className="contactus-container">
            <h1 className="contactus-titles"> Contact US</h1>
        <div className="contactus-items">
            <div className="contactus-form">
                <h1 className="contactus-titles">Online Inquiry</h1>
                <input type='text' placeholder="name" name="user_name" ></input>
                <input type='email' placeholder="email" name="user_email"></input>
                <input type='tel' placeholder="phone number" name="user_phone"></input>
                <input type="message" placeholder="message" name="message"></input>
                <button type='submit' value= "Send">Submit</button>
            </div>
            <div className="contactus-details">
                <h1 className="contactus-titles">Contact Details</h1>
                <h1 className="contactus-detail" >Tomy Sebastian</h1>
                <h1 className="contactus-detail">+91 9845538087</h1>
                <h1 className="contactus-detail">No.72,"GIFT",4th Cross,Near Om shakthi Temple, Horamavu Post,Bengaluru - 560043</h1>
                <h1 className="contactus-detail">atomengineers.tom@gmail.com</h1>
            </div>
        </div>
        </div>
        </form>
        </div>
    );
}

