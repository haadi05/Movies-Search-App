import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        placeholder="Search"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        className="bg-[#414141] rounded-3xl px-6 py-3 my-4 w-100 outline-0 text-white"
      />
      <Link
        // onClick={handleSearch}
        to={`/searchresult/${userInput}`}
        className="bg-[#414141] rounded-4xl my-4 p-3 cursor-pointer hover:bg-[#313131]"
      >
        <img src="./src/assets/search.svg" className="w-6" />
      </Link>
    </div>
  );
}

export default Navbar;
