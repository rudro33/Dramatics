
import Navbar from '../component/Navbar'
import ImageCarousel from '../component/ImageCarousel'
import MovieGallary from '../component/MovieGallary'
import { Toaster } from 'react-hot-toast'
import Footer from '../component/Footer';
import MovieMustGallary from '../component/MovieMustGallary';
import { useState } from 'react';



export default function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <ImageCarousel/>
      
      <main className='min-h-[calc(100vh-320px)]'>
        <MovieGallary></MovieGallary>
        <MovieMustGallary searchText={searchText}/>
        <Toaster position='top-right' reverseOrder={false}></Toaster>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}
