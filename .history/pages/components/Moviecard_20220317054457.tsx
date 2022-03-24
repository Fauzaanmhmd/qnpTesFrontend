import styles from '../styles/Moviecard.module.scss'


const MovieCard = ({ movie, selectMovie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
    console.log(movie)

    return (
        <div className={styles.container}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            <h5>{movie.title}</h5>
        </div>
    )
}

export default MovieCard