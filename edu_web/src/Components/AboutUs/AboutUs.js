import abt from "../../Assets/Images/About.gif";
import "./aboutus.css";

function About() {
  return (
    <div className="container">
      <div className="container d-flex justify-content-center">About Us</div>
      <div className="card-group">

        <div className="card a">
          <img src={abt} className="card-img-top" alt="..."></img>
        </div>

        <div className="card a">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
