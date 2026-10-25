import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

const FOCUSABLE = "input, select, textarea, button, [href]";

export default function Modal({ open, onClose, label, wide = false, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Фокус одразу в перший інтерактивний елемент модалки (перше поле форми).
    modalRef.current?.querySelector(FOCUSABLE)?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={`${styles.modal} ${wide ? styles.modalWide : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className={styles.closeBtn} onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>
  );
}
