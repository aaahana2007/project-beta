import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
  return (
    <>
      <header class="nav text-gray-600 body-font bg-second">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-first rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Jarvis</span>
            </a>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first "
              >
                Home
              </motion.a>
            </Link>
            <motion.a
              href="/#product"
              whileHover={{ zoom: 1.2 }}
              class="mr-5 text-black  hover:text-first "
            >
              Product
            </motion.a>
            <Link to="/pricing">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first "
              >
                Pricing
              </motion.a>
            </Link>
            {/* <Link to={{ pathname: "/", hash: "#product" }}> */}
            {/* </Link> */}

            <Link to="/about">
              <motion.a
                class="mr-5 text-black  hover:text-first "
                whileHover={{ zoom: 1.2 }}
              >
                About
              </motion.a>
            </Link>

            <Link to="/features">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first  "
              >
                Features
              </motion.a>
            </Link>
            <Link to="/gallery">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first "
              >
                Demonstration
              </motion.a>
            </Link>
          </nav>
          <Link to="/trial">
            <button class="inline-flex items-center bg-first border-0 py-2 px-6 focus:outline-none hover:bg-fourth rounded text-white text-base mt-4 md:mt-0 ">
              Trial
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Nav;
