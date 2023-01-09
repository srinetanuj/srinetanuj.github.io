import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <div
      name="Contact"
      class="bg-gradient-to-b from-sky-100 to-sky-200 w-full md: h-full"
    >
      <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div class="pb-8 mt-20 text-center md:mt-20">
          <p class="text-4xl font-bold inline border-b-4 border-b-black ">
            Contact
          </p>
          <p class="py-6">
            You can get in touch with me on submitting this form
          </p>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0">
          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="flex flex-col justify-top  h-full sm:w-1 md:w-2/3 pl-8 pb-4 ">
              <div className="flex flex-row h-10 justify-left">
                <a href="https://www.linkedin.com/in/anujsingh0109/">
                  {" "}
                  <div className=" h-10 w-10 text-blue text-sky-700">
                    <AiFillLinkedin className="w-full h-full" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/anujsingh0109/">
                  {" "}
                  <div className=" h-10 text-2xl ml-4 text-sky-700">
                    Linkedin
                  </div>
                </a>
              </div>
              <div className="flex flex-row h-10 justify-left mt-4">
                <a href="https://github.com/srinetanuj">
                  {" "}
                  <div className=" h-10 w-10">
                    <AiFillGithub className="w-full h-full text-gray-700" />
                  </div>
                </a>
                <a href="https://github.com/srinetanuj">
                  {" "}
                  <div className=" h-10 text-2xl ml-4 text-gray-700">
                    Github
                  </div>{" "}
                </a>
              </div>
              <div className="flex flex-row h-10 justify-left mt-4">
                <a href="mailto:srinetkumaranuj@gmail.com">
                  {" "}
                  <div className=" h-10 w-10">
                    <SiGmail className="w-full h-full text-gray-700" />
                  </div>
                </a>
                <a href="mailto:srinetkumaranuj@gmail.com">
                  <div className=" h-10 text-2xl ml-4 text-gray-700">Mail</div>
                </a>
              </div>
              <div className="flex flex-row h-10 justify-left mt-4">
                <div className=" h-10 w-10">
                  <IoMdCall className="w-full h-full text-sky-700" />
                </div>
                <div className=" h-10 text-2xl ml-4 text-sky-700">
                 7678109410
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-black w-full ">
              <form
                action="https://getform.io/f/80c1308f-079d-4d1c-add2-652f3a68d886"
                method="POST"
                className="flex flex-col w-full "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2  border-2 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your email"
                  className="my-4 p-2  border-2 rounded-md focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  rows="10"
                  className="p-2 border-2 rounded-md focus:outline-none"
                ></textarea>
                <button className="text-gray-900 bg-gradient-to-b from-cyan-900 to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact Me
           </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
