import styles from "./style.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navBackground}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <li><a href="">Filmes</a></li>
                    <li><a href="">Séries</a></li>
                </div>
                <div className={styles.menu}>Menu</div>
            </div>
        </nav>
    )
}

export default Navbar;
