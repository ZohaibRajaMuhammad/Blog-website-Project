import "../styles/styles.css";
// import NavBar from "../component/NavBar"; 
// import Footer from "../component/Footer"; // Import the custom CSS
import AboutImage from "../assets/About.avif";

const AboutUs = () => {
  return (
    <div className="Main-aboutdiv">
      {/* <NavBar /> */}
    <section className="about-section">
      {/* ABOUT US HEADER */}
      <div className="about-header">
        <h3>About Us</h3>
        <h1>Creative Blog Writing and Publishing Site</h1>
        <p>
          Landscape agile frameworks to provide a robust synopsis for high-level overviews.
          Iterative approaches to corporate strategy foster collaborative thinking to further
          the overall value proposition.
        </p>
      </div>

      {/* IMAGE */}
      <div className="about-image">
        <img src={AboutImage} alt="Team Working" />
      </div>

      {/* HOW WE WORK */}
      <div className="about-work">
        <h2>I will show you how our team works</h2>
        <p>We divide tasks into structured strategies to ensure efficiency.</p>
      </div>

      {/* WORK PROCESS STEPS */}
      <div className="about-steps">
        {/* STEP 1 */}
        <div className="step active">
          <h3>01</h3>
          <h4>Brainstorming</h4>
          <p>We generate fresh ideas and evaluate the best approach to achieve our goals.</p>
          <button>Learn More</button>
        </div>

        {/* STEP 2 */}
        <div className="step">
          <h3>02</h3>
          <h4>Analysing</h4>
          <p>Deep research and evaluation to find the most effective solutions.</p>
        </div>

        {/* STEP 3 */}
        <div className="step">
          <h3>03</h3>
          <h4>News Publishing</h4>
          <p>We distribute high-quality content to reach the right audience.</p>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
