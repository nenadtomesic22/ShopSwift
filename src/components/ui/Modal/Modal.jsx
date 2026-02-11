import './Modal.css'

export default function Modal({children, modalRef, id}) {
    const handleContentClick = (e) => {
        if (e.target.closest(".close-btn")) {
            modalRef.current.close();
        }
    };

    return (
        <dialog 
        ref={modalRef}
        popover='auto'
        id={id}
        className="modal"
        >
            {children}
        </dialog>
    )
}