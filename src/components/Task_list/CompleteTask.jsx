import React from 'react'

function CompleteTask({data}) {
  return (
    <div className="h-auto sm:h-full w-full sm:w-96 p-5 bg-slate-600 rounded-xl flex-shrink-0">
    <div className="flex justify-between items-center">
      <h3 className="bg-rose-600 px-3 py-1 rounded-lg text-sm sm:text-base">
      {data.category}
      </h3>
      <h4 className="text-sm sm:text-base">{data.date}</h4>
    </div>
    <h2 className="mt-5 text-xl sm:text-3xl font-semibold">{data.title}</h2>
    <p className="text-sm sm:text-lg mt-2">
    {data.description}
    </p>
    <div className="mt-20">
      <button className="bg-green-600 p-2 rounded-md">Mark as Completed</button>
    </div>
  </div>  )
}

export default CompleteTask