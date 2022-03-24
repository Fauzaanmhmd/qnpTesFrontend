import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './components/Moviecard'
import Youtube from 'react-youtube'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'


const Home: NextPage = () => {

  const MOVIE_API = "https://api.themoviedb.org/3"
  const SEARCH_API = MOVIE_API + "search/movie"
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"
  const API_KEY = "b3802c15c1569a1a0caa6bee01c6f23e"
  const DISCOVER_API = `${MOVIE_API}/discover/movie`

  const [movie, setMovie] = useState({ title: "Loading Movies" })
  const [trailer, setTrailer] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {

    const { data } = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
      params: {
        api_key: API_KEY,
        query: searchKey
      }
    })

    console.log(data)
    setMovies(data.results)
  }

  const renderMovies = () => {
    return movies?.map((movie: any) => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className={styles.container}>
        <Banner />
      </section>
      <section className={styles.container}>
        <div className={styles.ColumnWrapper}>
          <div className={styles.ContentWrapper}>
            <div className={styles.Column}>
              <div className={styles.ColumnHeader}>
                <h2>What's Popular</h2>
                <div>
                  <div className={styles.Selector}>
                    <div className={styles.Anchor}>
                      <h3>
                        <a>Streaming</a>
                      </h3>
                    </div>
                    <div className={styles.Anchor}>
                      <h3>
                        <a>On TV</a>
                      </h3>
                    </div>
                    <div className={styles.Anchor}>
                      <h3>
                        <a>For Rent</a>
                      </h3>
                    </div>
                    <div className={styles.Anchor}>
                      <h3>
                        <a>Streaming</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RenderMovie}>
                {renderMovies()}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.ColumnWrapper}>
          <div className={styles.ContentWrapper}>
            <div className={styles.Column}
        <div className={styles.ColumnHeader}>
              <h2>What's Popular</h2>
              <div>
                <div className={styles.Selector}>
                  <div className={styles.Anchor}>
                    <h3>
                      <a>Streaming</a>
                    </h3>
                  </div>
                  <div className={styles.Anchor}>
                    <h3>
                      <a>On TV</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      </section >
    </div >
  )

}


export default Home
