import { AppRouter } from "./routes/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
  );
}

export default App;
