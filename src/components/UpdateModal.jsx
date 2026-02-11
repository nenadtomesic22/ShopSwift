import { useEffect, useRef } from "react";
import { useUpdate } from "./UpdateContext";
import Modal from "./ui/Modal/Modal";

export default function UpdateModal() {
  const modalRef = useRef(null);
  const { isOpen, setIsOpen, commitMessage } = useUpdate();

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
      console.log('mudja');
    }
  }, [isOpen]);
  if (isOpen && modalRef.current && !modalRef.current.open) {
  modalRef.current.showModal();
}


  return (
    <Modal modalRef={modalRef}>
      <h2>Novi update</h2>
      <p>{commitMessage}</p>
      <button onClick={() => {
        modalRef.current.close();
        setIsOpen(false);
      }}>
        Zatvori
      </button>
    </Modal>
  );
}
