import styles from "../../styles/Navbar.module.scss"
import { BsPlusLg } from "react-icons/bs";
const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.MenuBar}>
                <ul className={styles.NavbarItem}>
                    <li><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" /></li>
                    <li><a>Movies</a>
                        <div className={styles.Submenu}>
                            <ul>
                                <li>Popular</li>
                                <li>Now Playing</li>
                                <li>Upcoming</li>
                                <li>Top Rated</li>
                            </ul>
                        </div>
                    </li>
                    <li><a>TV Shows</a>
                        <div className={styles.Submenu}>
                            <ul>
                                <li>Popular</li>
                                <li>Now Playing</li>
                                <li>Upcoming</li>
                                <li>Top Rated</li>
                            </ul>
                        </div>
                    </li>
                    <li><a>People</a>
                        <div className={styles.Submenu}>
                            <ul>
                                <li>Popular</li>
                            </ul>
                        </div>
                    </li>
                    <li><a>More</a>
                        <div className={styles.Submenu}>
                            <ul>
                                <li>Discussion</li>
                                <li>Leaderbord</li>
                                <li>Support</li>
                                <li>API</li>
                            </ul>
                        </div>
                    </li>
                </ul>
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