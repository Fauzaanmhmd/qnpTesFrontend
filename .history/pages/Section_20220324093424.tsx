import styles from "../styles/Section.module.scss"
import { FaPlay } from "react-icons/fa";
import Youtube from 'react-youtube'
import { useState } from "react"


const Section = ({ movie }: any) => {
    const IMAGE_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face"
    const [movies, setMovies] = useState({ title: "Loading Movies" })

    return (
        <div className={styles.item}>
            <FaPlay />
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.backdrop_path}`} alt="" />
                : null}
            <h4>{movie.title}</h4>
        </div>)
}

export default Section