import { useState } from 'react';
import Task from './Task/Task';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '../../public/vite.svg';
import './App.css';

type Task = {
  text: string;
  checked: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      <button onClick={() => setTasks([...tasks, { text: 'text', checked: false }])}>New Task</button>

      <h1>React+TS todolist</h1>
      <div className="card container">
        {tasks.length
          ? tasks.map(({ text }) => {
            return <Task text={text} />;
          })
          : null
        }
      </div>
    </>
  );
}

export default App;
