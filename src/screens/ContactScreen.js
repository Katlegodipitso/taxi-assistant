import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSecondary from "../FooterSecondary";
import "./ContactScreen.css";
import Heading from "../Heading";
import { db } from "../firebase";

const ContactScreen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {e.preventDefault();
    setLoader(true);

    db.collection('reports').add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert("Message has been sent!")
                setLoader(false);
            })
            .catch(error => {
                alert(error.message);
            })
            setName('');
            setEmail('');
            setMessage('');
    };

  return (
    <div className="ContactScreen">
      <div className="ContactScreen__header">
        <Link to="/">
          <img
            src="https://cdn.dribbble.com/users/514552/screenshots/4255081/taxidup.gif"
            alt=""
          />
        </Link>
      </div>
      <Heading heading="Send us a message if you have any incident to report" />
      <div className="ContactScreen__rewards">
        <h4>TAXI-ASSISTANT®</h4>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>Email</label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Message</label>
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit" style={{background : loader ? "#ccc" : "#ffa600"}}>Send Message</button>
      </form>
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  );
}

export default ContactScreen;