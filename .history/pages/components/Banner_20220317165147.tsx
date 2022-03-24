import styles from "../../styles/Banner.module.scss"

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.BannerImg}>
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/sfjqJDmNqMIImO5khiddb9TARvO.jpg" />
            </div>
            <div className={styles.title}>
                <h2>Welcome</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
        </div>
    )
}

export default Banner