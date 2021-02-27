const photoReducer = (
  state = { photos: [], photo: {}, loading: false },
  action
) => {
    
  switch (action.type) {
    case "GET_PHOTOS":
      return {
        ...state,
        photos: action.photos,
        loading: false,
      };
    default:
      return state;
  }
};

export default photoReducer