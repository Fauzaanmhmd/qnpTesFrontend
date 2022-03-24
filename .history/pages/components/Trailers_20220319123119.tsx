import axios from 'axios'

const Trailers = () => {
    const MOVIE_API = "https://api.themoviedb.org/3/tv"
    const DISCOVER_API = `${MOVIE_API}/{tv_id}/season/{season_number}/images`

    const renderMovies = async () => {
        const { data } = await axios.get(`${DISCOVER_API}`, {

        })
        console.log(data)
    }

    return (
        <div>
            <div></div>
        </div>
    )
}

export default Trailers