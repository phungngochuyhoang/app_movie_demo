//
import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
//
import HomeStyles from '../styles/Home.module.css'
//
import Nav from './components/Nav'



let imageSize = {
  width: `${280}`,
  height: `${300}`
}

const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';



export default function Home({ movies }) {

  const [showHide, setShowHide] = useState(false);
  const onMenu = useCallback(() => { setShowHide(!showHide) }, [showHide])

  var listMovies = movies.results.map((movie) =>
    <div key={movie.id} className={HomeStyles.movie__box}>
      <Link href={`/movie/${movie.id}`}>
        <a>
          <Image
            src={movie.poster_path != null ? `${URL_IMAGE}${movie.poster_path}` : '/image/error.jpg'}
            title={movie.name}
            width={imageSize.width}
            height={imageSize.height} />
        </a>
      </Link>
      <div className={HomeStyles.box__name}>
        <Link href={`/movie/${movie.id}`}>
          <a>{movie.name}</a>
        </Link>
      </div>
    </div>
  )



  return (
    <div className={HomeStyles.home}>
      <Nav toggle={showHide} onMenu={onMenu} />
      <div className={HomeStyles.movie}>
        {!showHide ? listMovies : ""}
      </div>

    </div>
  )
}

export const getServerSideProps = async function (context) {

  var res = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=625f9ea78e3019d21ad4ef853e109282&all");
  var movies = await res.json();

  return {
    props: {
      movies
    }
  }
}