import React from "react";

function FeaturesHero() {
  return (
    <div>
      <section class="hero text-gray-600 body-font  px-16 py-1 ">
        <div
          class="container mx-auto flex  md:flex-row flex-col items-center"
          style={{ height: "100%" }}
        >
          <div class="features-banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            {/* class="object-cover object-center rounded" */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Features
            </h1>
            <p class="mb-8 leading-relaxed">
              Jarvis is an AI system. It has been built to control his home and
              perform tasks, such as turning the lights off or on, control a
              particular room’s temperature, playing music, opening doors, and
              so on. The home AI uses natural language processing and speech
              recognition to understand the user’s voice, and the context of the
              command, in order to perform the tasks it is asked to do. It also
              has facial recognition capabilities and, therefore, can open doors
              of the home for known guests, or tell where each member of a
              family is.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-first border-0 py-2 px-6 focus:outline-none hover:bg-fourth rounded text-lg">
                <a href="#stats">Stats</a>
              </button>
            </div>
          </div>
        </div>
        <div id="stats"></div>
      </section>
    </div>
  );
}

export default FeaturesHero;
