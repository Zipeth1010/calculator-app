import { Link } from "react-router-dom";

const WelcomePageComponent = () => {
  return (
    <section className="WelcomePage">
      <h4 className="WelcomeText">
        This is my attempt at making a calculator app! Hopefully it goes well!
        <br />
        Click the button below to access it!
      </h4>
      <button className="CalculatorPageButton">
        <Link to="/calculator">Click me!</Link>
      </button>
    </section>
  );
};

export default WelcomePageComponent;
