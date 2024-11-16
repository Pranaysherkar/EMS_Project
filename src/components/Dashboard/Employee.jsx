import React from 'react'
import Header from '../../templates/Header'
import TasklistCard from '../../templates/TasklistCard'
import Tasklist from '../Task_list/Tasklist'

function Employee() {
  return (
    <div className='h-screen px-4 sm:px-10 lg:px-20 py-10'>
      <Header/>
      <TasklistCard/>
      <Tasklist/>
    </div>
  )
}

export default Employee