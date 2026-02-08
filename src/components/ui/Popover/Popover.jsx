import { useEffect, useRef } from "react";
import './popover.css'

export default function Popover({ id, triggerRef, children }) {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        !triggerRef?.current?.contains(e.target)
      ) {
        popoverRef.current.close();
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") popoverRef.current?.close();
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [triggerRef]);

  return (
    <dialog
      id={id}
      popover="auto"
      ref={popoverRef}
      className="popover"
    >
      {children}
    </dialog>
  );
}
