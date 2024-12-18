import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function Tasklist({ tasks }) {
  console.log(tasks);

  return (
    <div
      id="tasklist"
      className="h-auto sm:h-1/2 w-full mt-10 py-5 rounded-xl flex flex-wrap sm:flex-nowrap items-center justify-start gap-5 overflow-x-auto sm:overflow-x-scroll scrollbar-hide"
    >
      {tasks.map((e,i)=>{
              if (e.active) {
               return <AcceptTask key={i} data={e} />
              }
              if (e.newTask) {
               return <NewTask key={i} data={e} />
              }
              if (e.completed) {
               return <CompleteTask key={i} data={e} />
              }
              if (e.failed) {
               return <FailedTask key={i} data={e} />
              } 
      })}
    </div>
  );
}

export default Tasklist;
