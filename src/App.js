
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    title: '',
    date: '',
    statuss: '',
    priority: false,
});

const [taskList, setTaskList] = useState([]);

console.log(tasks);

const handleOnChange = (e) => {
  if (e.target.name === 'priority') {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.checked
    });
  }
  else {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value
    });
  }
}

const handleAdd = () => {
  // const sampleList = [...taskList];
  // sampleList.push(tasks);
  // setTaskList(sampleList);

  setTaskList([...taskList, tasks]);
};
  return (
    <div className="App">
      <div className='h-screen w-auto bg-blue-50 px-6 py-3'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col'>
            <label>First Name</label>
            <input 
            name='title' 
            onChange={(e) => handleOnChange(e)} 
            value={tasks.title}
            placeholder='task'
            />
          </div>
          <div className='flex flex-col'>
            <label>date</label>
            <input
            name='date'
            type='date'
            onChange={(e) => handleOnChange(e)}
            value={tasks.date}
            placeholder='12/12/2021'
             />
          </div>
          <div className='flex flex-col'>
            <label>priority</label>
            <input
            name='priority'
            type='checkbox'
            onChange={(e) => handleOnChange(e)}
            checked={tasks.priority} 
            />
          </div>
          <button className='bg-blue-400 py-2 px-4 min-w-[6rem] rounded'
          onClick={() => handleAdd()}
          >
            Add
          </button>
        </div>
        <div className='mt-4'>
            {taskList.map((task, idx) => (
              <div key={idx}>
                <div>{task.title}</div>
                <div>{task.date}</div>
                <div>{task.priority}</div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
