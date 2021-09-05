import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/* header */}
      <div class="bg-blue-900 p-4 flex justify-between items-center">

        {/* left Side */}
        <div class="flex items-center">
          <img src="https://freepikpsd.com/media/2020/11/academy-png-6.png" alt="Logo" width="70px" height="100px" class="mr-2" />
          <a href="#" class="inline-block p-2 text-indigo-200 hover:text-blue-100">Home</a>
          <a href="#" class="inline-block p-2 text-indigo-200 hover:text-blue-100">About</a>
        </div>
        {/* Right Side */}
        <div class="hidden md:block">
          <a href="#" class="inline-block py-2 px-4 text-yellow-100  hover:bg-blue-800 text-yellow-200 rounded transition ease-in duration-150">Login</a>
          <a href="#" class="inline-block py-2 px-4 text-yellow-100  hover:bg-blue-800 text-yellow-200 rounded transition ease-in duration-150">Sign Up</a>
        </div>
      </div>
      {/* hero============================ */}
      <div class="md:flex justify-between py-20 px-10 bg-blue-800 text-blue-200">
        {/* left Side */}
        <div class="md:w-1/2 mb-10 md:mb-0 ">
          <h2 class="mb-5 md:text-5xl lg:text-6xl text-white text-2xl">Welcome to Academia!</h2>
          <p class="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div class="flex item-center ">
            <a href="#" class="inline-block py-3 text-lg px-6 bg-gray-400 text-gray-800 rounded mr-5 mb-5" >Learn More</a>
            <a href="#" class="inline-block text-lg py-3 px-6 bg-yellow-700 text-yellow-2   00 rounded mr-5 mb-5">Get Started</a>
          </div>
        </div>
        {/* Right Side */}
        <div class="md:w-1/2 mb-10 md:mb-0">
          <img src="https://images.unsplash.com/photo-1468273519810-d3fe4c125cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" class="w-full rounded shadow-2xl" />
        </div>
      </div>
      {/* features ============================ */}
      <h2 class=" bg-blue-900 text-white text-center text-2xl">Why Should You Join here ?</h2>
      <div class="md:flex py-16 px-10 bg-blue-900 text-blue-200 text-center">

        <div class="mr-2 text-center">
          <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" class="w-full rounded border-2 border-solid border-blue-600 shadow-2xl mb-5" />
          <p>Wide Range</p>
        </div>
        <div class="mr-2 text-center">
          <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" class="w-full rounded border-2 border-solid border-blue-600 shadow-2xl mt-10 mb-5" />
          <p>Distinct Genres</p>
        </div>
        <div class="mr-2 text-center">
          <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" class="w-full rounded border-2 border-solid border-blue-600 shadow-2xl mb-5" />
          <p>Solitude space</p>
        </div>
        <div class="mr-2 text-center">
          <img src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" class="w-full rounded border-2 border-solid border-blue-600 shadow-2xl mt-10 mb-5" />
          <p>Rentals</p>
        </div>
      </div>
      {/* footer and newsletter ============================ */}
      <div class="bg-blue-800 px-10 py-10 flex justify-between text-blue-400">
        {/* left */}
        <div class="md:w-3/12">
          <h3 class="text-lg mb-2">Join the Newsletter</h3>
          <form class="flex">
            <input type="email" class="w-full rounded-l py-3 px-4 outline-none focus:bg-blue-100" />
            <button class="bg-red-300 text-red-800 rounded-r px-4 hover:bg-red-400">Join</button>
          </form>
        </div>
        {/* right */}
        <div class="flex items-center">
          Copyright &copy; Academia made by Geekyants
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
