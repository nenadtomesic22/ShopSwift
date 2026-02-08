import './Modal.css'

export default function Modal({children, id, modalRef}) {
    const handleContentClick = (e) => {
        if (e.target.closest(".close-btn")) {
            modalRef.current.close();
        }
    };

    return (
        <dialog 
        onClick={handleContentClick}
        ref={modalRef}
        id={id}
        popover='auto'
        className="modal"
        >
            {children}
        </dialog>
    )
}