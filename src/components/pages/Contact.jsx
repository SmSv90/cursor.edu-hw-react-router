import React from 'react';
import maleIcon from "../../assets/contactPage/male.png";
import femaleIcon from "../../assets/contactPage/female.png";
import anonIcon from "../../assets/contactPage/anon.png";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="contact-photo"><img src={props.gender === 'male' ? maleIcon : props.gender === 'female' ? femaleIcon : anonIcon} alt="" /></div>
      <div className="contact-name">{props.firstName} {props.lastName}</div>
      <div className="contact-phone">{props.phone}</div>
      <div className="contact-gender">{props.gender}</div>
    </div>
  )
}

export default Contact;