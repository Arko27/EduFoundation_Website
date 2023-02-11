import car1 from "../../Assets/Images/carousel-1.jpg";
import car2 from "../../Assets/Images/carousel-2.jpg";

const arr1 = [
  { img: car1, stat: "active" },
  { img: car2, stat: "" },
];
const arr2 = [
  { btn: "prev", name: "Previous" },
  { btn: "next", name: "Next" },
];

function Car() {
  return (
    <div id="carouselExampleFadeInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        {arr1.map((i) => (
          <div class={`carousel-item ${i.stat}`} data-bs-ride-interval="1000">
            <img src={i.img} class="d-block w-100" alt="" />
          </div>
        ))}
      </div>

      {arr2.map((j) => (
        <button
          class={`carousel-control-${j.btn}`}
          type="button"
          data-bs-target="#carouselExampleFadeInterval"
          data-bs-slide={j.btn}
        >
          <span
            class={`carousel-control-${j.btn}-icon`}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">{j.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Car;
