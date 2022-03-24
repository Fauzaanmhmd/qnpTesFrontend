import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './components/Moviecard'
import Youtube from 'react-youtube'


const Home: NextPage = () => {

  const MOVIE_API = "https://api.themoviedb.org/3"
  const SEARCH_API = MOVIE_API + "search/movie"
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"
  const API_KEY = "b3802c15c1569a1a0caa6bee01c6f23e"
  const DISCOVER_API = MOVIE_API + "discover/movie"

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
        api_key: MOVIE_API,
        query: searchKey
      }
    })

    setMovies(data.results)
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
    movies?.map((movie: any) => (
      <MovieCard
        selectMovie={selectMovie}
        key={movie.id}
        movie={movie}
      />
    ))
  }

  return (
    <div>
      {renderMovies()}
      tester
    </div>
  )

}


export default Home
