import { useEffect, useRef } from "react";
import { useUpdate } from "./UpdateContext";
import Modal from "./ui/Modal/Modal";

export default function UpdateModal() {
  const modalRef = useRef(null);
  const { isOpen, setIsOpen, commitMessage } = useUpdate();

  useEffect(() => {
    if (isOpen && modalRef.current&& !modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, [isOpen]);


  return (
    <Modal modalRef={modalRef} id="update">
      <h2>Novi update</h2>
      <p>{commitMessage}</p>
      <button onClick={() => {
    if (modalRef.current && modalRef.current.open) {
      modalRef.current.close();
    }
    setIsOpen(false);
  }}>
        Zatvori
      </button>
    </Modal>
  );
}
