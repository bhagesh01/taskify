
"use client"
import React from 'react'
import Tasks from '../Components/Tasks/Tasks'
import { useGlobalState } from '../context/globalProvider';

const DashBoard = () => {
  const { tasks } = useGlobalState();
  return (
    <Tasks title="All Tasks" tasks={tasks} />
  )
}

export default DashBoard