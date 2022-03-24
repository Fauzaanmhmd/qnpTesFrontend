import styles from "../../styles/Banner.module.scss"
import axios from 'axios'
import { useState } from 'react'

const Banner = () => {
    const SEARCH_API = MOVIE_API + "search/movie"
    const [searchKey, setSearchKey] = useState("")

    const fetchMovies = async () => {

        const { data } = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })

        console.log(data.results[0])
        setMovies(data.results)
        setMovie(data.results[0])

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.BannerImg}>
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/sfjqJDmNqMIImO5khiddb9TARvO.jpg" />
            </div>
            <div className={styles.MediaWrap}>
                <div className={styles.title}>
                    <h1>Welcome</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <form>
                        <label>
                            <input className={styles.inputSearch} type="text" placeholder="Seach for a movie, tv show, person....." />
                            <input className={styles.inputSubmit} type="submit" value="Search" onInput={(event) => setSearchKey(event.target.value)} />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner