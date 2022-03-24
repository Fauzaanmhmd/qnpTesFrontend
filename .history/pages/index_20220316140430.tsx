import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './components/Moviecard'


const Home: NextPage = () => {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })

    setMovies(results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const renderMovies = () => {
    movies.map(movie: any => (
      <MovieCard
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
