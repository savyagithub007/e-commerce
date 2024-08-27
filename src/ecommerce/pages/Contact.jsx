function Contact() {
    return (
      <div className="page">
        <h2>Contact Us</h2>
  
        <form action="" className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <br />
          <input type="email" placeholder="Enter your email" />
          <br />
          <textarea name="" placeholder="Enter your message" id=""></textarea>
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  