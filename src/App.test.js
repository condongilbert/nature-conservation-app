import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Nature Conservation Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task} - {task.points} points</li>
        ))}
      </ul>
    </div>
  );
}

export default App;