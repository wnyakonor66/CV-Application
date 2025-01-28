import { useState } from "react";
import "./App.css";
import Button from "./component/button";
import Display from "./component/Display";
import Education from "./component/Education";
import Experience from "./component/Experience";
import GeneralInfo from "./component/GeneralInfo";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function CVApp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    dateStudy: "",
    companyName: "",
    position: "",
    responsibility: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevformData) => ({
      ...prevformData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmitBtn = () => {
    navigate("/display", { state: formData });
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditBtn = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <h2>CV APPLICATION FORM</h2>

      <GeneralInfo
        handleInput={handleInput}
        isEditing={isEditing}
        formData={formData}
      />
      <Education
        handleInput={handleInput}
        isEditing={isEditing}
        formData={formData}
      />
      <Experience
        handleInput={handleInput}
        isEditing={isEditing}
        formData={formData}
      />
      <Button
        handleSubmitBtn={handleSubmitBtn}
        handleEditBtn={handleEditBtn}
        isEditing={isEditing}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CVApp />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
