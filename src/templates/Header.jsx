import React from "react";

function Header(props) {
  const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
  };
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <h1 className="text-lg sm:text-xl lg:text-2xl font">
        Hello 👋 <br />
        <span className="text-xl sm:text-2xl lg:text-3xl">
          {props.name || "Admin"}
        </span>
      </h1>
      <button
        onClick={logoutUser}
        className="text-sm sm:text-lg lg:text-xl bg-red-600 hover:bg-red-600/75 rounded-md px-2 sm:px-3 lg:px-4 py-1 sm:py-2"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;
