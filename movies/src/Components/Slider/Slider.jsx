import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const IMAGE ="https://image.tmdb.org/t/p/original"

export default function Slider() {
    const elementRef = useRef(null);
    const screenWidth = window.innerWidth;

    // Use the hook inside the component
    const navigate = useNavigate(); // <-- FIXED

    const [movieList, SetMovieList] = useState([]);
    console.log("IMAAAAGE", IMAGE);
    
    useEffect(() => {
        getTrendingVideos();
    }, []);

    const nav = () => {
        navigate('/movies');  // Navigate to the details page with the movie ID
    };

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            SetMovieList(resp.data.results);
        });
    };

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    };
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    };

    return (
        <div className='relative'>
            <HiChevronLeft 
                className="hidden md:block text-white text-[30px] 
                absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => sliderLeft(elementRef.current)}
            />

            <HiChevronRight 
                className="hidden md:block text-white text-[30px] 
                absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => sliderRight(elementRef.current)}
            />

            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
                {movieList.map((item) => (
                    <img 
                        src={IMAGE + item.backdrop_path} 
                        onClick={nav}
                        className='min-w-full h-[410px] object-cover object-left-top
                        mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out' 
                        alt=''
                    />
                ))}
            </div>
        </div>
    );
}

