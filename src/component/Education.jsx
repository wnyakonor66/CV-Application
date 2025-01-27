import "../styles/gen.css";
function Education() {
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
            <input type="text" name="school" id="school" />
          </div>

          <div>
            <label htmlFor="title">Title Of Study:</label>
            <input type="text" name="title" id="title" />
          </div>

          <div>
            <label htmlFor="dateStudy">Date Of Study:</label>
            <input type="date" name="dateStudy" id="dateStudy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
