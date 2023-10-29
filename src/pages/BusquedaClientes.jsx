import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css"

export default function BusquedaClientes() {
  return (
    <>
      <h1 className="search-page-title">Buscar Clientes</h1>
      <BarraBusqueda />
    </>
  );
}