import styles from '../../styles/Moviecard.module.scss'


const MovieCard = ({ movie, selectMovie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
    console.log(movie)

    return (
        <div>
            {movie.poster_path ? <img className={styles.item} src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            <h5>{movie.title}</h5>
        </div>
    )
}

export default MovieCard