import styles from "../styles/Leaderboard.module.scss"

const Leaderboard = () => {
    return (
        <section className={styles.Container}>
            <div className={styles.ColumnWrapper}>
                <div className={styles.Column}>
                    <div className={styles.ColumnHeader}>
                        <h2>Leaderboard</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leaderboard