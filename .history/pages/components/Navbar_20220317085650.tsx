import styles from "../../styles/Navbar.module.scss"

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarItem}>
                <div>
                    tester
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
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
            <div className={styles.NavbarIcon}>
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