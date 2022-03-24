import styles from "../../styles/Navbar.module.scss"
import { ImPlus } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler"
import Link from "next/link"

const Navbar = () => {
    const [showPlus, setShowPlus] = useState(false)
    const [showEn, setShowEn] = useState(false)

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
            <div className={styles.MenuBar1}>
                <ul className={styles.NavbarIcon} >
                    <li>
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setShowPlus(false);
                            }}
                        >
                            <a onClick={() => setShowPlus(!showPlus)}><ImPlus />
                                {showPlus}
                            </a>
                        </OutsideClickHandler>
                    </li>
                    <li>
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setShowEn(false);
                            }}
                        >
                            <a onClick={() => setShowEn(!showEn)} className={styles.Language}>EN</a>
                        </OutsideClickHandler>
                    </li>
                    <li className={styles.SubIcon}><a><IoIosNotifications /></a>
                    </li>
                    <li className={styles.SubIcon}><a><IoMdSearch /></a>
                    </li>
                </ul>
            </div>

            {
                showPlus &&
                <div className={styles.SubmenuPlus}>
                    <ul>
                        <Link href="https://www.themoviedb.org/movie/new">
                            <li>
                                <p>Add New Movie</p>
                            </li>
                        </Link>
                        <Link href="https://www.themoviedb.org/movie/new">
                            <li>
                                <p>Add New Tv Show</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            }
            {
                showEn &&
                <div className={styles.SubmenuEn}>
                    <h3>Language Preferences</h3>
                    <div className={styles.SubContainer}>
                        <div className={styles.DefaultLanguage}>
                            <p>Default Language</p>
                            <p>Reset</p>
                        </div>
                        <datalist id="suggestions">
                            <option>tester</option>
                            <option>tester</option>
                        </datalist>
                        <input placeholder="English (en-US)" autoComplete="on" list="suggestions" />

                        <div className={styles.FallbackLanguage}>
                            <p>Fallback Language</p>
                        </div>
                        <datalist id="suggestions">
                            <option>tester</option>
                            <option>tester</option>
                        </datalist>
                        <input placeholder="None (Don't Fallback)" autoComplete="on" list="suggestions" />
                        <button>RELOAD PAGE</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar