import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <br />
      <button class="bg-red-500 hover:bg-red-700 ...">
        Hover me
      </button>
      <br />
      <br />
      <button class="bg-green-500 active:bg-green-700 ...">
        Click me
      </button>
      <br />
      <br />
      <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
        <p class="text-indigo-600 group-hover:text-gray-900 ...">Group Hover Effect</p>
        <p class="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of starting templates.</p>
      </div>
      <button class="transform motion-safe:hover:scale-110 ...">
        Hover me
      </button>
    </React.Fragment>
  );
}

export default App;
