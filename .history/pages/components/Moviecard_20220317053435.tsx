const MovieCard = ({ movie, selectMovie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"
    console.log(movie)

    return (
        <div>
            {movie.title}
        </div>
    )
}

export default MovieCard