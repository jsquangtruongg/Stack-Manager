import { Provider } from "react-redux";
import App from "./App";
import { AuthProvider } from "./hook/useAuth";
import { store } from "./redux/store";

const AppContainer = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  );
};

export default AppContainer;
