/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* Div Tag for complete page */}
      <div class="w-full h-screen bg-indigo-100 ">
        {/* Div Tag for Side Nav Bar */}
        <div
          class="w-20  h-screen bg-indigo-900 absolute
          overflow-hidden
         top-0 left-0
         transition ease-in duration-200
         hover:w-60
         hover:overflow-visible
        " >
          {/* Div Tag for Logo */}
          <div class="w-14 py-1 px-1 m-auto">
            <img
              src="https://img.icons8.com/color/96/EEF2FF/abc.png"
              alt="logo"
            />
          </div>
          {/*  Nav Options */}
          <nav class="h-5/6">
            <ul class="h-screen flex flex-col  justify-around ">
              <li>
                <a
                  href=""
                  class="list-item
                "
                >
                  <img
                    src="https://img.icons8.com/material-outlined/35/EEF2FF/class.png"
                    alt=""
                  />
                  <p class="list-item-name">Live Class</p>
                </a>
              </li>
              <li>
                <a href="" class="list-item">
                  <img
                    src="https://img.icons8.com/dotty/35/EEF2FF/ask-question.png"
                    alt=""
                  />
                  <p class="list-item-name">Ask</p>
                </a>
              </li>
              <li>
                <a href="" class="list-item">
                  <img
                    src="https://img.icons8.com/ios-filled/35/EEF2FF/student-registration.png"
                    alt=""
                  />
                  <p class="list-item-name">For Students</p>
                </a>
              </li>
              <li>
                <a href="" class="list-item">
                  <img
                    src="https://img.icons8.com/ios-filled/35/EEF2FF/parent-guardian.png"
                    alt=""
                  />
                  <p class="list-item-name">For Parents</p>
                </a>
              </li>
              <li>
                <a href="" class="list-item">
                  <img
                    src="https://img.icons8.com/ios-filled/35/EEF2FF/training.png"
                    alt=""
                  />
                  <p class="list-item-name">Teach at ABC</p>
                </a>
              </li>
              <li>
                <a href="" class="list-item">
                  <img
                    src="https://img.icons8.com/pastel-glyph/35/EEF2FF/saving-book.png"
                    alt=""
                  />
                  <p class="list-item-name">Study Packages</p>
                </a>
              </li>
              <li>
                <a href="" class="list-item pb-14">
                  <img
                    src="https://img.icons8.com/metro/35/EEF2FF/add-user-male.png"
                    alt=""
                  />
                  <p class="list-item-name">Register with ABC</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
