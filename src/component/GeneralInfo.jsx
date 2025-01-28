import { useEffect, useRef } from "react";
import "../styles/gen.css";

function GeneralInfo({ handleInput, isEditing, formData }) {
  const firstNameref = useRef(null);
  useEffect(() => {
    if (firstNameref.current) {
      firstNameref.current.focus();
    }
  }, []);

  return (
    <div className="gen_container">
      <div className="genHeader_container">
        <h1 className="genHeader">General Information</h1>
        <div className="underline"></div>
      </div>
      <div className="formContainer">
        <div className="innerContainer">
          <div>
            <label htmlFor="firstName">Firstname:</label>
            {isEditing ? (
              <p>{formData.firstName}</p>
            ) : (
              <input
                type="text"
                placeholder="Kofi"
                id="firstName"
                name="firstName"
                onChange={handleInput}
                value={formData.firstName}
                ref={firstNameref}
              />
            )}
          </div>
          <div>
            <label htmlFor="lastName">Lastname:</label>
            {isEditing ? (
              <p>{formData.lastName}</p>
            ) : (
              <input
                type="text"
                placeholder="essel"
                id="lastName"
                name="lastName"
                onChange={handleInput}
                value={formData.lastName}
                required
              />
            )}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            {isEditing ? (
              <p>{formData.email}</p>
            ) : (
              <input
                type="email"
                placeholder="kofiessel@gmail.com"
                id="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
                required
              />
            )}
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            {isEditing ? (
              <p>{formData.phone}</p>
            ) : (
              <input
                type="tel"
                placeholder="203881171"
                id="phone"
                minLength={10}
                maxLength={10}
                name="phone"
                onChange={handleInput}
                value={formData.phone}
                required
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
