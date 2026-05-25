import React from "react";

import { useNavigate } from "react-router-dom";

/* ================= IMAGES ================= */

import f from "../../img/1.png";
import mar from "../../img/2.png";
import n from "../../img/3.png";
import p from "../../img/4.png";
import s from "../../img/5.png";

/* ================= COMPONENTS ================= */

import Slider from "../Slider/Slider";

/* ================= DATA ================= */

import movies from "../../Moviesdet";
import series from "../../Seriesdet";
import actionMovies from "../../Actiondet";

export default function ProductionHouse() {
  /* ================= NAVIGATION ================= */

  const navigate = useNavigate();

  /* ================= BRAND IMAGES ================= */

  const img = [
    { id: 1, image: f },
    { id: 2, image: mar },
    { id: 3, image: n },
    { id: 4, image: p },
    { id: 5, image: s },
  ];

  /* ================= ROUTE FUNCTIONS ================= */

  // Navigate to details page
  const handleImageClick = (itemId) => {
    navigate(`/details/${itemId}`);
  };

  // Navigate to movies page
  const navMovies = () => {
    navigate("/movies");
  };

  // Navigate to series page
  const navSeries = () => {
    navigate("/series");
  };

  // Navigate to action page
  const navAction = () => {
    navigate("/action");
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ================= SLIDER ================= */}
      <Slider />

      {/* ================= PRODUCTION HOUSES ================= */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          gap-4

          p-4
          md:px-10
          lg:px-16
        "
      >
        {img.map((item) => (
          <div
            key={item.id}
            className="
              border-[2px]
              border-gray-600
              rounded-xl
              overflow-hidden
              cursor-pointer

              transition-all
              duration-300

              hover:scale-105
              hover:border-gray-400
            "
          >
            <img
              src={item.image}
              alt={`Brand ${item.id}`}
              onClick={navMovies}
              className="
                w-full
                h-[80px]
                sm:h-[100px]
                md:h-[120px]
                object-cover
              "
            />
          </div>
        ))}
      </div>

      {/* ================= TRENDING MOVIES ================= */}

      <SectionTitle title="Trending Movies" />

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-4
          md:gap-6

          p-4
          md:px-10
          lg:px-16
        "
      >
        {movies.slice(0, 4).map((movie) => (
          <MovieCard
            key={movie.id}
            item={movie}
            onClick={() => handleImageClick(movie.id)}
          />
        ))}
      </div>

      {/* ================= MOVIES BUTTON ================= */}
      <Button title="See More" onClick={navMovies} />

      {/* ================= TRENDING SERIES ================= */}

      <SectionTitle title="Trending Series" />

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-4
          md:gap-6

          p-4
          md:px-10
          lg:px-16
        "
      >
        {series.slice(0, 4).map((serie) => (
          <MovieCard
            key={serie.id}
            item={serie}
            onClick={() => handleImageClick(serie.id)}
          />
        ))}
      </div>

      {/* ================= SERIES BUTTON ================= */}
      <Button title="See More" onClick={navSeries} />

      {/* ================= ACTION MOVIES ================= */}

      <SectionTitle title="Action Movies" />

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-4
          md:gap-6

          p-4
          md:px-10
          lg:px-16
        "
      >
        {actionMovies.slice(0, 4).map((action) => (
          <MovieCard
            key={action.id}
            item={action}
            onClick={() => handleImageClick(action.id)}
          />
        ))}
      </div>

      {/* ================= ACTION BUTTON ================= */}
      <Button title="See More" onClick={navAction} />
    </div>
  );
}

/* ===================================================== */
/* ================= REUSABLE COMPONENTS =============== */
/* ===================================================== */

/* ================= SECTION TITLE ================= */

function SectionTitle({ title }) {
  return (
    <h1
      className="
        text-white
        text-center
        font-bold

        text-2xl
        sm:text-3xl
        md:text-5xl

        py-4
        md:py-6
      "
    >
      {title}
    </h1>
  );
}

/* ================= MOVIE CARD ================= */

function MovieCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative
        group
        rounded-xl
        overflow-hidden
        cursor-pointer

        transition-all
        duration-300

        hover:scale-105
      "
    >
      {/* MOVIE IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="
          w-full

          h-[180px]
          sm:h-[250px]
          md:h-[320px]
          lg:h-[350px]

          object-cover
        "
      />

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-black/60

          flex
          items-center
          justify-center

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-300
        "
      >
        <p
          className="
            text-white
            text-sm
            sm:text-lg
            font-bold
            text-center
            px-2
          "
        >
          {item.title}
        </p>
      </div>
    </div>
  );
}

/* ================= BUTTON ================= */

function Button({ title, onClick }) {
  return (
    <div className="flex justify-center py-6">
      <button
        onClick={onClick}
        className="
          bg-blue-800
          hover:bg-blue-600

          text-white
          font-semibold

          rounded-full

          transition-all
          duration-300

          hover:scale-105

          shadow-lg

          px-6
          py-3

          text-lg
          sm:text-xl
          md:text-2xl

          w-[180px]
          sm:w-[220px]
          md:w-[280px]
        "
      >
        {title}
      </button>
    </div>
  );
}
