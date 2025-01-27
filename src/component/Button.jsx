import "../styles/btn.css";
function Button() {
  return (
    <div className="buttonContainer">
      <div className="innerContent">
        <div>
          <button className="editBtn">Edit</button>
        </div>
        <div>
          <button className="submitBtn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Button;
