import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "@/components/Delete";
import Forms from "./pages/Forms";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Forms>{<Create />}</Forms>
              </Layout>
            }
          />
          <Route
            path="/read"
            element={
              <Layout>
                <Forms>{<Read />}</Forms>
              </Layout>
            }
          />
          <Route
            path="/update"
            element={
              <Layout>
                <Forms>{<Update />}</Forms>
              </Layout>
            }
          />
          <Route
            path="/delete"
            element={
              <Layout>
                <Forms>{<Delete />}</Forms>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
