import React from "react";

function Construction() {
  return (
    <div>
      <section class="hero text-gray-600 body-font  px-16 py-1 ">
        <div
          class="container mx-auto flex  md:flex-row flex-col items-center"
          style={{ height: "100%" }}
        >
          <div class="construction-banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "></div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              UNDER CONSTRUCTION
            </h1>
            <p class="mb-8 leading-relaxed">Please check in later</p>
          </div>
        </div>
        <div id="team"></div>
      </section>
    </div>
  );
}

export default Construction;
