import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import UserDetails from "./pages/UserDetails";
import UserList from "./pages/UserList";
import { getMode } from "./store/themeSlice";
import getTheme from "./theme";

function App() {
  const mode = useSelector(getMode);
  const theme = createTheme(getTheme(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppNavBar />
        <Layout>
          <Container maxWidth="lg" sx={{ mb: 2 }}>
            <Routes>
              <Route path="/" index element={<UserList />} />
              <Route path="/user/:username" element={<UserDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
