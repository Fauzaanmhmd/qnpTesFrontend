const MovieCard = ({ movie }: any) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div>
            {/* {movie.poster_path &&
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
            }
            <div className={"flex between movie-infos"}>
                <h5 className={"movie-title"}>{movie.title}</h5>
                {movie.vote_average ? <span className={"movie-voting"}>{movie.vote_average}</span> : null}
            </div> */}
            {movie.title}
        </div>
    )
}

export default MovieCard