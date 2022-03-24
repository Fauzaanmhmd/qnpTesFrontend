import styles from "../styles/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.singleColumn}>
            <div className={styles.container}>
                <div className={styles.join}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
                    <a href="https://www.themoviedb.org/u/fauzaanmhmd" className={styles.rounded}>Hi Fauzan Muhammad!</a>
                </div>
                <div className={styles.basic}>
                    <h3>The Basics</h3>
                    <ul>
                        <li><a href="https://www.themoviedb.org/about">About TMDB</a></li>
                        <li><a href="https://www.themoviedb.org/about/staying-in-touch">Contact Us</a></li>
                        <li><a href="https://www.themoviedb.org/talk">Support Forums</a></li>
                        <li><a href="https://www.themoviedb.org/documentation/api">API</a></li>
                        <li><a href="https://status.themoviedb.org/">System Status</a></li>
                    </ul>
                </div>
                <div className={styles.basic}>
                    <h3>Get Involved</h3>
                    <ul>
                        <li><a href="https://www.themoviedb.org/bible">Contribution Bible</a></li>
                        <li><a href="https://www.themoviedb.org/movie/new">Add New Movie</a></li>
                        <li><a href="https://www.themoviedb.org/tv/new">Add New Movie</a></li>
                        <li><a href="https://status.themoviedb.org/">Add New TV Show</a></li>
                    </ul>
                </div>
                <div className={styles.basic}>
                    <h3>Community</h3>
                    <ul>
                        <li><a href="https://www.themoviedb.org/documentation/community/guidelines">Guidelines</a></li>
                        <li><a href="https://www.themoviedb.org/discuss">Discussions</a></li>
                        <li><a href="https://www.themoviedb.org/leaderboard">Leaderboard</a></li>
                        <li><a href="https://twitter.com/themoviedb">Twitter</a></li>
                    </ul>
                </div>
                <div className={styles.basic}>
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="https://www.themoviedb.org/terms-of-use">Terms Of Use</a></li>
                        <li><a href="https://www.themoviedb.org/documentation/api/terms-of-use">API Terms Of Use</a></li>
                        <li><a href="https://www.themoviedb.org/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <section className={styles.footer}>Build 404093 (3503)</section>
        </footer>
    )
}

export default Footer