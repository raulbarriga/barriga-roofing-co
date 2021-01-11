import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

import formImage from "../assets/images/formImage.jpg";

const FormComponent = () => {
  init("user_ZNljYlzkMvUQiI926og3B");

  const [fadeOut, setFadeOut] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      "first-name": "",
      "last-name": "",
      email: "",
      phone: "",
    },
  });

  const [contactNumber, setContactNumber] = useState("000000");
  //   const generateContactNumber = () => {
  //     const numStr = "000000" + ((Math.random() * 100000) | 0);
  //     setContactNumber(numStr.substring(numStr.length - 6));
  //   };

  const onSubmit = (data, event) => {
    //prevent the browser from reloading every time the submit button is clicked
    event.preventDefault();
    //generateContactNumber();
    //   const templateParams = {
    //     contactNumber: contactNumber
    // };
    //console.log(templateParams)

    //serviceID: contact_form, templateID: template_lnb4p3r, form: #contact-form,
    sendForm("contact_form", "template_lnb4p3r", "#contact-form").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text, contactNumber);
        reset();
        setFadeOut(true);
        console.log("fadeOut: ", fadeOut);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  const onBlurHandler = (e) => {
    const inputHighlight = e.target;

    inputHighlight.style.backgroundColor = "#ff40401a";
    inputHighlight.style.borderWidth = "1px";
    inputHighlight.style.borderColor = "#ff4040";
  };

  return (
    <>
      <section id="form-section" className="form-section">
        <img className="form-img" src={formImage} alt={formImage} />
        <div className="form-title">
          <h2>FREE ESTIMATES</h2>
        </div>
        <div className="form-subtitle">
          <p>SUBMIT YOUR INFORMATION TO REQUEST A FREE ESTIMATE.</p>
        </div>
        <div className="form-container">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="contact_number" value={contactNumber} />
            <div>
              <input
                className="inputs"
                name="first-name"
                type="text"
                ref={register}
                maxLength="100"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                className="inputs"
                name="last-name"
                type="text"
                ref={register}
                maxLength="100"
                placeholder="Last Name"
              />
            </div>
            <div onBlur={onBlurHandler}>
              <input
                className="inputs"
                name="email"
                type="email"
                ref={register({ required: true })}
                maxLength="250"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="inputs"
                name="phone"
                type="tel"
                ref={register}
                maxLength="50"
                placeholder="Phone"
              />
            </div>
            <div className="textArea">
              <textarea
                className="inputs"
                name="message"
                ref={register}
                placeholder="Comments"
              ></textarea>
            </div>
            <div className="btn">
              <button type="submit" value="Send">
                SUBMIT
              </button>
            </div>
            <div
              className={`btn-msg ${fadeOut ? "fadeOut" : ""}`}
              onAnimationEnd={() => {
                console.log("Animation ended");
                setFadeOut(false);
                console.log("fadeOut: ", fadeOut);
              }}
            >
              <p>Thanks for submitting!</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormComponent;
