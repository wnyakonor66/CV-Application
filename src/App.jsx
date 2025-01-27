import "./App.css";
import Button from "./component/button";
import Education from "./component/Education";
import Experience from "./component/Experience";
import GeneralInfo from "./component/GeneralInfo";

function App() {
  return (
    <>
      <h2>CV APPLICATION FORM</h2>

      <GeneralInfo />
      <Education />
      <Experience />
      <Button />
    </>
  );
}

export default App;
