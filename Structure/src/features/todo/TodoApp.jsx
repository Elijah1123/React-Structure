import React, { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Task Tracker</h2>
      <div className="flex gap-2 mb-4">
        <input 
          className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="p-2 bg-slate-50 rounded border border-slate-100 text-slate-600">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}