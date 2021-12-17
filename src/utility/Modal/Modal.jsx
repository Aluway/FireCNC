import React from "react";
import { useSelector, useDispatch } from "react-redux";
import openModal from "../../actions/openModal";
import "./Modal.css";

function Modal() {
  const siteModal = useSelector((state) => state.siteModal);
  const dispatch = useDispatch();

  let modalInlineStyle;
  if (siteModal.openClose === "open") {
    modalInlineStyle = { display: "block" };
  } else {
    modalInlineStyle = { display: "none" };
  }

  return (
    <div className="site-modal" style={modalInlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span
            onClick={() => dispatch(openModal("closed", ""))}
            className="close"
          >
            &times;
          </span>
        </div>
        <div className="">{siteModal.content}</div>
      </div>
    </div>
  );
}

export default Modal;
