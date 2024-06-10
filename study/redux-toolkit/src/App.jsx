import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import HooksLayout from "./components/Hook_layout";
import Hooks from "./components/Hooks";

function App() {
  useEffect(() => {
    const hooksDiv = document.getElementById("hooks");
    console.log(hooksDiv);
  }, []);
  return (
    <main>
      <Hooks />
      <HooksLayout />
      <Display />
      <Button isAdd={true} label="더하기 " />
      <Button isAdd={false} label="빼기 " />
    </main>
  );
}

export default App;
