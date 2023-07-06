import { Route, Routes } from "react-router-dom";
import WelcomePageComponent from "./Components/WelcomePageComponent";
import CalculatorComponent from "./Components/CalculatorComponent.jsx";
import ButtonBox from "./Components/ButtonBox.jsx";
import Button from "./Components/Button.jsx";
import Screen from "./Components/Screen.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="AppHeader">Mark's Calculator Project</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <WelcomePageComponent />
            </div>
          }
        ></Route>
        <Route path="/calculator" element={<CalculatorComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
