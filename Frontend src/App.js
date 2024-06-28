import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from './users/EditStudent';
import ViewStudent from './users/ViewStudent';
import StudentForm from './users/StudentForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<StudentForm />} />
          <Route exact path="/editStu" element={<EditStudent />} />
          <Route exact path="/viewStu" element={<ViewStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
