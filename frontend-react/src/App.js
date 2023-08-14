import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/fonts.css";

import Authentication from "./pages/Authentication";

import StudentDashboard from './pages/Admin/StudentDashboard';
import Teacher from "./pages/Teacher";
import Parent from "./pages/Parent/Landing";
import Student from "./pages/Student";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Authentication />} /> */}
          <Route path="/StudentDashboard" element={<StudentDashboard/>} />
          <Route path="/Teacher" element={<Teacher/>} />
          <Route path="/" element={<Parent/>} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
