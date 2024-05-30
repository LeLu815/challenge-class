import { createContext } from "react";

import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { AuthProvider } from "./components/contexts/auth.context";

export const AuthContext = createContext();

function App() {
  console.log("앱");
  return (
    <AuthProvider>
      <main>
        <Display />
        <Button />
      </main>
    </AuthProvider>
  );
}

export default App;
