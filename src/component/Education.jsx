import "../styles/gen.css";
function Education({ handleInput, isEditing, formData }) {
  return (
    <div className="gen_container">
      <div className="genHeader_container">
        <h1 className="genHeader">Education</h1>
        <div className="underline"></div>
      </div>
      <div className="formContainer">
        <div className="innerContainer">
          <div>
            <label htmlFor="school">School:</label>
            {isEditing ? (
              <p>{formData.school}</p>
            ) : (
              <input
                type="text"
                name="school"
                id="school"
                onChange={handleInput}
                value={formData.school}
                required
              />
            )}
          </div>

          <div>
            <label htmlFor="title">Title Of Study:</label>
            {isEditing ? (
              <p>{formData.title}</p>
            ) : (
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleInput}
                value={formData.title}
                required
              />
            )}
          </div>

          <div>
            <label htmlFor="dateStudy">Date Of Study:</label>
            {isEditing ? (
              <p>{formData.dateStudy}</p>
            ) : (
              <input
                type="date"
                name="dateStudy"
                id="dateStudy"
                onChange={handleInput}
                value={formData.dateStudy}
                required
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
