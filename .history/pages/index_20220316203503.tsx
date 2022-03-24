import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './components/Moviecard'
import Youtube from 'react-youtube'


const Home: NextPage = () => {

  const API_URL = "https://api.themoviedb.org/3"
  const API_KEY = "b3802c15c1569a1a0caa6bee01c6f23e"
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey
      }
    })

    setMovies(results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const renderMovies = () => {
    movies.map((movie: any) => (
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
