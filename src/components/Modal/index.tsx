import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { ModalOverlay, ModalContent } from "./style";
import { handleModal } from "../../store/reducers/modal";

const Modal = ({ children }) => {
  const isOpen = useSelector((state: RootReducer) => state.modal.value);

  const dispatch = useDispatch();
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={() => dispatch(handleModal())}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
