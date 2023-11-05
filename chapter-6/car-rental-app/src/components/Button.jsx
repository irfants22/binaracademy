import "./../assets/styles/home.css";
import "./../assets/styles/car.css";

function MyButton(props) {
  return (
    <>
      <button className={props.className}>{props.children}</button>
    </>
  );
}

export default MyButton;
