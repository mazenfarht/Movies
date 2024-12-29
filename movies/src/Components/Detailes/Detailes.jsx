import React from 'react';
import movies from '../../Moviesdet'; // Import movies data
import series from '../../Seriesdet'; // Import series data
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'; // Import useParams to get the route parameters
import actionMovies from '../../Actiondet';
export default function Detailes() {
  const { itemId } = useParams(); // Get the ID from the URL
  const id = parseInt(itemId); // Convert ID to integer
  const notify =(msg,type)=>{
    toast[type](msg);
};
  // Find the item in movies or series datasets
  const movie = movies.find((item) => item.id === id);
  const serie = series.find((item) => item.id === id);
  const action = actionMovies.find((item) => item.id === id);

  const AddWatchList = () => {
    const watchList = JSON.parse(localStorage.getItem('watchList')) || []; // جلب قائمة المشاهدة الحالية
    const isExist = watchList.some((i) => i.id === item.id); // التحقق من وجود العنصر
  
    if (!isExist) {
      watchList.push(item); // إضافة العنصر إذا لم يكن موجودًا
      localStorage.setItem('watchList', JSON.stringify(watchList)); // حفظ القائمة المحدثة
      notify('Added to Watch List!', 'success'); // عرض رسالة النجاح
    } else {
      notify('Already in Watch List!', 'error'); // عرض رسالة الخطأ
    }
  };
  
  
  // Combine both datasets and determine whether it's a movie or series
  const item = movie || serie || action ;

  // If item is not found
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="p-6 text-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center mb-12 bg-black bg-opacity-50 p-6 rounded-lg">
        {/* Item Poster */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-[650px] h-[500px] rounded-lg shadow-lg"
          />
        </div>

        {/* Item Details */}
        <div className="w-full md:w-2/3 px-6">
          <h2 className="text-6xl font-bold mb-2">
            {item.title}{' '}
            <span className="text-4xl text-gray-400">({item.releaseDate})</span>
          </h2>
          <p className="text-sm text-gray-400 p-1 mb-4">{item.genre}</p>
          <p className="mb-6">{item.description}</p>
          {/* <h1 className='mb-6 font-bold text-lg '>Add To Watch list </h1> */}
          {/* Trailer Button */}
          <a
            href={item.trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-red-800 hover:bg-blue-700 rounded-lg text-white font-bold"
          >
            ▶ Watch {movie ? 'Movie' : 'Series'}
          </a>
          <button className='px-6 py-3 bg-blue-700 hover:bg-red-800 m-4 rounded-lg text-white font-bold' onClick={AddWatchList}>Add To Watch List</button>
        </div>
      </div>

      {/* Trailer Section */}
      <h1 className="text-5xl font-bold py-6">Watch The Trailer</h1>
      <div className="justify-center">
        <iframe
          width="650"
          height="400"
          src={`https://www.youtube.com/embed/${item.trailerUrl.split('v=')[1]}`}
          title={`${item.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
