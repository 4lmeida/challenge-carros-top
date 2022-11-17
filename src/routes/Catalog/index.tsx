import "./styles.css";
import Cardcar from "../../components/Cardcar";
import Header from "../../components/Header";
import Comment from "../../components/Comment";
import Footer from "../../components/Footer";

export default function Catalog() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="dsct-section-padding ">
          <div>
            <h2 className="dsct-catalog-title">Venha nos visitar</h2>
          </div>
          <div className="dsct-catalog-container">
            <Cardcar />
            <Cardcar />
          </div>
        </section>
        <section className="dsct-bg-comment dsct-section-padding ">
          <div>
            <h2 className="dsct-catalog-title">O que estão dizendo</h2>
          </div>
          <div className="dsct-catalog-container">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
