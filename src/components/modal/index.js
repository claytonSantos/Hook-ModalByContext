import { ModalInner } from "./styles";

import Dialog from "@material-ui/core/Dialog";

const Modal = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <Dialog {...rest}>
      <ModalInner>{children}</ModalInner>
    </Dialog>
  );
};

export default Modal;
