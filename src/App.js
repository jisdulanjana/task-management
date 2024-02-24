
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    title: '',
    date: '',
    statuss: '',
    priority: '',
});

console.log(tasks);

const handleOnChange = (e) => {
  setTasks({
    ...tasks,
    [e.target.name]: e.target.value
  });
}
  return (
    <div className="App">
      <div className='h-screen w-auto bg-red-300'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <label>First Name</label>
            <input 
            name='title' 
            onChange={(e) => handleOnChange(e)} 
            value={tasks.title}
            placeholder='task'
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
