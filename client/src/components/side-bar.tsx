import {
  ChevronLeft,
  People,
  PieChart,
  SettingsApplications,
  ShoppingBag,
} from "@mui/icons-material";
import { SpeedDial } from "@mui/material";
import {
  Book,
  Box,
  Gauge,
  History,
  Plus,
  Receipt,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="max-h-[94vh] w-xs overflow-y-scroll border-x border-b border-gray-800 bg-gray-900 p-4">
      <div className="flex flex-col gap-2">
        <Link to="/">
          <button
            type="button"
            className="button-primary flex w-full items-center justify-between"
          >
            <span className="flex gap-3">
              <Gauge />
              Dashboard
            </span>
          </button>
        </Link>
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
        {/* Inventory */}
        <button
          type="button"
          className="dropdown-button-primary flex w-full items-center justify-between"
          data-collapse-toggle="dropdown-inventory"
        >
          <span className="flex gap-3">
            <Box />
            Inventory
          </span>
          <ChevronLeft className="rotate-270" />
        </button>
        <ul
          className="dropdown flex hidden w-full flex-col gap-2 px-4"
          id="dropdown-inventory"
        >
          <li>
            <Link to="/manage-textbooks">
              <span className="flex gap-3">
                <Book />
                Manage Textbooks
              </span>
            </Link>
          </li>
          <li>
            <Link to="/bulk-upload-textbooks">
              <span className="flex gap-3">
                <Plus />
                Bulk Upload
              </span>
            </Link>
          </li>
        </ul>
        {/* Sales */}
        <button
          type="button"
          className="dropdown-button-primary flex items-center justify-between"
          data-collapse-toggle="dropdown-sales"
        >
          <span className="flex gap-3">
            <ShoppingCart />
            Sales
          </span>
          <ChevronLeft className="rotate-270" />
        </button>
        <ul
          className="dropdown flex hidden w-full flex-col gap-2 px-4"
          id="dropdown-sales"
        >
          <li>
            <Link to="/new-sale">
              <span className="flex gap-3">
                <Plus />
                New Sale
              </span>
            </Link>
          </li>
          <li>
            <Link to="/sales-history">
              <span className="flex gap-3">
                <History />
                Sales History
              </span>
            </Link>
          </li>
          <li>
            <Link to="/sales-invoices">
              <span className="flex gap-3">
                <Receipt />
                Sales Invoices
              </span>
            </Link>
          </li>
        </ul>
        {/* Purchases */}
        <button
          type="button"
          className="dropdown-button-primary flex items-center justify-between"
          data-collapse-toggle="dropdown-purchases"
        >
          <span className="flex gap-3">
            <Box />
            Purchases
          </span>
          <ChevronLeft className="rotate-270" />
        </button>
        <ul
          className="dropdown flex hidden w-full flex-col gap-2 px-4"
          id="dropdown-purchases"
        >
          <li>
            <Link to="/new-purchase-order">
              <span className="flex gap-3">
                <Plus />
                New Purchase Order
              </span>
            </Link>
          </li>
          <li>
            <Link to="/purchase-order-history">
              <span className="flex gap-3">
                <History />
                Purchase Order History
              </span>
            </Link>
          </li>
          <li>
            <Link to="/purchase-invoices">
              <span className="flex gap-3">
                <Receipt />
                Purchase Invoices
              </span>
            </Link>
          </li>
          <li>
            <Link to="/supplier-management">
              <span className="flex gap-3">
                <People />
                Supplier Management
              </span>
            </Link>
          </li>
        </ul>
        {/* Reporting */}
        <button
          type="button"
          className="dropdown-button-primary flex items-center justify-between"
          data-collapse-toggle="dropdown-reporting"
        >
          <span className="flex gap-3">
            <PieChart />
            Reporting
          </span>
          <ChevronLeft className="rotate-270" />
        </button>
        <ul
          className="dropdown flex hidden w-full flex-col gap-2 px-4"
          id="dropdown-reporting"
        >
          <li>
            <Link to="/sales-reports">
              <span className="flex gap-3">
                <PieChart />
                Sales Reports
              </span>
            </Link>
          </li>
          <li>
            <Link to="/inventory-reports">
              <span className="flex gap-3">
                <Box />
                Inventory Reports
              </span>
            </Link>
          </li>
        </ul>
        {/* Settings */}
        <button
          type="button"
          className="dropdown-button-primary flex items-center justify-between"
          data-collapse-toggle="dropdown-settings"
        >
          <span className="flex gap-3">
            <Settings />
            Settings
          </span>
          <ChevronLeft className="rotate-270" />
        </button>
        <ul
          className="dropdown flex hidden w-full flex-col gap-2 px-4"
          id="dropdown-settings"
        >
          <li>
            <Link to="/general-settings">
              <span className="flex gap-3">
                <SettingsApplications />
                General Settings
              </span>
            </Link>
          </li>
          <li>
            <Link to="/user-management">
              <span className="flex gap-3">
                <People />
                User Management
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
