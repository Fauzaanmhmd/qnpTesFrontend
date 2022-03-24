import styles from '../../styles/Trailers.module.scss'

const Trailers = ({ movie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div className={styles.item}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null}
            <h5>{movie.title}</h5>
        </div>
    )
}

export default Trailers