import { RouterProvider } from "react-router";

import "./App.css";
import router from "./routes/routes";

function App() {
  // 홈으로 들어오면 최신 url로 보내야함..
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
