import Navbar from "./components/Navbar";
import BusquedaContenedores from "./pages/BusquedaContenedores";
import BusquedaComodatos from "./pages/BusquedaComodatos";
import BusquedaClientes from "./pages/BusquedaClientes";
import BusquedaItems from "./pages/BusquedaItems";
import Principal from "./pages/Principal";

function App() {
  let currentPage;
  switch (window.location.pathname) {
    case "/buscar_contenedores":
      currentPage = <BusquedaContenedores />;
      break;
    case "/buscar_clientes":
      currentPage = <BusquedaClientes />;
      break;
    case "/buscar_items":
      currentPage = <BusquedaItems />;
      break;
    case "/buscar_comodatos":
      currentPage = <BusquedaComodatos />;
      break;
    case "/pagina_principal":
      currentPage = <Principal />;
      break;
  }
  return (
    <>
      <Navbar />
      <div>{currentPage}</div>
    </>
  );
}

export default App;
