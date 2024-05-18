import styles from "./Button.module.css";

function Button({ children, position }) {
  const POSITION = ["top", "left", "bottom", "rignt"];
  let bottonStyle = {};
  switch (position) {
    case POSITION[0]:
      bottonStyle = { position: "absolute", top: "0" };
      break;
    case POSITION[1]:
      bottonStyle = { position: "absolute", top: "45px", left: "60px" };
      break;
    case POSITION[2]:
      bottonStyle = { position: "absolute", bottom: "0" };
      break;
    case POSITION[3]:
      bottonStyle = { position: "absolute", top: "45px", right: "60px" };
      break;
    default:
      break;
  }
  return (
    <div style={bottonStyle} className={styles["outer-button"]}>
      <button type="button" className={styles["button"]}>
        <div className={styles["button-top"]}>
          <span>{children}</span>
        </div>
        <div className={styles["button-bottom"]}></div>
        <div className={styles["button-base"]}></div>
      </button>
    </div>
  );
}

export default Button;
