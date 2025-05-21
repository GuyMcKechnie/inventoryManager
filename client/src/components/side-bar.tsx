import {
  ChevronLeft,
  People,
  PieChart,
  ShoppingBag,
} from "@mui/icons-material";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="w-xs border-x border-b border-gray-800 bg-gray-900 p-4">
      <div className="flex flex-col gap-2">
        <Link to="/">
          <button
            type="button"
            className="button-primary flex w-full items-center justify-between"
          >
            <span className="flex gap-3">
              <PieChart />
              Overview
            </span>
          </button>
        </Link>
        {/* Users */}
        <Link to="/users">
          <button
            type="button"
            className="button-primary flex w-full items-center justify-between"
          >
            <span className="flex gap-3">
              <People />
              Users
            </span>
          </button>
        </Link>
        {/* Sales */}
        <button
          type="button"
          className="dropdown-button-primary flex w-full items-center justify-between"
          data-collapse-toggle="dropdown-inventory"
        >
          <span className="flex gap-3">
            <ShoppingBag />
            Sales
          </span>
          <ChevronLeft className="rotate-270" />
        </button>
        <ul
          className="dropdown flex hidden w-full flex-col gap-2 px-4"
          id="dropdown-inventory"
        >
          <Link to="/textbooks">
            <li>Textbooks</li>
          </Link>
          <Link to="/billing">
            <li>Billing</li>
          </Link>
          <Link to="/billing">
            <li>Invoices</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
