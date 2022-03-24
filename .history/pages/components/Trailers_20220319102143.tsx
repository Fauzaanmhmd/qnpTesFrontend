const Trailers = () => {
    const MOVIE_API = "https://api.themoviedb.org/3/tv"
    const DISCOVER_API = `${MOVIE_API}/{tv_id}/season/{season_number}/images`

    return (
        <div>
            <div>{DISCOVER_API}</div>
        </div>
    )
}

export default Trailers