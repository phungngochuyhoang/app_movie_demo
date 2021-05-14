//
import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
//
import HomeStyles from '../styles/Home.module.css'
//
import Meta from './components/meta'
import Nav from './components/Nav'




let imageSize = {
  width: `${280}`,
  height: `${300}`
}

const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

const movieId = 3;

export default function Home({ movies }) {

  const [dataMovies, setDataMovie] = useState(movies.results);
  const [showHide, setShowHide] = useState(false);
  const onMenu = useCallback(() => { setShowHide(!showHide) }, [showHide])
 


  var listMovies = dataMovies.map((movie) =>
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
      <Meta title={'home'} author={'Hoang'} description={'nextjs demo'} keyword={'demomoive, hoangdemomovie'} />
      <Nav toggle={showHide} onMenu={onMenu} />
      <div className={HomeStyles.movie}>
        {!showHide ? listMovies : ""}
      </div>
    </div>
  )
}

export const getServerSideProps = async function (context) {

  var res = await fetch(`${process.env.URL_TOTAL_DATA}${movieId}`);
  var movies = await res.json();

  return {
    props: {
      movies
    }
  }
}