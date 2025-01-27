import "../styles/gen.css";
function Experience() {
  return (
    <div className="gen_container">
      <div className="genHeader_container">
        <h1 className="genHeader">Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="formContainer">
        <div className="innerContainer">
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" />
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" name="Position" />
          </div>

          <div>
            <label htmlFor="responsibility">Responsibility:</label>
            <textarea name="responsibility" id="responsibility"></textarea>
          </div>

          <div>
            <label htmlFor="dateFrom">dateFrom:</label>
            <input type="date" id="dateFrom" name="dateFrom" />
          </div>

          <div>
            <label htmlFor="dateTo">dateTo:</label>
            <input type="date" id="dateTo" name="dateTo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
