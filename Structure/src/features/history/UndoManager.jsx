import React, { useState } from 'react';

export default function UndoManager() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]); // This is our Stack

  const handleChange = (e) => {
    const newVal = e.target.value;
    setHistory(prev => [...prev, text]); // Push current to stack
    setText(newVal);
  };

  const undo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1)); // Pop from stack
    setText(previous);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-800">Smart Editor</h2>
        <button 
          onClick={undo} 
          disabled={history.length === 0}
          className="text-sm bg-slate-800 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Undo
        </button>
      </div>
      <textarea 
        className="w-full h-32 p-3 border rounded-lg focus:border-blue-500 outline-none"
        value={text}
        onChange={handleChange}
        placeholder="Type something to test the stack..."
      />
    </div>
  );
}