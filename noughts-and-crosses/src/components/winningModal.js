import React from "react";
import Modal from "react-modal";

function winningModal(props) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <p>The Winner is {props.currentTurn} !</p>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default winningModal;
