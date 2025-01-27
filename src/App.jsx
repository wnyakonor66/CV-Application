import "./App.css";
import Button from "./component/button";
import Education from "./component/Education";
import Experience from "./component/Experience";
import GeneralInfo from "./component/GeneralInfo";

function App() {
  return (
    <>
      <GeneralInfo />
      <Education />
      <Experience />
      <Button />
    </>
  );
}

export default App;
