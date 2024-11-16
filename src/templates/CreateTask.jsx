import React from 'react'

function CreateTask() {
  return (
    <div className="mt-14 mb-10 p-14 bg-zinc-800 rounded-lg">
        <form action="" className="w-full flex items-center justify-between gap-5">
          <div className="w-1/2">
            {" "}
            <h3 className="text-xl text-gray-300 mb-1" >Task Title</h3>
            <input className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border" type="text" placeholder="Task" />
            <h3 className="text-xl text-gray-300 mb-1" >Date</h3>
            <input className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border" type="date" name="" id="" />
            <h3 className="text-xl text-gray-300 mb-1" >Assign To</h3>
            <input className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border" type="text" name="" id="" placeholder="Employee Name" />
            <h3 className="text-xl text-gray-300 mb-1" >Category</h3>
            <input className=" text-lg py-2 px-2 w-4/5 mb-5 rounded outline-none bg-transparent border" type="text" name="" id="" placeholder="Designing, Devlopment etc" />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <h3 className="text-xl text-gray-300 mb-1" >Description</h3>
            <textarea name="" id="" cols="30" rows="10" className="w-full h-50 text-lg py-2 px-4 outline-none rounded bg-transparent border "></textarea>
            <button className="bg-emerald-700 hover:bg-emerald-700/50 w-full py-2 rounded text-lg ">Create task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask