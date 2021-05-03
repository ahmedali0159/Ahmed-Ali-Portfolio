import React from "react";
import ContactItem from "../components/ContactItem";
import Title from "../components/Title";

function Contact() {
  return (
    <div>
      <div className="contact">
        <Title title={"Contact"} span={"Get in touch"} />
        <ContactItem/>
      </div>
    
    </div>
  );
}

export default Contact;
