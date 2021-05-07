//
import Image from 'next/image'
//
import HomeStyles from '../styles/Home.module.css'
//
// import Nav from './components/Nav'
// import Search from './components/search'


// let imageSize = {
//   width: `${300}`,
//   height: `${300}`
// }

export default function Home({ movies }) {

  console.log(movies);

  // var listMovies = movies.results.map((movie) =>
  //   <div className={HomeStyles.movie__box} key={movie.id}>
  //     <div className={HomeStyles.movie__image}>
  //       <Image
  //         className={HomeStyles.img}
  //         src={movie.backdrop_path}
  //         title={movie.name}
  //         width={imageSize.width}
  //         height={imageSize.height} />
  //     </div>
  //     <div className={HomeStyles.movie__info}>
  //       <div className={HomeStyles.movie__name}>
  //         <p>{movie.name}</p>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className={HomeStyles.home}>
      {/* <Nav />
      <Search /> */}
      <div className={HomeStyles.movie}>
        {/* {listMovies} */}
        {movies.results.map((movie) => <Image key={movie.id} src={movie.movie__image} title={movie.name} width="100" height="100" />) }
      </div>
    </div>
  )
}

export const getServerSideProps = async function (context) {
  var res = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=625f9ea78e3019d21ad4ef853e109282&with_networks=1");
  var movies = await res.json();

  return {
    props: {
      movies
    }
  }
}