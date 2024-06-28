import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    fetch('http://localhost:8080/getStudent')
      .then(res => res.json())
      .then(data => setStudents(data));
  }

  const handleDel = async (id) => {   
    await fetch(`http://localhost:8080/delStu/${id}`, { method: 'DELETE' });
    loadUsers();
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Roll No</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.rollno}>
                <th scope="row">{index + 1}</th>
                <td>{student.rollno}</td>
                <td>{student.studentName}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.address}</td>
                <td>{student.email}</td>
                <td>{student.status}</td>
                <td>
                 
                <Link
                  className="btn btn-primary mx-2"
                  to='/viewStu' state={student}
                >
                  View
                </Link>
                <Link className="btn btn-outline-primary mx-2"
                  to='/editStu' state={student}
                >
                  Edit
                </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDel(student.rollno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}