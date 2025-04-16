import Me from "../images/Me.jpeg";

const Contact = () => {
  return (
    <main>
      <h1 className="contact-heading">My Contact</h1>
      <div className="card contact-section">
        <img className="contact-img" src={Me} width="50%" height="50%" alt="" />
        <div className="contact-text">
          <h3>Name: Michael Barney</h3>
          <h3>Phone: (709)746-0492</h3>
          <h3>Email: Michaelbarney1988@gmail.com</h3>
          <h3>GitHub: https://github.com/MikeBarney88</h3>
          <h3>
            LinkedIn: https://www.linkedin.com/in/michael-barney-4a68b8332/
          </h3>
        </div>
      </div>
    </main>
  );
};
export default Contact;
