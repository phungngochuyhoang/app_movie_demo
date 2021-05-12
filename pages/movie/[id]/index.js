//
import Image from 'next/image';
import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
//
import HomeStyles from '../../../styles/Home.module.css'
import MovieStyles from '../../../styles/moive.module.css'
//
import Nav from '../../components/Nav'
import NotFound from '../../404'

const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

const Movie = function ({ movies }) {

    const [showHide, setShowHide] = useState(false);
    const onMenu = useCallback(() => { setShowHide(!showHide) }, [showHide])

    const router = useRouter();
    const query = router.query;

    let movie = movies.results.map((movie) => {
        if (movie.id == query.id) {
            return (
                <div className={MovieStyles.flim} key={movie.id}>
                    <div className={MovieStyles.flim__head}>
                        <div className={MovieStyles.head__image}>
                            <Image
                                src={movie.poster_path != null ? `${URL_IMAGE}${movie.poster_path}` : '/image/error.jpg'}
                                title={movie.name}
                                width="250"
                                height="300"
                            />
                        </div>
                    </div>
                    <div className={MovieStyles.flim__content}>
                        <div className={MovieStyles.content__name}>
                            <p>{movie.name}</p>
                        </div>
                        <div className={MovieStyles.button}>                           
                            <a type="button" className={`btn btn-primary ${MovieStyles.button__trailer}`}> Trailer </a>
                            <a type="button" className={`btn btn-danger ${MovieStyles.button__watch}`}> Watch movie </a>
                        </div>
                        <div className={MovieStyles.content__description}>
                            <p>
                                <span> Description: </span>
                                <br />
                                <span>{movie.overview}</span>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }).filter((item) => item != null)


    return (
        <div className={HomeStyles.home}>
            <Nav toggle={showHide} onMenu={onMenu} />
            {movie.length == 0 ? <NotFound /> :  !showHide ? movie : ""}
        </div>)
}

//https://api.themoviedb.org/3/discover/tv?api_key=625f9ea78e3019d21ad4ef853e109282&with_networks=

export const getServerSideProps = async function (context) {

    var res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=625f9ea78e3019d21ad4ef853e109282&all`);
    var movies = await res.json();

    return {
        props: {
            movies
        }
    }
}

export default Movie;