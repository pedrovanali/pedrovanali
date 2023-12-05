import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1>Contact Details</h1>
      <ul>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/pedrovanali"
            target="_blank"
            rel="noreferrer"
          >
            pedrovanali
          </a>
        </li>
        <li>
          Linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/pedro-henrique-vanali/"
            target="_blank"
            rel="noreferrer"
          >
            /in/pedro-henrique-vanali
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:pedrovanali@gmail.com">pedrovanali@gmail.com</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
