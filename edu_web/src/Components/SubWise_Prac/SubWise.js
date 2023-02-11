import phy from "../../Assets/Images/phy.jpg";
import chem from "../../Assets/Images/chem.jpg";
import maths from "../../Assets/Images/maths.jpg";
import bio from "../../Assets/Images/bio.jpg";

const arr = [
  { img: phy, title: "Physics" },
  { img: chem, title: "Chemistry" },
  { img: maths, title: "Mathematics" },
  { img: bio, title: "Biology" },
];

function Sub() {
  return (
    <div className="container">
      <div className="row gy-3 my-3">
        <div className="container d-flex justify-content-center">
          Subject Wise Practice
        </div>
        {arr.map((i) => (
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card s text-center h-100">
              <img src={i.img} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{i.title}</h5>
                <p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">
                      Left
                    </button>
                    <button type="button" class="btn btn-primary">
                      Right
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sub;
