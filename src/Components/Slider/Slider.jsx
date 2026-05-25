import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../../Services/GlobalApi";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

/* ================= IMAGE BASE URL ================= */
const IMAGE = "https://image.tmdb.org/t/p/original";

export default function Slider() {
  /* ================= STATES ================= */

  // Store movies from API
  const [movieList, setMovieList] = useState([]);

  /* ================= REFS ================= */

  // Reference for slider container
  const elementRef = useRef(null);

  /* ================= NAVIGATION ================= */

  // React Router navigation
  const navigate = useNavigate();

  /* ================= EFFECT ================= */

  // Fetch trending movies when component loads
  useEffect(() => {
    getTrendingVideos();
  }, []);

  /* ================= API CALL ================= */

  // Get trending movies from API
  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  /* ================= NAVIGATION FUNCTION ================= */

  // Navigate to movies page
  const nav = () => {
    navigate("/movies");
  };

  /* ================= SLIDER FUNCTIONS ================= */

  // Scroll slider to the right
  const sliderRight = () => {
    // Get screen width dynamically
    const screenWidth = window.innerWidth;

    elementRef.current.scrollLeft += screenWidth - 120;
  };

  // Scroll slider to the left
  const sliderLeft = () => {
    // Get screen width dynamically
    const screenWidth = window.innerWidth;

    elementRef.current.scrollLeft -= screenWidth - 120;
  };

  return (
    <div className="relative w-full">
      {/* ================= LEFT BUTTON ================= */}
      <HiChevronLeft
        onClick={sliderLeft}
        className="
          hidden md:block
          text-white
          text-[40px]
          absolute
          left-2
          top-1/2
          -translate-y-1/2
          z-20
          cursor-pointer
          bg-black/50
          rounded-full
          p-1
          hover:scale-110
          transition
        "
      />

      {/* ================= RIGHT BUTTON ================= */}
      <HiChevronRight
        onClick={sliderRight}
        className="
          hidden md:block
          text-white
          text-[40px]
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          z-20
          cursor-pointer
          bg-black/50
          rounded-full
          p-1
          hover:scale-110
          transition
        "
      />

      {/* ================= SLIDER CONTAINER ================= */}
      <div
        ref={elementRef}
        className="
          flex
          overflow-x-auto
          scroll-smooth
          scrollbar-none
          gap-4

          px-3
          sm:px-5
          md:px-10
          lg:px-16

          py-4
        "
      >
        {/* ================= MOVIES ================= */}
        {movieList.map((item) => (
          <img
            key={item.id}
            // Movie image
            src={IMAGE + item.backdrop_path}
            // Navigate on click
            onClick={nav}
            alt={item.title}
            className="
              cursor-pointer
              rounded-xl
              object-cover
              object-top

              /* RESPONSIVE WIDTH */
              min-w-full
              sm:min-w-[95%]
              md:min-w-[80%]
              lg:min-w-[70%]

              /* RESPONSIVE HEIGHT */
              h-[180px]
              sm:h-[250px]
              md:h-[350px]
              lg:h-[450px]

              transition-all
              duration-300

              hover:scale-[1.02]
              hover:border-[3px]
              border-gray-400
            "
          />
        ))}
      </div>
    </div>
  );
}
