import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import Button from '../components/Button.jsx';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filteredTasks =
    filter === 'active'
      ? tasks.filter((t) => !t.completed)
      : filter === 'completed'
      ? tasks.filter((t) => t.completed)
      : tasks;

  return (
    <div className="max-w-2xl mx-auto mt-10 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Task Manager</h2>

      {/* Input Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="bg-gray-700 text-white border border-gray-600 rounded-lg px-5 py-3 w-3/4 focus:ring-blue-500 focus:outline-none"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="ml-3">
          <Button onClick={addTask}>Add</Button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-9 mb-8">
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button variant="secondary" onClick={() => setFilter('active')}>Active</Button>
        <Button variant="danger" onClick={() => setFilter('completed')}>Completed</Button>
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center px-6 py-4 bg-gray-800 rounded-lg shadow ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}
          >
            <span onClick={() => toggleTask(index)} className="cursor-pointer text-lg">
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
