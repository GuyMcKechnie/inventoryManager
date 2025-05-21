import Shell from "@/components/shell";
import "@/styles/index.css";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/home";
import Users from "./pages/users";
import Books from "./pages/books";

const routes = [
  { path: "/", element: <Shell content={<Home />} /> },
  { path: "/users", element: <Shell content={<Users />} /> },
  { path: "/textbooks", element: <Shell content={<Books />} /> },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(<App />);
