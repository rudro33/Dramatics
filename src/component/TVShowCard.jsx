import React from "react";
import { IoStarHalfOutline, IoEye } from "react-icons/io5";
import { FaHeartCircleCheck } from "react-icons/fa6";

const TVShowCard = () => {

  const movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      released_date: "2024",
      platform: "IMDb",
      rating: 8.9,
      card_picture: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      youtube: "https://www.youtube.com/results?search_query=Dune+Part+Two+Trailer"
    },
    {
      id: 2,
      title: "Deadpool & Wolverine",
      released_date: "2024",
      platform: "IMDb",
      rating: 8.7,
      card_picture: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      youtube: "https://www.youtube.com/results?search_query=Deadpool+and+Wolverine+Trailer"
    },
    {
      id: 3,
      title: "Joker: Folie à Deux",
      released_date: "2024",
      platform: "IMDb",
      rating: 8.8,
      card_picture: "https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
      youtube: "https://www.youtube.com/results?search_query=Joker+Folie+a+Deux+Trailer"
    },
    {
      id: 4,
      title: "Inside Out 2",
      released_date: "2024",
      platform: "IMDb",
      rating: 8.6,
      card_picture: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      youtube: "https://www.youtube.com/results?search_query=Inside+Out+2+Trailer"
    },
    {
      id: 5,
      title: "Oppenheimer",
      released_date: "2023",
      platform: "IMDb",
      rating: 8.5,
      card_picture: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
      youtube: "https://www.youtube.com/results?search_query=Oppenheimer+Trailer"
    },
    {
      id: 6,
      title: "Avatar: The Way of Water",
      released_date: "2022",
      platform: "IMDb",
      rating: 7.9,
      card_picture: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      youtube: "https://www.youtube.com/results?search_query=Avatar+The+Way+of+Water+Trailer"
    },
    {
      id: 7,
      title: "The Batman",
      released_date: "2022",
      platform: "IMDb",
      rating: 8.0,
      card_picture: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      youtube: "https://www.youtube.com/results?search_query=The+Batman+Trailer"
    },
    {
      id: 8,
      title: "John Wick 4",
      released_date: "2023",
      platform: "IMDb",
      rating: 8.1,
      card_picture: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      youtube: "https://www.youtube.com/results?search_query=John+Wick+4+Trailer"
    },
    {
      id: 9,
      title: "Spider-Man: No Way Home",
      released_date: "2021",
      platform: "IMDb",
      rating: 8.4,
      card_picture: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      youtube: "https://www.youtube.com/results?search_query=Spider+Man+No+Way+Home+Trailer"
    },
    {
      id: 10,
      title: "Top Gun: Maverick",
      released_date: "2022",
      platform: "IMDb",
      rating: 8.3,
      card_picture: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      youtube: "https://www.youtube.com/results?search_query=Top+Gun+Maverick+Trailer"
    },
    {
      id: 11,
      title: "Mission: Impossible – Dead Reckoning",
      released_date: "2023",
      platform: "IMDb",
      rating: 8.2,
      card_picture: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      youtube: "https://www.youtube.com/results?search_query=Mission+Impossible+Dead+Reckoning+Trailer"
    },
    {
      id: 12,
      title: "Interstellar",
      released_date: "2014",
      platform: "IMDb",
      rating: 8.7,
      card_picture: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      youtube: "https://www.youtube.com/results?search_query=Interstellar+Trailer"
    },
    {
      id: 13,
      title: "Inception",
      released_date: "2010",
      platform: "IMDb",
      rating: 8.8,
      card_picture: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      youtube: "https://www.youtube.com/results?search_query=Inception+Trailer"
    },
    {
      id: 14,
      title: "The Dark Knight",
      released_date: "2008",
      platform: "IMDb",
      rating: 9.0,
      card_picture: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      youtube: "https://www.youtube.com/results?search_query=The+Dark+Knight+Trailer"
    },
    {
      id: 15,
      title: "Gladiator",
      released_date: "2000",
      platform: "IMDb",
      rating: 8.5,
      card_picture: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      youtube: "https://www.youtube.com/results?search_query=Gladiator+Trailer"
    },
    {
      id: 16,
      title: "Titanic",
      released_date: "1997",
      platform: "IMDb",
      rating: 7.9,
      card_picture: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      youtube: "https://www.youtube.com/results?search_query=Titanic+Trailer"
    },
    {
      id: 17,
      title: "The Matrix",
      released_date: "1999",
      platform: "IMDb",
      rating: 8.7,
      card_picture: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      youtube: "https://www.youtube.com/results?search_query=The+Matrix+Trailer"
    },
    {
      id: 18,
      title: "Black Panther",
      released_date: "2018",
      platform: "IMDb",
      rating: 7.3,
      card_picture: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      youtube: "https://www.youtube.com/results?search_query=Black+Panther+Trailer"
    },
    {
      id: 19,
      title: "Avengers: Endgame",
      released_date: "2019",
      platform: "IMDb",
      rating: 8.4,
      card_picture: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      youtube: "https://www.youtube.com/results?search_query=Avengers+Endgame+Trailer"
    },
    {
      id: 20,
      title: "Frozen II",
      released_date: "2019",
      platform: "IMDb",
      rating: 6.8,
      card_picture: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
      youtube: "https://www.youtube.com/results?search_query=Frozen+2+Trailer"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <a
            key={movie.id}
            href={movie.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montser transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={movie.card_picture}
              alt={movie.title}
              className="h-60 mx-auto object-contain rounded-lg"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2">
                  <IoEye className="text-gray-500" />
                  <FaHeartCircleCheck className="text-rose-700" />
                </div>
              </div>

              <p className="text-sm text-gray-400">
                {movie.released_date}
              </p>

              <div className="flex justify-between">
                <p className="text-sm text-black font-extrabold bg-yellow-400 rounded px-2">
                  {movie.platform}
                </p>

                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <IoStarHalfOutline className="text-yellow-400" />
                  {movie.rating}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TVShowCard;