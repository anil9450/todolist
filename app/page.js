'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }])
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1);
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className='flex items-center justify-between mb-5' key={i}>
          <div className='flex items-baseline justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-semibold text-green-500'>{t.desc}</h6>
          </div>
          <button className='text-white bg-red-500 p-2 rounded' onClick={() => { deleteHandler(i) }}>
            Delete
          </button>
        </li>
      );
    })
  }

  return (
    <div>
      <h1 className='bg-black text-white p-2 m-3 text-center text-3xl rounded'>Anil's Todo List</h1>
      <form className='pl-3 text-center' onSubmit={submitHandler}>
        <input type='text' className='border-4 border-black-1100 text-center p-2 rounded'
          placeholder='Enter Task Here' value={title} onChange={(e) => { settitle(e.target.value) }} />
        <input type='text' className='border-4 border-black-1100 text-center p-2 rounded ml-20'
          placeholder='Enter Description Here' value={desc} onChange={(e) => { setdesc(e.target.value) }} />
        <button className='border-4 border-black-1100 rounded ml-20 p-2 bg-black text-white'>Add Task</button>
      </form>
      <hr className='mt-4 m-4 rounded' />
      <div className='p-4 bg-slate-200 mt-4 m-4 rounded'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default page
