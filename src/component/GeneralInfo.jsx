import "../styles/gen.css";

function GeneralInfo() {
  return (
    <div className="gen_container">
      <div className="genHeader_container">
        <h1 className="genHeader">General Information</h1>
        <div className="underline"></div>
      </div>
      <div className="formContainer">
        <div className="innerContainer">
          <div>
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              placeholder="Kofi"
              id="firstName"
              name="firstName"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="kofiessel@gmail.com"
              id="email"
              name="email"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              placeholder="203881171"
              id="phone"
              minLength={10}
              maxLength={10}
              name="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
