import styles from '../../styles/Trailers.module.scss'

const Trailers = ({ movie }: any) => {
    const IMAGE_PATH = "https://api.themoviedb.org/3/movie/157336"
    console.log(movie)

    return (
        <div className={styles.item}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            <h5>{movie.title}</h5>
        </div>
    )
}

export default Trailers