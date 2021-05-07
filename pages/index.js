import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({movies}) {
	console.log(movies)
  return (
    <div className={styles.container}>
	<h1> demo app movie </h1>
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