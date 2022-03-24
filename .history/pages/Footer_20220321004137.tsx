import styles from "../styles/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.singleColumn}>
            <div className={styles.container}>
                <div className={styles.join}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
                </div>
            </div>
        </footer>
    )
}

export default Footer