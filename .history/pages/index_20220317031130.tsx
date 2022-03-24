import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './components/Moviecard'
import Youtube from 'react-youtube'
import { ReactNode } from 'react'


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


  return (
    <div></div>

  )

}


export default Home
