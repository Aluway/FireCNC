function closeModal(closeModal, content) {
  return {
    type: "CLOSE_MODAL",
    payload: {
      closeModal,
      content,
    },
  };
}

export default closeModal;
