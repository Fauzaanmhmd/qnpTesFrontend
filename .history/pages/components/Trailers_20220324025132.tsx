import styles from '../../styles/Trailers.module.scss'

const Trailers = ({ movie }: any) => {
    const IMAGE_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face"
    const voteAverage = movie.vote_average * 10
    console.log(movie)


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

export default Trailers