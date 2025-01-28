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
      <div className="eduContainer">
        <h1>Education</h1>
      </div>
      <div className="eduInfo">
        <p>
          <strong>School</strong>: {formData.school}
        </p>
        <p>
          <strong>Title:</strong> {formData.title}
        </p>
        <p>
          <strong>Date of Study: </strong>
          {formData.dateStudy}
        </p>
      </div>

      <div className="expContainer">
        <h1>Experience</h1>
      </div>

      <div className="expInfo">
        <p>
          <strong>Company Name:</strong> {formData.companyName}
        </p>
        <p>
          <strong>Position:</strong> {formData.position}
        </p>
        <p>
          <strong>Responsibility</strong>: {formData.responsibility}
        </p>
        <p>
          <strong>Date From:</strong> {formData.dateFrom}
        </p>
        <p>
          <strong>Date To:</strong> {formData.dateTo}
        </p>
      </div>
    </div>
  );
}

export default Display;
