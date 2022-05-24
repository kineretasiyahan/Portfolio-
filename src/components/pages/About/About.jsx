import "./about.css";
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img className="about-img" src="aboutme1.jpg" alt="me"></img>
        </div>
      </div>
      <div className="about-right">
      <h1 className="about-title">About Me</h1>
      <p className="about-sub">Assertive, highly motivated, excellent interpersonal and communication skills, solid work ethic.
Proven experience in professional positions requiring ability to self-learn, as part of a team in shift and team management .
Experience as the director of a computer network in the IDF.</p>
      <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi nisi, rerum dolores soluta non ducimus aliquid dolorum totam dolore hic adipisci quisquam. Voluptate perspiciatis eaque, commodi ducimus cum, nulla eligendi cupiditate nisi deleniti culpa incidunt molestiae sunt corporis porro sit! Vero repellendus error similique explicabo odit est velit inventore?</p>
      </div>
    </div>
  );
};

export default About;
