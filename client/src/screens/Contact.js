import React from "react";
import contactus from "../assets/image/contact-us.png";
import Header from "../components/Header";
import Form from "../components/EmailForm";
const Contact = () => {
  return (
    <>
      {/* image */}
      <img src={contactus} alt="picture" width="100%" height="auto" />
      {/* contact info */}
      <div style={{ paddingLeft: "15px" }}>
        <h4>
          <b>BeMo Academic Consulting Inc.</b>
        </h4>

        <h5>
          <span style={{ textDecoration: "underline" }}>Tolll Free:</span>
          <span> 1-855-900-BeMo (2366)</span>
        </h5>
        <h5>
          <span style={{ textDecoration: "underline" }}>Email:</span>
          <span> info@bemoacademicconsulting.com</span>
        </h5>
      </div>
      {/* form */}
      <Form />
    </>
  );
};

export default Contact;
