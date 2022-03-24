const MovieCard = ({ movie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div>
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" /> : null
            }
            {movie.title}
        </div>
    )
}

export default MovieCard