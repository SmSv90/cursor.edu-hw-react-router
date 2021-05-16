import React from 'react';
import maleIcon from "../../assets/contactPage/male.png";
import femaleIcon from "../../assets/contactPage/female.png";
import anonIcon from "../../assets/contactPage/anon.png";

export const ContactInfo = (props) => {
  return (
    <div className="contact">
    <div className="contact-photo">
      <img src={props.gender === 'male' ? maleIcon : props.gender === 'female' ? femaleIcon : anonIcon} alt="" />
    </div>
    <div className="contact-name"><span>Name:</span><br/> {props.firstName} {props.lastName}</div>
    <div className="contact-phone"><span>Phone:</span><br/> {props.phone}</div>
    <div className="contact-gender"><span>Gender:</span><br/> {props.gender}</div>
    <div className="contact-description"><span>Description:</span><br/> {props.description}</div>
    <div className="contact-messages"><span>Last message:</span><br/> {props.messages}</div>
  </div>
  )
}