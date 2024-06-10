import { useLayoutEffect } from "react";

function HooksLayout() {
  useLayoutEffect(() => {
    const hooksDiv = document.getElementById("hooks_layout");
    hooksDiv.style.transform = "translateX(300px)";
    hooksDiv.style.transition = "transform 3s";
  }, []);
  return (
    <div
      id="hooks_layout"
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "red",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      useLayoutEffect
    </div>
  );
}

export default HooksLayout;
