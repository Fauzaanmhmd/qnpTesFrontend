import styles from "../../styles/Navbar.module.scss"
import { ImPlus } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useState, useRef, useEffect } from "react";


const Navbar = () => {
    const [showPlus, setShowPlus] = useState(true)
    const btnRef = useRef();

    let useClickOutside = (handler: any) => {
        let domNode = useRef();
      
        useEffect(() => {
          let maybeHandler = (event:any) => {
            if (!domNode.current?.contains(event.target)) {
              handler();
            }
          };
      
          document.addEventListener("mousedown", maybeHandler);
      
          return () => {
            document.removeEventListener("mousedown", maybeHandler);
          };
        });
      
        return domNode;
      };

    useEffect(() => {
        const closeDropdown = (e: any) => {
            if (e.path[0] !== btnRef.current) {
                setShowPlus(false)
            }
        }

        document.body.addEventListener('click', closeDropdown);
        return () => document.body.removeEventListener('click', closeDropdown)
    }, []);

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
                    <li><a onClick={() => setShowPlus(prev => !prev)}><ImPlus /></a>
                    </li>
                    <li><a>EN</a>
                    </li>
                    <li className={styles.SubIcon}><a><IoIosNotifications /></a>
                    </li>
                    <li className={styles.SubIcon}><a><IoMdSearch /></a>
                    </li>
                </ul>
            </div>

            {
                showPlus &&
                <div>
                    <div className={styles.Submenu1 + (showPlus ? 'open' : 'closed')}>
                        <ul>
                            <li><p >Unread Notifications</p></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar