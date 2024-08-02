import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state/globalSlice"
import { Provider } from "react-redux";




const store=configureStore({
  reducer:globalReducer,

})

const theme = createTheme({
  // You can customize the theme here
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
