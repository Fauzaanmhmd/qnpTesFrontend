import styles from '../../styles/Trailers.module.scss'

const Trailers = ({ movie }: any) => {
    const IMAGE_PATH = "https://api.themoviedb.org/3/movie/157336"
    const voteAverage = movie.vote_average * 10

    return (
        <div className={styles.item}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            console.log(movie.poster_path)
            <p>{voteAverage}%</p>
            <h5>{movie.title}</h5>
            <p>{movie.release_date}</p>
        </div>
    )
}

export default Trailers