import React from "react";
import Header from "../../templates/Header";
import TasklistCard from "../../templates/TasklistCard";
import Tasklist from "../Task_list/Tasklist";

function Employee(props) {
  const { firstName, taskCount, tasks } = props.data;
  console.log(props.data.tasks);
  
  return (
    <div className="h-screen px-4 sm:px-10 lg:px-20 py-10">
      <Header changeUser={props.changeUser} name={firstName} />
      <TasklistCard count={taskCount} />
      <Tasklist tasks={tasks} />
    </div>
  );
}

export default Employee;
