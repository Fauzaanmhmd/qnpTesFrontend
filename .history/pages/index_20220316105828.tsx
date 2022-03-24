import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Section from './Section'
import { useEffect } from 'react'
import axios from 'axios'


const Home: NextPage = () => {

  const API_URL = "https://api.themoviedb.org/3"

  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })

    console.log('data', data);
  }

  useEffect(() => {
    fetchMovies()
  }, [])



  return (
    <div>
      mantap
      <Section />
    </div>
  )
}

export default Home
