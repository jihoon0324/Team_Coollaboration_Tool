import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/authSlice";
const JoinUs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = { username: "", email: "", password: "", role: true };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const res = await fetch(`http://localhost:5000/users/joinus`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ formValues }),
      });
      const data = await res.json();
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      // setError(prev => true)
    }
  };

  return (
    <section>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            id="exampleUsername"
            aria-describedby="emailHelp"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default JoinUs;
