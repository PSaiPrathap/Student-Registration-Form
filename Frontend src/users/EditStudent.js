import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function EditStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const studentFromLocation = location.state;

  const [student, setStudent] = useState({
    id: studentFromLocation.id || "",
    studentName: studentFromLocation.studentName || "",
    rollno: studentFromLocation.rollno || "",
    dob: studentFromLocation.dob || "",
    gender: studentFromLocation.gender || "",
    address: studentFromLocation.address || "",
    email: studentFromLocation.email || "",
    status: studentFromLocation.status || ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/updateStu/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        console.log("Submitted:", student);
        navigate("/");
      } else {
        console.error("Failed to update student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="studentName"
                value={student.studentName}
                onChange={handleInputChange}
              />
              <label htmlFor="rollno" className="form-label">Roll No</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your roll no"
                name="rollno"
                value={student.rollno}
                onChange={handleInputChange}
              />
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your date of birth"
                name="dob"
                value={student.dob}
                onChange={handleInputChange}
              />
              <label htmlFor="gender" className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={student.gender}
                onChange={handleInputChange}
              />
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={student.address}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={student.email}
                onChange={handleInputChange}
              />
              <label htmlFor="status" className="form-label">Status</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your status"
                name="status"
                value={student.status}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}