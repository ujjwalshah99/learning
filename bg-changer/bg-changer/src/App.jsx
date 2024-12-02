import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#1a1a1a");

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-between"
        style={{ backgroundColor: color }}
      >
        <header className="p-4">
          <h1>This is a background changer</h1>
        </header>
        <h3>This is a basic project for learning </h3>
        <footer className="flex justify-center pb-4">
          <button
            type="button"
            onClick={() => setColor("#1E3A8A")}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Blue
          </button>
          <button
            type="button"
            onClick={() => setColor("#111827")}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Dark
          </button>
          <button
            type="button"
            onClick={() => setColor("#15803D")}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Green
          </button>
          <button
            type="button"
            onClick={() => setColor("#B91C1C")}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => setColor("#F59E0B")}
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={() => setColor("#6B21A8")}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;

