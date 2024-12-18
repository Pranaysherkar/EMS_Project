import React from "react";

function NewTask({ data }) {
  return (
    <div className="h-auto sm:h-full w-full sm:w-96 p-5 bg-slate-600 rounded-xl flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-rose-600 px-3 py-1 rounded-lg text-sm sm:text-base">
          {data.category}{" "}
        </h3>
        <h4 className="text-sm sm:text-base">{data.date || data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl sm:text-3xl font-semibold">{data.title || data.taskTitle}</h2>
      <p className="text-sm sm:text-lg mt-2">{data.taskDescription}</p>
      <div className="mt-20">
        <button className="bg-green-600 p-2 rounded-md">Accept Task</button>
      </div>
    </div>
  );
}

export default NewTask;
