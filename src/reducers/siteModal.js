const initState = {
  openClose: "closed",
  content: "",
};

const siteModal = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return action.payload;
    default:
      return state;
  }
};

export default siteModal;
