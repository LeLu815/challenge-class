import { Provider } from "react-redux";
import store from "./store";

function AuthProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default AuthProvider;
