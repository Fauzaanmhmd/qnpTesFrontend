import styles from "../../styles/Navbar.module.scss"

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarItem}>
                <div>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" />
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