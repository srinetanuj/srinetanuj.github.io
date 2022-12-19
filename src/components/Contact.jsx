import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className=" w-full h-full bg-gradient-to-b from-sky-100 to-sky-200 p-4 text-gray-800">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="text-center pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">Contact</p>
          <p className="py-6">Submit the below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/80c1308f-079d-4d1c-add2-652f3a68d886" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white bg-gray-700"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 my-1 rounded-md focus:outline-none text-white bg-gray-700"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 
                    rounded-md text-white bg-gray-700 focus:outline-none"
            ></textarea>
            <button className="text-gray-900 bg-gradient-to-b from-cyan-900 to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
