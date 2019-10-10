import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";

export default function App() {
  const profile = useSelector(state => state.profile);
  const firstname = useSelector(state => state.firstname);
  const isEdit = useSelector(state => state.isEdit);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/profile");
    await dispatch({ type: "FETCH_PROFILE", payload: res.data });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {
      firstname: firstname
    };
    const res = await axios.post("http://localhost:3001/profile", user);
    await dispatch({ type: "POST_PROFILE", payload: res.data });
    await dispatch({ type: "FORM_RESET", payload: "" });
    await fetchData();
  };

  const deleteForm = async id => {
    await axios.delete(`http://localhost:3001/profile/${id}`);
    await dispatch({ type: "DELETE_PROFILE", payload: id });
    await fetchData();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Simple React - Redux 2019</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname :
          <input
            type="text"
            value={firstname}
            onChange={e =>
              dispatch({ type: "FIRST_NAME", payload: e.target.value })
            }
            placeholder="Enter Firstname"
            required
          />
        </label>
        <button>{isEdit ? <p>Update</p> : <p>Submit</p>}</button>
      </form>
      {profile.map((a, id) => {
        return (
          <div>
            <ol key={id}>
              <button onClick={() => deleteForm(a.id)}>X</button>
              {a.firstname}
              <button onClick={() => deleteForm(a.id)}>Edit</button>
            </ol>
          </div>
        );
      })}
    </div>
  );
}
