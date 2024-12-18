import React from "react";

function TasklistCard({ count }) {
  const { active, newTask, completed, failed } = count;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-stone-950">
       <div className="rounded-xl py-8 px-9  bg-purple-300">
        <h2 className="text-3xl sm:text-4xl font-semibold">{newTask}</h2>
        <h3 className="text-xl sm:text-2xl font-medium">New task</h3>
      </div>
      <div className="rounded-xl py-8 px-9 bg-sky-500">
        <h2 className="text-3xl sm:text-4xl font-semibold">{active}</h2>
        <h3 className="text-xl sm:text-2xl font-medium">Active task</h3>
      </div>
      <div className="rounded-xl py-8 px-9 bg-lime-400">
        <h2 className="text-3xl sm:text-4xl font-semibold">{completed}</h2>
        <h3 className="text-xl sm:text-2xl font-medium">Completed task</h3>
      </div>
      <div className="rounded-xl py-8 px-9 bg-red-400">
        <h2 className="text-3xl sm:text-4xl font-semibold">{failed}</h2>
        <h3 className="text-xl sm:text-2xl font-medium">Failed task</h3>
      </div>
    </div>
  );
}

export default TasklistCard;
