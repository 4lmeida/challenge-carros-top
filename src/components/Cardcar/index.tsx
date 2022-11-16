import "./styles.css";
import carImg from "../../assets/car.png";

export default function Cardcar() {
  return (
    <div className="dsct-card-container">
      <img src={carImg} alt="Carro" />
      <p>Lorem ipsum dolor</p>
    </div>
  );
}
