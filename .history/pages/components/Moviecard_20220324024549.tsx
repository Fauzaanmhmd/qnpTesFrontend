import styles from '../../styles/Moviecard.module.scss'


const MovieCard = ({ movie, selectMovie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
    const voteAverage = movie.vote_average * 10

    return (
        <div className={styles.item}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            <p className={styles.average}>{voteAverage}%</p>
            <div className={styles.details}>
                <h4>{movie.title}</h4>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard