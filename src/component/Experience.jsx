import "../styles/gen.css";
function Experience({ handleInput, isEditing, formData }) {
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
            {isEditing ? (
              <p>{formData.companyName}</p>
            ) : (
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleInput}
                value={formData.companyName}
                required
              />
            )}
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            {isEditing ? (
              <p>{formData.position}</p>
            ) : (
              <input
                type="text"
                id="position"
                name="position"
                onChange={handleInput}
                value={formData.position}
                required
              />
            )}
          </div>

          <div>
            <label htmlFor="responsibility">Responsibility:</label>
            {isEditing ? (
              <p>{formData.responsibility}</p>
            ) : (
              <textarea
                name="responsibility"
                id="responsibility"
                onChange={handleInput}
                value={formData.responsibility}
                required
              ></textarea>
            )}
          </div>

          <div>
            <label htmlFor="dateFrom">dateFrom:</label>
            {isEditing ? (
              <p>{formData.dateFrom}</p>
            ) : (
              <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                onChange={handleInput}
                value={formData.dateFrom}
                required
              />
            )}
          </div>

          <div>
            <label htmlFor="dateTo">dateTo:</label>
            {isEditing ? (
              <p>{formData.dateTo}</p>
            ) : (
              <input
                type="date"
                id="dateTo"
                name="dateTo"
                onChange={handleInput}
                value={formData.dateTo}
                required
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
