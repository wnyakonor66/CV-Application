import { useLocation } from "react-router-dom";
import "../styles/display.css";
function Display() {
  const { state: formData } = useLocation();

  return (
    <div className="displayContainer">
      <div className="HeaderCont">
        <h2>Submitted Data</h2>
      </div>

      <div className="HeaderBar">
        <div className="headerInfo">
          <p>{formData.firstName}</p>
          <p>{formData.lastName}</p>
        </div>

        <div className="otherHeaderInfo">
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>
      </div>
      <p>School: {formData.school}</p>
      <p>Title: {formData.title}</p>
      <p>Date of Study: {formData.dateStudy}</p>
      <p>Company Name: {formData.companyName}</p>
      <p>Position: {formData.position}</p>
      <p>Responsibility: {formData.responsibility}</p>
      <p>Date From: {formData.dateFrom}</p>
      <p>Date To: {formData.dateTo}</p>
    </div>
  );
}

export default Display;
