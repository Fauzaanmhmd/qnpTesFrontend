import styles from "../../styles/Navbar.module.scss"
import { ImPlus } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";


const Navbar = () => {
    const [showPlus, setShowPlus] = useState(false)

    const submitPlus = () => {
        setShowPlus(true)
    }

    return (
        // <div className={styles.Navbar}>
        <div className={styles.navbar}>
            <script src="https://use.fontawesome.com/e0c39de9e2.js"></script>
            <div className={styles.navbarContainer}>
                <h3>Forum anak IT</h3>
            </div>
            <div className={styles.searchBar}>
                {/* <SearchBar placeholder="Search....." data={Vote} /> */}
            </div>
            <div className={styles.menuBar}>
                <ul>
                    <li><a href="#">Categories</a>
                        <div className={styles.subMenu}>
                            <ul>
                                <li><a>Linux</a></li>
                                <li><a>Windows</a></li>
                                <li><a>MAC OS</a></li>
                                <li><a>Android</a></li>
                                <li><a>iOS</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>


        // </div>
    )
}

export default Navbar