import  styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/Minha_logo.png'
export function Header(){
    return(
        <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
<a href="/">
    <Image className={styles.logo} src={logo} alt='Sujeito programador logo' />
</a>
<nav>
    <Link  href="/">
        Home
    </Link>
    <Link  href="/posts">
        Conteúdos
    </Link>
    <Link  href="/sobre">
        Quem somos?
    </Link>
</nav>
<a className={styles.readyButton} href="https://www.linkedin.com/in/paulo-henrique-developer-68b541260/">COMEÇAR</a>




        </div>
            </header>
    )
}