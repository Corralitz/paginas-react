import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../../styles/body.css";
import "./history.css";
import "./dialog.css";
import "./attempt.css";

function DialogBuscar() {
  const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const [filteredList, setFilteredList] = useState(TAGS);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilteredList(() => TAGS);
      return;
    }

    const filteredValues = TAGS.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    setFilteredList(() => filteredValues);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="btn btn-verde">
          Buscar &nbsp;
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z"
                stroke="#FFFFFF"
                strokeWidth="1.248"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            Vistos recientemente
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Aqui puedes ver los elementos que has visitado recientemente.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <input
              className="Input"
              id="name"
              placeholder="Buscar en recientes"
              type="text"
              onChange={handleSearch}
            />
          </fieldset>
          <hr
            style={{
              color: "#BFBFBF",
              backgroundColor: "#BFBFBF",
              borderWidth: "0",
              height: "1.5px",
              marginTop: "1.4rem",
              marginBottom: "1.1rem",
            }}
          />
          <Dialog.Title className="DialogSubtitle">
            Resultados de búsqueda
          </Dialog.Title>
          <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
              <div
                style={{
                  paddingInline: "20px",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                {filteredList &&
                  filteredList.map((tag, index) => (
                    <div className="Tag" key={index}>
                      {tag}
                    </div>
                  ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="ScrollAreaScrollbar"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
          </ScrollArea.Root>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function HistoryElement({ codigo, ...props }) {
  return (
    <div className="history-element">
      <h4>Contenedor No 934924</h4>
      <button className="btn btn-naranja">
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default function History() {
  return (
    <>
      <div className="history-container">
        <div className="history-row">
          Visitados Recientemente
          <DialogBuscar />
        </div>
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
      </div>
    </>
  );
}
