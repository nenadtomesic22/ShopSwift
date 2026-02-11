import './Modal.css'

export default function Modal({children, modalRef, id}) {
    if(!isOpen) return null

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