import abt from "../../Assets/Images/Mission.gif";
import "./missviss.css";

function Miss() {
  return (
    <div className="container">
      <div className="container d-flex justify-content-center">
        Vision and Mission
      </div>
      <div className="card-group">
        <div className="card mv">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>

        <div className="card mv">
          <img src={abt} className="card-img-top" alt="..."></img>
        </div>
      </div>
    </div>
  );
}

export default Miss;
