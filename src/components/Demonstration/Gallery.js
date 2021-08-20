import React from "react";
import video from "../../data/video";
import ModalVideo from "react-modal-video";
import "./../../styling/main.css";
import youtubeThumbnail from "youtube-thumbnail";

class Gallery extends React.Component {
  state = {};

  componentDidMount = () => {
    for (let i = 0; i < video.length; i++) {
      this.state[i] = false;
    }
  };

  render() {
    return (
      <div>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-20  mx-auto">
            <div class="flex flex-col items-center justify-around text-center w-full mb-20">
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 py-2">
                Gallery with all the abilities of Jarvis
              </h1>
              <div class="w-16 h-1 rounded-full bg-first inline-flex mb-5"></div>
            </div>
            <div className="vids">
              {video.map((box, index) => {
                return (
                  <div className="vids-box xl:w-1/2 md:w-1/2 w-full">
                    <img
                      onClick={() => {
                        this.setState({
                          [index]: true,
                        });
                      }}
                      className="vids-img"
                      src={youtubeThumbnail(box.link).high.url}
                      alt=""
                    />

                    <button
                      className="vids-btn text-white bg-first border-0  w-full focus:outline-none hover:bg-fourth "
                      onClick={() => {
                        this.setState({
                          [index]: true,
                        });
                      }}
                    >
                      {box.heading}
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>

                    <ModalVideo
                      channel="youtube"
                      autoplay
                      isOpen={this.state[index]}
                      videoId={box.youtubeId}
                      onClose={() => {
                        this.setState({
                          [index]: false,
                        });
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Gallery;
