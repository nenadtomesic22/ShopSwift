import { useEffect, useRef } from 'react';
import './Modal.css'

export default function Modal ({children, isOpen, onClose}) {
    const modalRef = useRef(null)
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = e => {
            if(modalRef.current && !modalRef.current.contains(e.target)) {
                onClose()
            }
        }

        const onEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onEsc);
        window.addEventListener("click", handleClickOutside);
        return () => {window.removeEventListener("keydown", onEsc); window.removeEventListener("click", handleClickOutside);}
        }, [isOpen], [onClose]);
    
    if (!isOpen) return null;

    return (
        <div className="modal" ref={modalRef}>
            {children}
        </div>
    )
}