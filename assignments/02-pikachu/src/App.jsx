import { useRef, useState } from "react";

import styles from "./App.module.css";
import pikachu from "./assets/pikachu.png";

import Character from "./components/Character/Character";

const KEY_LIST = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
const MAX_SCREEN = { right: "320", left: "0", up: "0", down: "320" };
const MOVING_GAP = "32";

function App() {
  const timerRef = useRef(null);
  const jumpingRef = useRef(null);
  const yPositionRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  // 초기값 설정과 무슨 연관이 있을까? 설정을 안해야 변경이 됨.
  const [movingStatus, setMovingStatus] = useState({
    // direction: "right",
    // directionChange: false,
  });
  const [mainPosition, setMainPosition] = useState({
    x: 0,
    y: 0,
  });
  const throttle = (func, delay) => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setTimeout(() => {
      func();
      timerRef.current = null;
    }, delay);
  };

  yPositionRef.current = mainPosition.y;
  const handlePressKey = (e) => {
    switch (e.key) {
      case KEY_LIST[0]:
        // 오른쪽
        setMainPosition((prevPosition) => {
          if (prevPosition.x < MAX_SCREEN.right) {
            if (movingStatus.direction !== "right") {
              // 다른 방향이면 방향전환
              setMovingStatus({
                direction: "right",
                directionChange: true,
              });
            }
            return {
              ...prevPosition,
              x: prevPosition.x + parseInt(MOVING_GAP),
            };
          }
          return prevPosition;
        });
        break;
      case KEY_LIST[1]:
        // 왼쪽
        setMainPosition((prevPosition) => {
          if (prevPosition.x > MAX_SCREEN.left) {
            if (movingStatus.direction !== "left") {
              // 다른 방향이면 방향전환
              setMovingStatus({
                direction: "left",
                directionChange: true,
              });
            }
            return {
              ...prevPosition,
              x: prevPosition.x - parseInt(MOVING_GAP),
            };
          }
          return prevPosition;
        });
        break;
      case KEY_LIST[2]:
        // 위
        setMainPosition((prevPosition) => {
          if (prevPosition.y > MAX_SCREEN.up) {
            return {
              ...prevPosition,
              y: prevPosition.y - parseInt(MOVING_GAP),
            };
          }
          return prevPosition;
        });
        break;
      case KEY_LIST[3]:
        // 아래
        setMainPosition((prevPosition) => {
          if (prevPosition.y < MAX_SCREEN.down) {
            return {
              ...prevPosition,
              y: prevPosition.y + parseInt(MOVING_GAP),
            };
          }
          return prevPosition;
        });
        break;
      case " ":
        if (yPositionRef.current < 31) {
          return;
        }
        setIsJumping(true);
        jumpingRef.current = setTimeout(() => {
          setIsJumping(false);
          jumpingRef.current = false;
        }, 200);
        break;
    }
  };
  window.addEventListener("keydown", (e) => {
    if (jumpingRef.current) {
      return;
    }
    console.log(mainPosition.y);
    throttle(() => {
      console.log(mainPosition.y);
      handlePressKey(e);
    }, 10);
  });

  return (
    <div className={styles["background"]}>
      <div className={styles["game-device"]}>
        <div className={styles["screen-outer"]}>
          <div className={styles["screen-inner"]}>
            <div className={styles["screen"]}>
              <Character
                src={pikachu}
                position={mainPosition}
                className={`${styles["main-character"]} ${
                  isJumping ? styles["jump-effect"] : ""
                } ${
                  movingStatus.directionChange
                    ? movingStatus.direction === "right"
                      ? styles["flip-right"]
                      : styles["flip-left"]
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
