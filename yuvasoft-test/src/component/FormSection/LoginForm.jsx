import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/userSlice/userSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { Admin } = useSelector((state) => state.User);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === 'vaibhav@123') {
        dispatch(userLogin(email))
      navigate("/dashboard");
    } else {
      window.alert("Enter Vaild Details");
    }
  };
  useEffect(() => {
    if (Admin) {
      navigate("/");
    }
  }, [Admin]);
  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center flex-column justify-content-center w-100">
        <form
          onSubmit={handleLogIn}
          className="d-flex flex-column  w-50 shadow-sm p-3 mt-3"
        >
          <label htmlFor="">Email</label>
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="text"
            className="form-control my-2"
            placeholder="Enter Email Address"
            required
          />
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            className="form-control my-2"
            placeholder="Enter Password"
            required
          />
          <div className="d-flex justify-content-center w-100 my-2">
            <button type="submit" className="btn btn-success w-25">
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
