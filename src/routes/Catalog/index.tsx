import "./styles.css";
import Cardcar from "../../components/Cardcar";
import Header from "../../components/Header";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className="dsct-catalog-main">
        <section id="dsct-section-padding" >
          <div className="dsct-catalog-title-card">
            <h2>Venha nos visitar</h2>
          </div>
          <div className="dsct-catalog-card">
            <Cardcar />
            <Cardcar />
          </div>
        </section>
        <section>

        </section>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
