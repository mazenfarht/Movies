import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function WatchList() {
  const [watchList, setWatchList] = useState([]);

  // استدعاء البيانات من localStorage عند تحميل الصفحة
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    setWatchList(storedWatchList);
  }, []);

  // دالة لإزالة العناصر من قائمة المشاهدة
  const removeFromWatchList = (id) => {
    const updatedList = watchList.filter((item) => item.id !== id);
    localStorage.setItem('watchList', JSON.stringify(updatedList)); // تحديث localStorage
    setWatchList(updatedList); // تحديث الحالة (state)
    toast.success('Removed from Watch List!'); // إظهار إشعار عند الحذف
  };

  return (
    <div className="p-6 text-white min-h-screen">
      <h1 className="text-5xl font-bold py-6">My Watch List</h1>
      {watchList.length === 0 ? (
        <p>No items in your Watch List!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchList.map((item) => (
            <div key={item.id} className="bg-black p-4 rounded-lg shadow-lg">
              <Link to={`/details/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.genre}</p>
              </Link>
              <button
                onClick={() => removeFromWatchList(item.id)}
                className="mt-4 px-4 py-2 bg-red-800 hover:bg-red-600 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}