import { Search } from "lucide-react";

function Searchbar() {
  return (
    <form id="search-bar" className="w-full max-w-sm">
      <div className="flex w-full items-center justify-start rounded-lg bg-gray-800 px-2 ring-blue-500 hover:ring-1 focus:outline-1">
        <Search className="pointer-events-none flex size-10 items-center px-2" />
        <input
          type="search"
          id="default-search"
          className="w-full border-none bg-transparent px-2 py-0.5 hover:cursor-text focus:border-b-2 focus:border-b-blue-500 focus:ring-0 focus:outline-none"
          placeholder="Search..."
          required
        />
      </div>
    </form>
  );
}

export default Searchbar;
