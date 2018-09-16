export default (state = null, action) => {
  switch (action.type) {
    case 'select_Library':
      if (state == action.payload) {
        return null;
      }
        return action.payload;
    default:
      return state;
  }
};
