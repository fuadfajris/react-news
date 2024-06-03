import styles from './Navbar.module.css';
import newsIcon from '../../assets/news-icon.svg';

import { useState } from 'react';
import {Link} from "react-router-dom";
import { CATEGORIES } from '../../constants/categories';
import classnames from 'classnames';

const Navbar = () => {
    const [selected, setSelected] = useState('');
    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img src={newsIcon} alt="navbar icon" className={styles.navIcon} />
                <h1 className={styles.navTitle}>NEWS</h1>
            </div>

            <div className={styles.categories}>
                {CATEGORIES.map((category, index) => {
                    return (
                        <Link
                            key={index}
                            onClick={() => setSelected(category.name)}
                            to={`/${category.slug}`}
                            className={classnames(styles.category, {
                                [styles.selected] : selected === category.name
                            })}
                        >
                            {category.name}
                        </Link>
                        // <div></div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar;