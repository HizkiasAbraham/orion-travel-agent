import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { appTheme } from "./utils/theme";
import Guest from "./pages/guest";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <Guest />
      </Router>
    </ThemeProvider>
  );
}

export default App;
