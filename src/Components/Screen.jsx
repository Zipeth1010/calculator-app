import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <form className="screen" mode="single" max={30}>
      {value}
    </form>
  );
};

export default Screen;
