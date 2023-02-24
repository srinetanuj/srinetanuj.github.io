import React from "react";
import Chargebee from "../sources/Chargebee.png";
import Crmhub from "../sources/Crmhub.png";
import Fitnesshub from "../sources/Fitnesshub.png";
import RodanPlus from "../sources/RodanPlus.png";

const Projects = () => {
  const newtab = (url) => {
    window.open(url);
  };

  return (
    <div
      name="Project"
      class="bg-gradient-to-b  from-sky-100 to to-sky-200  text-gray-800 md: h-full"
    >
      <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div class="pb-8 mt-20 md:mt-20 text-center">
          <p class="text-4xl font-bold inline border-b-4 border-b-black ">
            Projects
          </p>
          <p class="py-6">These are some beautiful projects that I made </p>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0">
          <div class="flex flex-col sm:flex-row max-w-screen-lg">
            <div class="bg-gradient-to-r from-sky-800 to-sky-700 rounded-lg text-white md:w-2/3">
              <div class="flex items-center justify-center">
                <button
                  class="w-1/3 px-4 py-3 m-4 duration-200 hover:scale-105 rounded-md font-bold bg-white text-sky-900 "
                  onClick={() =>
                    newtab("https://projectfitnesshub.netlify.app/")
                  }
                >
                  {" "}
                  Project
                </button>
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 rounded-md font-bold bg-white text-sky-900"
                  onClick={() =>
                    newtab("https://github.com/srinetanuj/hissing-wrench-7979")
                  }
                >
                  {" "}
                  Github{" "}
                </button>
              </div>{" "}
              <img
                src={Fitnesshub}
                alt="fitnesshub"
                class="rounded-md duration-300 hover:scale-105"
                onClick={() => newtab("https://projectfitnesshub.netlify.app/")}
              />{" "}
            </div>
            <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">Fitnesshub</h1>
              <h1>
                Fitness is the most accurate, comprehensive nutrition tracking
                app and it is clone website of cronometer.com.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p class="font-semibold">
                Home page display,Product page diasplay, Blog page
                dispalay,Forums page display, About page display, Login, SignUp
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p class="font-bold">React, Chakra UI, CSS, Redux, JavaScript</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row max-w-screen-lg">
            <div class="bg-gradient-to-r from-sky-800 to-sky-700 rounded-lg text-white md:w-2/3">
              <div class="flex items-center justify-center">
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 font-bold rounded-md bg-white text-sky-900"
                  onClick={() =>
                    newtab("https://startling-entremet-4a5c73.netlify.app/")
                  }
                >
                  {" "}
                  Project
                  {/* </a> */}
                </button>
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 rounded-md font-bold bg-white text-sky-900"
                  onClick={() =>
                    newtab("https://github.com/srinetanuj/Hubspot-clone")
                  }
                >
                  {" "}
                  Github
                </button>
              </div>{" "}
              <img
                src={Crmhub}
                alt="crmhub"
                class="rounded-md duration-300 hover:scale-105"
                onClick={() =>
                  newtab("https://startling-entremet-4a5c73.netlify.app/")
                }
              />
            </div>
            <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">CRMhub</h1>
              <h1>
                CRMhub is clone website of hubspot.com. It is CRM platform has
                all the tools and integrations you need for marketing, sales,
                content management, and customer service.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p class="font-semibold">Home page display</p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p class="font-bold">React, Chakra UI, Chakra Icons</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row max-w-screen-lg">
            <div class="bg-gradient-to-r from-sky-800 to-sky-700 rounded-lg  text-white md:w-2/3">
              <div class="flex items-center justify-center">
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 font-bold rounded-md bg-white text-sky-900"
                  onClick={() =>
                    newtab("https://rodan-fileds-12-masai.netlify.app/")
                  }
                >
                  {" "}
                  Project{" "}
                </button>
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 rounded-md font-bold bg-white text-sky-900"
                  onClick={() =>
                    newtab(
                      "https://github.com/ramNgithub/Rodan-Fields.com-Clone"
                    )
                  }
                >
                  {" "}
                  Github
                  {/* </a> */}
                </button>
              </div>{" "}
              <img
                src={RodanPlus}
                alt="Lyst"
                class="rounded-md duration-300 hover:scale-105"
                onClick={() =>
                  newtab("https://rodan-fileds-12-masai.netlify.app/")
                }
              />
            </div>
            <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
                RODAN + FIELDS Clone
              </h1>
              <h1>
                Rodan + Fields Gives You the Best Skin of Your Life and the
                Confidence that Comes with It.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p class="font-semibold">
                Home Page display, Perks and Program Page display, Consultant
                Page display, Signup Page and Login page, Sorting, Cart Page{" "}
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p class="font-bold">HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row max-w-screen-lg">
            <div class="bg-gradient-to-r from-sky-800 to-sky-700 rounded-lg text-white md:w-2/3">
              <div class="flex items-center justify-center">
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 rounded-md font-bold bg-white text-sky-900"
                  onClick={() =>
                    newtab("https://warm-cranachan-7f8b33.netlify.app/")
                  }
                >
                  {" "}
                  Project{" "}
                </button>
                <button
                  class="w-1/3 b-rounded px-4 py-3 m-4 duration-200 hover:scale-105 rounded-md font-bold bg-white text-sky-900"
                  onClick={() =>
                    newtab("https://github.com/srinetanuj/Chargebee-clone")
                  }
                >
                  {" "}
                  Github
                  {/* </a> */}
                </button>
              </div>{" "}
              <img
                src={Chargebee}
                alt="Lyst"
                class="rounded-md duration-300 hover:scale-105"
                onClick={() =>
                  newtab("https://warm-cranachan-7f8b33.netlify.app/")
                }
              />
            </div>
            <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">Chargebee Clone</h1>
              <h1>
                Chargebee is the subscription billing and revenue management
                platform that lets you solve for your today, and scale for your
                tomorrow.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p class="font-semibold">
                Home page display, Costomers page display, Partners page
                display, Login, Signup
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p class="font-bold">HTML, CSS, JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
