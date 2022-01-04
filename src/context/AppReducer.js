export default (state, action) => {
  switch (action.type) {
    case "ADD_PROJETO":
      return {
        projetos: [action.payload, ...state.projetos],
      };
      return {};
    default:
      return state;
  }
};
