import { FaGraduationCap, FaBookOpen, FaCertificate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import "./services.css";

const arr = [
  {
    logo: FaGraduationCap,
    title: "Curated Tests",
    text: "Handpicked questions which will test your analytical skills to excel in your exam",
  },
  {
    logo: GiStairsGoal,
    title: "Self-Evaluation",
    text: "A Sophisticated Marking System which helps you to judge your performance",
  },
  {
    logo: FaCertificate,
    title: "Reward System",
    text: "Earn badges by attempting more exam to unlock premium content",
  },
  {
    logo: FaBookOpen,
    title: "Professional Guidance",
    text: "Contact our mentors to clear out your doubts",
  },
];

function Service() {
  return (
    <div className="container">
      <div className="row gy-3 my-3">
      <div className="container d-flex justify-content-center">
        Services We Provide
      </div>
        {arr.map((i) => (
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card s text-center h-100">
              <i id="slogo"><i.logo /></i>
              <div className="card-body">
                <h5 className="card-title">{i.title}</h5>
                <p className="card-text">{i.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
