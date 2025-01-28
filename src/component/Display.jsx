import { useLocation } from "react-router-dom";

function Display() {
  const { state: formData } = useLocation(); // Get form data from navigation state

  return (
    <div>
      <h2>Submitted Data</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
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
