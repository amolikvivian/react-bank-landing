import "./Button.css";

const CustomButton = ({ name, type }) => {
  return <button className={`btn ${type}`}>{name}</button>;
};

export default CustomButton;
