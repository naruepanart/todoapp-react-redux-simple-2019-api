/* import axios from "axios";

export const fetchProfile = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/profile");
  dispatch({ type: "FETCH_PROFILE", payload: res.data });
};
export const postProfile = user => async dispatch => {
  const res = await axios.post("http://localhost:3001/profile", user);
  dispatch({ type: "POST_PROFILE", payload: res.data });
};

export const deleteProfile = id => async dispatch => {
  await axios.delete(`http://localhost:3001/profile/${id}`);
  dispatch({ type: "DELETE_PROFILE", payload: id });
};
 */