import styles from "../styles/Leaderboard.module.scss"
import { BsDot } from "react-icons/bs";

const Leaderboard = () => {
    return (
        <section className={styles.Container}>
            <div className={styles.ColumnWrapper}>
                <div className={styles.Column}>
                    <div className={styles.ColumnHeader}>
                        <h2>Leaderboard</h2>
                        <div className={styles.HeaderEdit}>
                            <span>
                                <p><BsDot />All Time Edit</p>
                            </span>
                            <span>
                                <p>Edit This Week</p></span>
                        </div>
                    </div>
                    <div className={styles.Content}>
                        <ol className={styles.Leaderboard}>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/blackisle">
                                        <span>B</span>
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/blackisle">blackisle</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                        <h4>26,399</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeek}>
                                        </div>
                                        <h4>12,206</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatarC}>
                                    <a href="https://www.themoviedb.org/u/chinaow">
                                        <span>C</span>
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/chinaow">chinaow</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                        <h4>13,665</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekC}>
                                        </div>
                                        <h4>9,235</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatarJ}>
                                    <a href="https://www.themoviedb.org/u/jinbvcx">
                                        <span>J</span>
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/jinbvcx">jinbvcx</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                        <h4>10,783</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekJ}>
                                        </div>
                                        <h4>7,772</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/talestalker">
                                        <img src="https://www.themoviedb.org/t/p/w64_and_h64_face/hjvyN4SrXqXy316GkbOshW8sGXJ.jpg" />
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/talestalker">talestalker</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gaugeT}>
                                        </div>
                                        <h4>688,597</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeek}>
                                        </div>
                                        <h4>7,246</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/banana_girl">
                                        <img src="https://www.themoviedb.org/t/p/w64_and_h64_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg" />
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/banana_girl">Banana</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gaugeB}>
                                        </div>
                                        <h4>2,031,884</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekB}>
                                        </div>
                                        <h4>4,910</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/raze464">
                                        <img src="https://www.themoviedb.org/t/p/w64_and_h64_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" />
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/raze464">raze464</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gaugeR}>
                                        </div>
                                        <h4>278,972</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekR}>
                                        </div>
                                        <h4>12,206</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/RazieWod">
                                        <span>R</span>
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="/u/blackisle">Raziewood</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                        <h4>26,399</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekRW}>
                                        </div>
                                        <h4>12,206</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="/u/blackisle">
                                        <img src="https://www.gravatar.com/avatar/15707feae4530e41c95f8a2350dd575b.jpg?s=64" />
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="/u/blackisle">beyz</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                        <h4>4,695</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekBz}>
                                        </div>
                                        <h4>3,458</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/pingu51">
                                        <span>P</span>
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/pingu51">pingu51</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gaugeP}>
                                        </div>
                                        <h4>256,203</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekP}>
                                        </div>
                                        <h4>3,497</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className={styles.avatar}>
                                    <a href="https://www.themoviedb.org/u/Manuros72">
                                        <img src="https://www.themoviedb.org/t/p/w64_and_h64_face/iAYi2O9PSMSgWg6xVOomCnO7unN.jpg" />
                                    </a>
                                </span>
                                <div className={styles.data}>
                                    <h3>
                                        <a href="https://www.themoviedb.org/u/Manuros72">Manuros72</a>
                                    </h3>
                                    <div className={styles.meter}>
                                        <div className={styles.gauge}>
                                        </div>
                                        <h4>49,465</h4>
                                    </div>
                                    <div className={styles.meterThisWeek}>
                                        <div className={styles.gaugeThisWeekM}>
                                        </div>
                                        <h4>3,458</h4>
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