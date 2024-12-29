import React from 'react';
import { useNavigate } from 'react-router-dom';
import f from '../../img/1.png';
import mar from '../../img/2.png';
import n from '../../img/3.png';
import p from '../../img/4.png';
import s from '../../img/5.png';
import Slider from '../Slider/Slider';
import movies from '../../Moviesdet';
import series from '../../Seriesdet';
import actionMovies from '../../Actiondet';
export default function ProductionHouse() {
    const img = [
        { id: 1, image: f },
        { id: 2, image: mar },
        { id: 3, image: n },
        { id: 4, image: p },
        { id: 5, image: s },
    ];

    const navigate = useNavigate();

    const handleImageClick = (itemId) => {
        navigate(`/details/${itemId}`); // Ensure it matches the updated route path
    };
    
    
   
    const nav = () => {
        navigate('/movies');  // Navigate to the details page with the movie ID
    };
    const nav2 = () => {
        navigate('/series');  // Navigate to the details page with the movie ID
    };
    const nav3 = () => {
        navigate('/action');  // Navigate to the details page with the movie ID
    };
    // console.log("movies",movies);
    

    return (
        <>
            <Slider />
            <div className="flex gap-5 p-4 px-5 md:px-16">
                {img.map((item) => (
                    <div
                        key={item.id}
                        className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
                          // Add the click handler here
                    >
                        <img src={item.image} className="w-full" onClick={nav} alt={`Image ${item.id}`} />
                    </div>
                ))}
            </div>

            <h1 className="text-white w-full font-sans text-4xl md:text-6xl md:p-6 font-bold text-center mb-3 p-3 md:mb-6">
                Trending Movies
            </h1>
            <div className="grid grid-cols-4 gap-6 p-4 rounded-lg mb-6">
            {movies.slice(0, 4).map((movie) => (
    <div
        key={movie.id} // Use movie.id as key
        className="relative group rounded-lg overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => handleImageClick(movie.id)} // Pass the actual ID
    >
        <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-bold">{movie.title}</p>
        </div>
    </div>
))}

            </div>
            <div className="flex justify-center">
                <button onClick={nav} className="text-white font-sans md:w-80 w-60 m-2 object-center text-3xl bg-blue-800 rounded-full hover:bg-blue-600 hover:scale-110 duration-300 ease-in-out shadow-lg py-3 px-4">
                    See More
                </button>
            </div>
            <h1 className="text-white w-full font-sans text-4xl md:text-6xl md:p-6 font-bold text-center mb-3 p-6 md:mb-6">
                Trending Series
            </h1>
            <div className="grid grid-cols-4 gap-6 p-4 rounded-lg mb-6">
            {series.slice(0, 4).map((serie) => (
    <div
        key={serie.id} // Use serie.id as key
        className="relative group rounded-lg overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => handleImageClick(serie.id)} // Pass the actual ID
    >
        <img
            src={serie.image}
            alt={serie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-bold">{serie.title}</p>
        </div>
    </div>
))}

            </div>
            <div className="flex justify-center">
                <button onClick={nav2} className="text-white font-sans md:w-80 w-60 m-2 object-center text-3xl bg-blue-800 rounded-full hover:bg-blue-600 hover:scale-110 duration-300 ease-in-out shadow-lg py-3 px-4">
                    See More
                </button>
            </div>
            <h1 className="text-white w-full font-sans text-4xl md:text-6xl md:p-6 font-bold text-center mb-3 p-6 md:mb-6">
                Action Movies
            </h1>
            <div className="grid grid-cols-4 gap-6 p-4 rounded-lg mb-6">
             {actionMovies.slice(0,4).map((action, index) => (
                    <div
                        key={action.id}
                        className="relative group rounded-lg overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out"
                        onClick={() => handleImageClick(action.id)} // Handle the click to navigate
                    >
                        <img
                            src={action.image}
                            alt={action.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-bold">{action.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">

                <button onClick={nav3} className="text-white font-sans md:w-80 w-60 m-2 object-center text-3xl bg-blue-800 rounded-full hover:bg-blue-600 hover:scale-110 duration-300 ease-in-out shadow-lg py-3 px-4">
                    See More
                </button>

            
            </div>
            
        </>
    );
}
