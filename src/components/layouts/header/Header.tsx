import styles from './Header.module.scss'

function Header () {
    return (
        <header className={styles.Header}>
          <div className={styles.menu}>
            <p>p1</p>
            <p>p2</p>
            <p>p3</p>
            <p>p4</p>
            <p>p5</p>
          </div>
          헤더
        </header>
    )
}

export default Header;