import { Avatar, ToggleButton, Typography } from "@mui/material";

function Header() {
  return (
    <header className="flex h-[6vh] w-full items-center justify-between border border-gray-800 bg-gray-900 px-4 py-2">
      <div className="flex items-center justify-center gap-2">
        <img src="../../icon.svg" className="size-8" />
        <Typography variant="h5" className="!font-bold">
          Lidio Stock
        </Typography>
      </div>
    </header>
  );
}

export default Header;
