import abt from "../../Assets/Images/Mission.gif";
import "./missviss.css";

function Miss() {
  return (
    <div className="container">
      <div className="container d-flex justify-content-center">
        Vision and Mission
      </div>
      <div class="card-group">
        <div class="card mv">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>

        <div class="card mv">
          <img src={abt} class="card-img-top" alt="..."></img>
        </div>
      </div>
    </div>
  );
}

export default Miss;
