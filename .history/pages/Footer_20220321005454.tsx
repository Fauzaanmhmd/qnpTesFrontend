import styles from "../styles/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.singleColumn}>
            <div className={styles.container}>
                <div className={styles.join}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
                    <a href="https://www.themoviedb.org/u/fauzaanmhmd" className={styles.rounded}>Hi Fauzan Muhammad</a>
                </div>
                <div className={styles.basic}>
                    <h3>The Basics</h3>
                    <ul>
                        <li><a>About TMDB</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Support Forums</a></li>
                        <li><a>API</a></li>
                        <li><a>System Status</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer