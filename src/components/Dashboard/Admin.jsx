import React from "react";
import Header from "../../templates/Header";
import CreateTask from "../../templates/CreateTask";
import AllTask from "../../templates/AllTask";

function Admin() {
  return (
    <div className="h-screen px-4 sm:px-10 lg:px-20 py-4">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default Admin;
