import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { firstName, fetchProfile, deleteProfile,postProfile } from "./redux/actions";

export default function App() {
  const profile = useSelector(state => state.profile);
  const firstname = useSelector(state => state.firstname);
  const dispatch = useDispatch();

  const fetchData = async () => {
    await dispatch(fetchProfile());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {
      firstname: firstname
    };
    await dispatch(postProfile(user));
    await dispatch({ type: "FORM_RESET", payload: "" });
    setTimeout(() => {
      fetchData();
    }, 1000);
  };

  const deleteformData = async id => {
    await dispatch(deleteProfile(id));
    setTimeout(() => {
      fetchData();
    }, 1000);
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
            onChange={e => dispatch(firstName(e))}
            placeholder="Enter Firstname"
            required
          />
        </label>
        <button>Send</button>
      </form>
      {profile.map((a, id) => {
        return (
          <div>
            <ol key={id}>
              <button onClick={() => deleteformData(a.id)}>X</button>
              {a.firstname}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
