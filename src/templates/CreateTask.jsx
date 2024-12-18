import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

function CreateTask() {
  const [UserData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const Task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    const data = UserData; //to get employee data from localStorage 

    data.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(Task);
        console.log(elem);
        
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });
    
    
    setUserData(data);
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };
  return (
    <div className="mt-10 mb-10 px-10 py-8 bg-zinc-800 rounded-lg">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="w-full flex items-center justify-between gap-5"
      >
        <div className="w-1/2">
          {" "}
          <h3 className="text-xl text-gray-300 mb-1">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border"
            type="text"
            placeholder="Task"
          />
          <h3 className="text-xl text-gray-300 mb-1">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border"
            type="date"
            name=""
          />
          <h3 className="text-xl text-gray-300 mb-1">Assign To</h3>
          <input
            value={assignTo}
            onChange={(e) => {
              setAssignTo(e.target.value);
            }}
            className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border"
            type="text"
            name=""
            placeholder="Employee Name"
          />
          <h3 className="text-xl text-gray-300 mb-1">Category</h3>
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border"
            type="text"
            name=""
            placeholder="Designing, Devlopment etc"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h3 className="text-xl text-gray-300 mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full h-50 text-lg py-2 px-4 outline-none rounded bg-transparent border "
          ></textarea>
          <button className="bg-emerald-700 hover:bg-emerald-700/50 w-full py-2 rounded text-lg ">
            Create newTask
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
