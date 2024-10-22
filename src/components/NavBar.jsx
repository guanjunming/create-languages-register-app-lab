const NavBar = ({ onSelectTab, selectedTab }) => {
  let cssClasses = "rounded-md px-3 py-1 font-medium";

  return (
    <nav className="bg-gray-800 ">
      <div className="max-w-screen-xl mx-auto p-4">
        <ul className="flex space-x-6">
          <li>
            <button
              className={`${cssClasses} ${
                selectedTab === "languages"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => onSelectTab("languages")}
            >
              Languages
            </button>
          </li>
          <li>
            <button
              className={`${cssClasses} ${
                selectedTab === "users"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => onSelectTab("users")}
            >
              Users
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
