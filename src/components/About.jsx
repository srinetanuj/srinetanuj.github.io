import React from "react";
// import aboutPic from "../sources/about.png"
import aboutPic from "../sources/about.jpg";

const About = () => {
  return (
    <div>
      <div
        name="About"
        className="w-full pt-20 h-screen bg-gradient-to-b  from-sky-100 to to-sky-200
    text-gray-800"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-8 m-auto mt-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600 ">
              About me
            </p>
          </div>

          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-end h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full  md:mt-0 ">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Hi, I'm Anuj
              </h2>
              <br />
              <p className="text-md sm:text-xl">
                An Aspiring Full Stack Web Developer, looking forward to
                utilize my skills in order to build optimized 
                applications, always ready to learn and make use of new skill
                sets with a mind set of try and fail again and again till you
                succeed.
              </p>
            </div>
            <div>
              <img
                src={aboutPic}
                alt="about.pic"
                className="rounded-2xl mx-auto w-2/5 md:w-fll mr-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
