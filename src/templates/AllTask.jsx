import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function AllTask() {
  const [UserData, setUserData] = useContext(AuthContext);
  const safeUserData = Array.isArray(UserData) ? UserData : [];
  
  return (
    <div className="rounded h-72">
      <div className="bg-zinc-700 p-4 flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 rounded mt-3">
        <h2 className="text-lg w-1/5 px-2 py-1 rounded-md text-black bg-teal-400 font-semibold">
          Name
        </h2>
        <h3 className="text-lg w-1/5 px-2 py-1 rounded-md text-black bg-purple-300 font-semibold">
          New Task
        </h3>
        <h3 className="text-lg w-1/5 px-2 py-1 rounded-md text-black bg-sky-500 font-semibold">
          Active Task
        </h3>
        <h3 className="text-lg w-1/5 px-2 py-1 rounded-md text-black bg-green-400 font-semibold">
          Completed Task
        </h3>
        <h3 className="text-lg w-1/5 px-2 py-1 rounded-md text-black bg-red-400 font-semibold">
          Failed Task
        </h3>
      </div>
      <div className="h-[80%] overflow-y-auto" id="ALLTask">
        {safeUserData.map((e, i) => (
          <div
            key={i}
            className="p-4 flex flex-wrap sm:flex-nowrap justify-between items-center mt-3 gap-2 overflow-y-auto"
          >
            <h3 className="text-md border-[4px]  border-gray-200 w-1/5 px-2 py-1 rounded-md text-white bg-teal-400/65 font-semibold">
              {e.firstName}
            </h3>
            <h3 className="text-md border-[4px] border-gray-200 w-1/5 px-2 py-1 rounded-md text-white bg-purple-300/70 font-semibold">
              {e.taskCount.newTask}
            </h3>
            <h3 className="text-md border-[4px] border-gray-200 w-1/5 px-2 py-1 rounded-md text-white bg-sky-500/85 font-semibold">
              {e.taskCount.active}
            </h3>
            <h3 className="text-md border-[4px] border-gray-200 w-1/5 px-2 py-1 rounded-md text-white bg-green-400/70 font-semibold">
              {e.taskCount.completed}
            </h3>
            <h3 className="text-md border-[4px] border-gray-200 w-1/5 px-2 py-1 rounded-md text-white bg-red-400/85 font-semibold">
              {e.taskCount.failed}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
