import styles from "../../styles/Navbar.module.scss"

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarItem}>
                <div>
                    TMDB
                </div>
                <div>
                    movies
                </div>
                <div>
                    TV Shows
                </div>
                <div>
                    People
                </div>
                <div>
                    More
                </div>
            </div>
            <div>
                <div>
                    +
                </div>
                <div>
                    EN
                </div>
                <div>
                    Bel
                </div>
                <div>
                    Facebook
                </div>
                <div>
                    search
                </div>
            </div>
        </div>
    )
}

export default Navbar