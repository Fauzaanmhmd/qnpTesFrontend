import styles from "../styles/Leaderboard.module.scss"

const Leaderboard = () => {
    return (
        <section className={styles.Container}>
            <div className={styles.ColumnWrapper}>
                <div className={styles.Column}>
                    <div className={styles.ColumnHeader}>
                        <h2>Leaderboard</h2>
                        <div className={styles.HeaderEdit}>
                            <span><p>All Time Edit</p></span>
                            <span><p>Edit This Week</p></span>
                        </div>
                    </div>
                    <div className={styles.Content}>
                        <ol className={styles.Leaderboard}>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="/u/blackisle">
                                        <span>B</span>
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="/u/blackisle">blackisle</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeek}>
                                            <h4>12,206</h4>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leaderboard