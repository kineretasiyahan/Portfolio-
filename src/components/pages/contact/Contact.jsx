import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hwiw9iq",
        "template_fqmb4bi",
        form.current,
        "FBwsgrYCze1Qr-mFN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Let's be in touch </h1>
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name"></input>
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
              ></input>
              <input type="text" placeholder="Email" name="user_email"></input>
              <textarea
                rows={5}
                placeholder="Message"
                name="message"
              ></textarea>
              <button className="contact-btn">Submit</button>
              <p>{done ? "Thank You" : ""}</p>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-footer"></div>
    </div>
  );
};

export default Contact;
