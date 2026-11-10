
import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={
        isModalOpen
          ? "modal-overlay show-modal"
          : "modal-overlay"
      }
      onClick={closeModal}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Modal Content</h3>

        <p>Welcome to my React Modal Window!</p>

        <button
          className="close-modal-btn"
          onClick={closeModal}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
