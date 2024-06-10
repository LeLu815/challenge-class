import { useEffect } from "react";

function Hooks() {
  useEffect(() => {
    const hooksDiv = document.getElementById("hooks");
    hooksDiv.style.transform = "translateX(300px)";
    hooksDiv.style.transition = "transform 3s";
  }, []);
  return (
    <div
      id="hooks"
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      useEffect
    </div>
  );
}

export default Hooks;
