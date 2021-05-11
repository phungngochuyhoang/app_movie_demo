//
import Image from 'next/image'
//
import HomeStyles from '../styles/Home.module.css'
//
import Nav from './components/Nav'



let imageSize = {
  width: `${300}`,
  height: `${300}`
}

export default function Home({ movies }) {

  var listMovies = movies.results.map((movie) =>
    <div key={movie.id}>
      <div>{}
        <Image
          src={movie.backdrop_path != null ? `${process.env.URL_BASE_IMAGE}${movie.backdrop_path}` : '/image/error.jpg'} 
          title={movie.name}
          width={imageSize.width}
          height={imageSize.height} />
      </div>
      <div>
        <div>
          <p>{movie.name}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className={HomeStyles.home}>
      <Nav />
      <div className={HomeStyles.movie}>
       {listMovies}
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