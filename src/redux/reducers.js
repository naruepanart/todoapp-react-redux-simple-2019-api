const initialState = {
  profile: [],
  firstname: "",
  isLoading: false,
  isEdit: false
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEFORE_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    case "EDIT_TRUE":
      return { ...state, isEdit: true };
    case "EDIT_FALSE":
      return { ...state, isEdit: false };
    case "FETCH_PROFILE":
      return { ...state, profile: action.payload };
    case "POST_PROFILE":
      return { ...state, profile: [...state.profile, action.payload] };
    case "DELETE_PROFILE":
      return {
        ...state,
        profile: state.profile.filter(post => post._id !== action.payload)
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        profile: state.profile.map(a => {
          if (action.payload === a.id) {
            a.firstname = action.firstname;
          }
          return a;
        })
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
