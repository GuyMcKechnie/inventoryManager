import Shell from "@/components/shell";
import "@/styles/index.css";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/home";
import Users from "./pages/users";
import Inventory from "./pages/inventory";
import Orders from "./pages/orders";

const routes = [
  { path: "/", element: <Shell content={<Home />} /> },
  { path: "/users", element: <Shell content={<Users />} /> },
  { path: "/inventory", element: <Shell content={<Inventory />} /> },
  { path: "/orders", element: <Shell content={<Orders />} /> },
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
