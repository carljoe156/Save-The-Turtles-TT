import React from "react";

function Contact() {
  return (
    <div className="contact-form">
      Contact
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="4" cols="50" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
