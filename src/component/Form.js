import React from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory()
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Basic Information
            </p>
          </div>

          <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div>
              <label
                for="first-name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                First name*
              </label>
              <input
                name="first-name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                for="last-name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Last name*
              </label>
              <input
                name="last-name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                for="mobile-number"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Mobile Number
              </label>
              <input
                name="mobile-number"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
   <div class="">
              <label
                for="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email*
              </label>
              <input
                name="email"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="gender"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Gender*
              </label>
              <input
                name="gender"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                for="DOB"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Date of birth
              </label>
              <input
              type='date'
                name="DOB"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                for="year"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Year
              </label>
              <input
              type='number'
                name="year"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
          <button onClick={()=>{history.push('/')}} className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>
  
         
        </div>
   
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
