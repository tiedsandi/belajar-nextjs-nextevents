import Link from "next/link"
import clases from './main-header.module.css'

function MainHeader(props) {
    return (
        <header className={clases.header}>
            <div className={clases.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={clases.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader