import "../styles/busqueda.css";
import BarraBusqueda from "../components/BarraBusqueda";
import { useState } from "react";

export default function BusquedaContenedores() {
  const LISTA_EJEMPLO = Array.from({ length: 3000 });
  for (let i = 0; i < LISTA_EJEMPLO.length; i++) {
    LISTA_EJEMPLO[i] = {
      numero: `${i}`,
      tipo: i % 2 == 0 ? "Laboratorio" : "Almacenamiento",
      modificacion: i % 2 == 0 ? "08/12/22" : "21/08/22",
    };
  }

  const [filteredList, setFilteredList] = useState(LISTA_EJEMPLO);

  function filterContenedores(searchValue) {
    if (searchValue.target.value === "") {
      setFilteredList(() => LISTA_EJEMPLO);
      return;
    }

    const filteredValues = LISTA_EJEMPLO.filter(
      (element) =>
        element.numero.indexOf(searchValue.target.value.toLowerCase()) !== -1 ||
        element.tipo.indexOf(searchValue.target.value.toLowerCase()) !== -1 ||
        element.modificacion.indexOf(searchValue.target.value.toLowerCase()) !==
          -1
    );

    setFilteredList(() => filteredValues);
  }

  console.log(filteredList);

  return (
    <>
      <h1 className="search-page-title">Buscar Contenedores</h1>
      <BarraBusqueda metodoBusqueda={filterContenedores} />
    </>
  );
}
