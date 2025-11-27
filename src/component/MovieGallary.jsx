import React, { useEffect, useState } from 'react'
import CategoriesNabvar from './CategoriesNabvar';
import toast from 'react-hot-toast';
import MovieCard from './MovieCard';



export default function MovieGallary() {

    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState();
    const [selectCategory,setSelectCategory] = useState("All");
    const [showAll,setShowAll] = useState(false);

    useEffect(() => {
        fetch('/Movie.json')
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch((error)=> {
          console.log(error);
          toast.error("Faild to movie data !!")
          
        })
        .finally(()=> setLoading(false))
    },[]);

    const categories = ["All", ...new Set(movies.map(m => m.category))]
    const filterMovies = selectCategory ==="All" ? movies : movies.filter(m => m.category ===selectCategory);
    const visibleMovies = showAll ? filterMovies : filterMovies.slice(0,8);
  return ( 
    <div className='w-11/12 mx-auto py-16 '>
      <h1 className='text-lg lg:text-xl font-mon text-yellow-400'>RECOMMENDED FOR YOU</h1>
      <CategoriesNabvar 
      categories={categories}
      selectCategory={selectCategory}
      setSelectCategory={setSelectCategory}
      ></CategoriesNabvar>
      {
        loading ? (
          <div className='flex justify-conntent-center items-center h-64'>
            <span className="loading loading-dots loading-xl text-yellow-500"></span>
          </div>
        )
        : filterMovies.length > 0 ?
        (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
              visibleMovies.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                ></MovieCard>
              ))
            }
            </div>
            {
              filterMovies.length > 8 && (
                <div className='flex justify-center mt-8'>
                  <button
                  className='px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300'
                  onClick={() => setShowAll(!showAll)}
                  >{showAll ? "Show Less" : "Show More"}</button>
                </div>
              )
            }
          </>
        ) : (
          <p className='text-gray-400 text-center'>No Movie Fouded</p>
          
        )
      }
    </div>
  );
}
