import "../styles/btn.css";
function Button({ handleSubmitBtn, handleEditBtn, isEditing }) {
  return (
    <div className="buttonContainer">
      <div className="innerContent">
        <div>
          <button className="editBtn" type="button" onClick={handleEditBtn}>
            {isEditing ? "Edit" : "Save"}
          </button>
        </div>
        <div>
          <button className="submitBtn" type="submit" onClick={handleSubmitBtn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;
