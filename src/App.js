import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePageComponent from "./Components/WelcomePageComponent";
import CalculatorComponent from "./Components/CalculatorComponent";

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
        <Route
          path="/calculator"
          element={
            <div>
              <CalculatorComponent />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
