import React from "react";

function Story() {
  return (
    <div>
      <section class="hero text-gray-600 body-font  px-16 py-1 ">
        <div
          class="container mx-auto flex  md:flex-row flex-col items-center"
          style={{ height: "100%" }}
        >
          <div class="about-banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            {/* class="object-cover object-center rounded" */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Story
            </h1>
            <p class="mb-8 leading-relaxed">
              We saw that existing virtual assistants didn't speak many
              languages and that establishing custom instructions was
              complicated, so we embarked on a quest to create our own virtual
              assistant and make everything much easier.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-first border-0 py-2 px-6 focus:outline-none hover:bg-fourth rounded text-lg">
                <a href="#team">Meet our Team</a>
              </button>
            </div>
          </div>
        </div>
        <div id="team"></div>
      </section>
    </div>
  );
}

export default Story;
