import { Search } from "@mui/icons-material";

function Searchbar() {
  return (
    <form id="search-bar">
      <div className="flex">
        <div className="flex items-center justify-between rounded-lg bg-gray-800">
          <div className="pointer-events-none flex items-center px-2">
            <Search />
          </div>
          <input
            type="search"
            id="default-search"
            className="rounded-lg border-none bg-transparent"
            placeholder="Search..."
            required
          />
        </div>
      </div>
    </form>
  );
}

export default Searchbar;
