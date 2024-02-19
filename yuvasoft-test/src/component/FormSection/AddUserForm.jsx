import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSave, userUpdate } from "../../features/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.User);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hobbies: "",
    status: "",
    gender: "",
  });

  const { name, email, hobbies, status, gender } = formData;

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      dispatch(
        userUpdate({
          id: edit.editUser.id,
          name,
          email,
          hobbies,
          status,
          gender,
        })
      );
      navigate("/dashboard");
    } else {
      dispatch(
        userSave({
          id: Math.floor(Math.random() * 100).toString(),
          name,
          email,
          hobbies,
          status,
          gender,
        })
      );
      navigate("/dashboard");
    }
    setFormData({
      name: "",
      email: "",
      hobbies: "",
      status: "",
      gender: "",
    });
  };

  useEffect(() => {
    setFormData({
      id: edit.editUser.id,
      name: edit.editUser.name,
      email: edit.editUser.email,
      hobbies: edit.editUser.hobbies,
      status: edit.editUser.status,
      gender: edit.editUser.gender || "",
    });
  }, [edit]);

  return (
    <div className="d-flex align-items-center flex-column justify-content-center w-100">
      <h3 className="text-center bg-dark w-100 text-light p-3">
        {edit.isEdit ? "Edit User" : "Add User"}
      </h3>
      <form
        onSubmit={handleAddUser}
        className="d-flex flex-column  w-50 shadow-sm p-4"
      >
          <label htmlFor="">Name</label>
        <input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          className="form-control my-2"
          placeholder="Enter Name"
          required
        />
        <label htmlFor="">Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          className="form-control my-2"
          placeholder="Enter Email Address"
          required
        />
        <label htmlFor="">Status</label>
        <select
          onChange={handleChange}
          value={status}
          className="form-control my-2"
          name="status"
          id=""
          required
        >
          <option value='' selected>Select Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <label htmlFor="">Gender</label>
        <div className="d-flex">
          <label className="mx-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="mx-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <label htmlFor="">Hobbies</label>
        <textarea
          onChange={handleChange}
          name="hobbies"
          value={hobbies}
          className="form-control my-2"
          id=""
          cols="20"
          rows="5"
          required
        ></textarea>
        <div className="d-flex align-items-center justify-content-evenly">
          <button type="submit" className="btn btn-success w-25">
            {edit.isEdit ? "Update" : "Submit"}
          </button>
          <button type="reset" className="btn btn-primary w-25">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;