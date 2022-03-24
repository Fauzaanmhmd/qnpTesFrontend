import styles from '../../styles/Section.module.scss'


const Section = ({ movie }: any) => {
    const IMAGE_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face"

    return (
        <div className={styles.item}>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.backdrop_path}`} alt="" />
                : null}
            <h4>{movie.title}</h4>
        </div>)
}

export default Section