
import styleHome from '../styles/Home.module.css'
import Meta from './components/Meta'



var a = "/v7J7q0yMAPbocBgiv39hpAMEcRf.jpg";

export default function Home({ movies }) {
  var { results } = movies;


  return (<div>
    <Meta title="Home" />
    <h1 className="text-danger">  a </h1>
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