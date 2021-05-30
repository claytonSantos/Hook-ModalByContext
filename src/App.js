import { Button } from "@material-ui/core";
import { useState } from "react";
import ModalSkeleton from "./components/modalSkeleton";
import { useDialog } from "./context";
import "./styles.css";

export default function App() {
  const { createDialog, removeDialog } = useDialog();
  return (
    <div className="App">
      <button
        id="dialog-button"
        onClick={() =>
          createDialog({
            id: "dialog",
            maxWidth: "sm",
            fullWidth: true,
            Component: (
              <MeuComponente handleClose={() => removeDialog("dialog")} />
            )
          })
        }
      >
        Open dialog
      </button>
    </div>
  );
}

const MeuComponente = ({ handleClose }) => {
  return (
    <ModalSkeleton
      handleClose={handleClose}
      handleConfirm={() => alert("confirm clicked")}
      handleCancel={() => alert("cancel clicked")}
    >
      <div>Conteudo do seu Modal.</div>
    </ModalSkeleton>
  );
};
