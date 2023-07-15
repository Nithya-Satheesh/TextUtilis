import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [modeText, setmodeText] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      setmodeText("Enable Light Mode");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setmodeText("Enable Dark Mode");
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm
          heading="TextUtils"
          subheading="Enter the text to analyse below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
