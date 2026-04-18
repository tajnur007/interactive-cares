
import { RouterProvider } from "react-router/dom";

import './App.css';
import { router } from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";



function App() {
  return (
    // 2. Wrap your app in RouterProvider and pass the router configuration
    // <RouterProvider router={router} />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
