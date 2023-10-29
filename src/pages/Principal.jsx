import "../styles/principal.css";
import History from "../components/principal/History";
import Servicios from "../components/principal/Servicios";

export default function Principal() {
  return (
    <>
      <div className="page-title">
        <h1>Página Principal</h1>
      </div>
      <div className="principal-body">
        <History />
        <div className="right-container">
          <div className="title-container">
            <h1>Bienvenido&#40;a&#41;</h1>
            <p style={{ color: "#5c5c5c" }}>
              Por favor seleccione un servicio:
            </p>
            <hr />
          </div>
          <div className="servicios-container">
            <Servicios />
          </div>
        </div>
      </div>
    </>
  );
}
