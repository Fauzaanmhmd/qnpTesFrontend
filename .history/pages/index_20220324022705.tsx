import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './components/Moviecard'
import Youtube from 'react-youtube'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Trailers from './components/Trailers'
import Leaderboard from './Leaderboard'
import Footer from './Footer'


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

  const [activeTab, setActiveTab] = useState("tab1")
  const [activeTab2, setActiveTab2] = useState("tab5")
  const handleTab1 = () => {
    setActiveTab("tab1")
  }
  const handleTab2 = () => {
    setActiveTab("tab2")
  }
  const handleTab3 = () => {
    setActiveTab("tab3")
  }
  const handleTab4 = () => {
    setActiveTab("tab4")
  }
  const handleTab5 = () => {
    setActiveTab2("tab5")
  }
  const handleTab6 = () => {
    setActiveTab2("tab6")
  }

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

    setMovies(data.results)
    setMovie(data.results[0])

    if (data.results.length) {
      await fetchMovie(data.results[0].id)
    }
  }

  const fetchMovie = async (id: any) => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos"
      }
    })

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find((vid: any) => vid.name === "Official Trailer")
      setTrailer(trailer ? trailer : data.videos.results[0])
    }

    setMovie(data)
  }

  const selectMovie = (movie: any) => {
    fetchMovie(movie.id)
    setPlaying(false)
    setMovie(movie)
    window.scrollTo(0, 0)
  }

  const renderMovies = () => {
    return movies?.map((movie: any) => (
      <MovieCard
        selectMovie={selectMovie}
        key={movie.id}
        movie={movie}
      />
    ))
  }

  const renderTrailers = () => {
    return movies?.map((movie: any) => (
      <Trailers
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
                    <div className={`${styles.Anchor} ${activeTab === "tab1" ? styles.active : ""}`} onClick={handleTab1}>
                      <h3>
                        <a>Streaming</a>
                      </h3>
                    </div>
                    <div className={`${styles.Anchor} ${activeTab === "tab2" ? styles.active : ""}`} onClick={handleTab2}>
                      <h3>
                        <a>On TV</a>
                      </h3>
                    </div>
                    <div className={`${styles.Anchor} ${activeTab === "tab3" ? styles.active : ""}`} onClick={handleTab3}>
                      <h3>
                        <a>For Rent</a>
                      </h3>
                    </div>
                    <div className={`${styles.Anchor} ${activeTab === "tab4" ? styles.active : ""}`} onClick={handleTab4}>
                      <h3>
                        <a>In Theaters</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RenderMovie}>
                {renderMovies()}
              </div>

              <div className={styles.ColumnHeader}>
                <h2>Free To Watch</h2>
                <div>
                  <div className={styles.Selector}>
                    <div className={`${styles.Anchor} ${activeTab2 === "tab5" ? styles.active : ""}`} onClick={handleTab5}>
                      <h3>
                        <a>Streaming</a>
                      </h3>
                    </div>
                    <div className={`${styles.Anchor} ${activeTab2 === "tab6" ? styles.active : ""}`} onClick={handleTab6}>
                      <h3>
                        <a>On TV</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RenderMovie}>
                {renderTrailers()}
              </div>

              {movies.length ?
                <main>
                  {movie ?
                    <div className={styles.backdrop}
                      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
                      {playing ?
                        <>
                          <Youtube
                            videoId={trailer.key}
                            className={styles.youtube}
                          />
                          <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                          </button>
                        </> :
                        <div className="center-max-size">
                          <div className="poster-content">
                            {trailer ?
                              <button className={"button play-video"} onClick={() => setPlaying(true)}
                                type="button">Play
                                Trailer</button>
                              : 'Sorry, no trailer available'}
                            <h1>{movie.title}</h1>
                          </div>
                        </div>
                      }
                    </div>
                    : null}

                  <div className={"center-max-size container"}>
                    {renderMovies()}
                  </div>
                </main>
                : 'Sorry, no movies found'}
            </div>
          </div>
        </div>
        <Leaderboard />
        <Footer />
      </section>
    </div >
  )

}


export default Home
