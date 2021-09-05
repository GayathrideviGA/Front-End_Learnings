// Responsive Design
// Using responsive utility variants to build adaptive user interfaces.
import React from 'react';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://i.pinimg.com/originals/c2/bf/cf/c2bfcfe50a85eb0097d99f70f32ffa0a.jpg" alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-blue-900 font-bold">Books Zone</div>
            <a href="https://i.pinimg.com/originals/c2/bf/cf/c2bfcfe50a85eb0097d99f70f32ffa0a.jpg" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">A place to find your perfect book partner</a>
            <p class="mt-2 text-gray-500">Some people like to read on a screen. Other people need the variety and artistry, the sight, smell, and feel of actual books.They love seeing them on their shelves; they love having shelves for them.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
