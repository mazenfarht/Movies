import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const IMAGE = "https://image.tmdb.org/t/p/original";

export default function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  }, []);

  const nav = () => {
    navigate("/movies");
  };

  const sliderRight = () => {
    if (!elementRef.current) return;

    elementRef.current.scrollBy({
      left: window.innerWidth * 0.9,
      behavior: "smooth",
    });
  };

  const sliderLeft = () => {
    if (!elementRef.current) return;

    elementRef.current.scrollBy({
      left: -window.innerWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={sliderLeft}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-20
          bg-black/50 text-white rounded-full p-2
          hover:bg-black/70 transition
        "
      >
        <HiChevronLeft className="text-2xl md:text-4xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={sliderRight}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-20
          bg-black/50 text-white rounded-full p-2
          hover:bg-black/70 transition
        "
      >
        <HiChevronRight className="text-2xl md:text-4xl" />
      </button>

      {/* Slider */}
      <div
        ref={elementRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth
          scrollbar-none px-3 sm:px-5 md:px-8 lg:px-12 py-4
        "
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE + item.backdrop_path}
            alt={item.title}
            onClick={nav}
            className="
              flex-shrink-0
              cursor-pointer
              rounded-2xl
              object-cover object-top

              w-[90vw]
              sm:w-[85vw]
              md:w-[75vw]
              lg:w-[65vw]
              xl:w-[60vw]

              h-[180px]
              sm:h-[240px]
              md:h-[320px]
              lg:h-[420px]
              xl:h-[500px]

              transition duration-300
              hover:scale-[1.02]
              hover:border-2 border-gray-400
            "
          />
        ))}
      </div>
    </div>
  );
}
