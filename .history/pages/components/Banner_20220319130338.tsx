import styles from "../../styles/Banner.module.scss"

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.BannerImg}>
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/sfjqJDmNqMIImO5khiddb9TARvO.jpg" />
            </div>
            <div className={styles.MediaWrap}>
                <div className={styles.title}>
                    <h1>Welcome</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <form>
                        <label>
                            <input className={styles.inputSearch} type="text" placeholder="Seach for a movie, tv show, person....." />
                            <input className={styles.inputSubmit} type="submit" value="Search" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner