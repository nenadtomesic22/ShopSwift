import { useUpdate } from "../components/UpdateContext";
import Modal from "./ui/Modal/Modal.jsx";

export default function UpdateModal() {
  const { isOpen, setIsOpen, commitMessage } = useUpdate();

  console.log(import.meta.env);
  console.log(import.meta.env.VITE_VERCEL_GIT_COMMIT_MESSAGE);
  if (!isOpen) return null;

  return (
    // <Modal onClose={() => setIsOpen(false)}>
    //   <h2>Novi update</h2>
    //   <p>{commitMessage}</p>
    // </Modal>
    <h4>Mudja</h4>
    
  );
}