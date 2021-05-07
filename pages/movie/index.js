import Image from 'next/image';


const Movie = function ({movies}) {
    var {results} = movies;
   
    
    // var listImage = results.map((item) => <Image 
    // key={item.id}
    // src={item.backdrop_path}
    // alt="image" 
    // width="350" 
    // height="500" />)

    return (<div>
        <h1> Movie 625f9ea78e3019d21ad4ef853e109282 </h1>
        
    </div>)
}

// export const getServerSideProps = async function (context) {
//     var res = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=625f9ea78e3019d21ad4ef853e109282&with_networks=1");
//     var movies = await res.json();

//     return {
//         props: {
//             movies
//         }
//     }
// } 

export default Movie;