import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import Delete from "@/pages/Delete";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout>{<Create />}</Layout>} />
          <Route path="/read" element={<Layout>{<Read />}</Layout>} />
          <Route path="/update" element={<Layout>{<Update />}</Layout>} />
          <Route path="/delete" element={<Layout>{<Delete />}</Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
