import styles from '../../styles/Moviecard.module.scss'


const MovieCard = ({ movie, selectMovie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
    const showDate = new Date();
    const displayDate = showDate.getDate() + '/' + (showDate.getMonth() + 1) + '/' + showDate.getFullYear();
    const dt = showDate.toDateString();
    console.log(movie)


    return (
        <div className={styles.item}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            <h5>{movie.title}</h5>
            <p>{movie.vote_average}</p>
            <p>{movie.release_date}</p>

        </div>
    )
}

export default MovieCard