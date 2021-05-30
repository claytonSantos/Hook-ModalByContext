import { Button, IconButton } from "@material-ui/core";
import { Container, Header, Footer } from "./styles.js";
import CloseIcon from "@material-ui/icons/Close";

const ModalSkeleton = ({
  children,
  buttonBack,
  buttonClose,
  footer,
  handleClose,
  handleConfirm,
  handleCancel
}) => {
  const ButtonClose = buttonClose || (
    <IconButton
      onClick={handleClose}
      color="primary"
      aria-label="upload picture"
      component="span"
    >
      <CloseIcon />
    </IconButton>
  );

  const FooterDefault = footer || (
    <div>
      <Button onClick={handleCancel}>Cancelar</Button>
      <Button onClick={handleConfirm} variant="contained" color="primary">
        Confirmar
      </Button>
    </div>
  );

  return (
    <Container>
      <Header>
        <div>{buttonBack}</div>
        <div>{ButtonClose}</div>
      </Header>
      {children}
      <Footer>{FooterDefault}</Footer>
    </Container>
  );
};

export default ModalSkeleton;
