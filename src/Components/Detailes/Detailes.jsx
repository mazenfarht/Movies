import React from "react";

import movies from "../../Moviesdet";
import series from "../../Seriesdet";
import actionMovies from "../../Actiondet";

import { toast } from "react-toastify";

import { useParams } from "react-router-dom";

export default function Detailes() {
  /* ================= GET ROUTE PARAM ================= */

  // Get item ID from URL
  const { itemId } = useParams();

  // Convert ID to number
  const id = parseInt(itemId);

  /* ================= TOAST FUNCTION ================= */

  // Show toast notification
  const notify = (msg, type) => {
    toast[type](msg);
  };

  /* ================= FIND ITEM ================= */

  // Search in movies
  const movie = movies.find((item) => item.id === id);

  // Search in series
  const serie = series.find((item) => item.id === id);

  // Search in action movies
  const action = actionMovies.find((item) => item.id === id);

  // Combine all datasets
  const item = movie || serie || action;

  /* ================= WATCH LIST ================= */

  const AddWatchList = () => {
    // Get existing watch list
    const watchList = JSON.parse(localStorage.getItem("watchList")) || [];

    // Check if item already exists
    const isExist = watchList.some((i) => i.id === item.id);

    // Add item if not exists
    if (!isExist) {
      watchList.push(item);

      localStorage.setItem("watchList", JSON.stringify(watchList));

      notify("Added to Watch List!", "success");
    } else {
      notify("Already in Watch List!", "error");
    }
  };

  /* ================= ITEM NOT FOUND ================= */

  if (!item) {
    return (
      <div
        className="
          text-white
          min-h-screen
          flex
          items-center
          justify-center
          text-2xl
          font-bold
        "
      >
        Item not found
      </div>
    );
  }

  return (
    <div
      className="
        text-white
        min-h-screen

        px-4
        sm:px-6
        md:px-10
        lg:px-16

        py-6
      "
    >
      {/* ================================================= */}
      {/* ================= MAIN CONTENT ================== */}
      {/* ================================================= */}

      <div
        className="
          flex
          flex-col
          lg:flex-row

          gap-8

          items-center
          justify-center

          bg-black/50

          rounded-2xl

          p-4
          md:p-8
        "
      >
        {/* ================= POSTER IMAGE ================= */}

        <div
          className="
            w-full
            lg:w-[40%]

            flex
            justify-center
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              max-w-[500px]

              h-[250px]
              sm:h-[350px]
              md:h-[450px]
              lg:h-[550px]

              object-cover

              rounded-2xl

              shadow-lg
            "
          />
        </div>

        {/* ================= DETAILS SECTION ================= */}

        <div
          className="
            w-full
            lg:w-[60%]
          "
        >
          {/* TITLE */}
          <h2
            className="
              font-bold

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              leading-tight
            "
          >
            {item.title}

            <span
              className="
                block
                sm:inline

                text-gray-400

                text-xl
                md:text-3xl

                mt-2
                sm:ml-3
              "
            >
              ({item.releaseDate})
            </span>
          </h2>

          {/* GENRE */}
          <p
            className="
              text-gray-400

              text-sm
              sm:text-base

              py-3
            "
          >
            {item.genre}
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm
              sm:text-base
              md:text-lg

              leading-7

              text-gray-200
            "
          >
            {item.description}
          </p>

          {/* ================= BUTTONS ================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row

              gap-4

              mt-8
            "
          >
            {/* WATCH BUTTON */}
            <a
              href={item.movieUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-center

                px-6
                py-3

                bg-red-800
                hover:bg-blue-700

                rounded-xl

                font-bold

                transition-all
                duration-300

                hover:scale-105
              "
            >
              ▶ Watch {movie ? "Movie" : "Series"}
            </a>

            {/* WATCHLIST BUTTON */}
            <button
              onClick={AddWatchList}
              className="
                px-6
                py-3

                bg-blue-700
                hover:bg-red-800

                rounded-xl

                font-bold

                transition-all
                duration-300

                hover:scale-105
              "
            >
              Add To Watch List
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= TRAILER SECTION =============== */}
      {/* ================================================= */}

      <div className="mt-12">
        {/* SECTION TITLE */}
        <h1
          className="
            font-bold

            text-2xl
            sm:text-3xl
            md:text-5xl

            mb-6
          "
        >
          Watch The Trailer
        </h1>

        {/* RESPONSIVE VIDEO */}
        <div
          className="
            w-full

            flex
            justify-center
          "
        >
          <div
            className="
              relative

              w-full
              max-w-6xl

              aspect-video
            "
          >
            <iframe
              src={`https://www.youtube.com/embed/${
                item.trailerUrl.split("v=")[1]
              }`}
              title={`${item.title} Trailer`}
              className="
                absolute
                top-0
                left-0

                w-full
                h-full

                rounded-2xl
              "
              frameBorder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture
              "
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
