const initialState = {
  profile: [],
  firstname: ""
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return { ...state, profile: action.payload };
    case "POST_PROFILE":
      return { ...state, profile: [...state.profile, action.payload] };
    case "DELETE_PROFILE":
      return {
        ...state,
        profile: state.profile.filter(post => post._id !== action.payload)
      };
    case "FIRST_NAME":
      return { ...state, firstname: action.payload };
    case "FORM_RESET":
      return { ...state, firstname: action.payload };
    default:
      return state;
  }
};

export default MainReducer;
