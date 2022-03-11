import Cart from "./Cart";
import styles from "./NavBar.module.css";
const NavBar = (props) => {
  return (
    <div className={styles.NavBar}>
      <div>LearningRedux</div>
      <div onClick={props.onClick}>
        <Cart />
      </div>
    </div>
  );
};
export default NavBar;
