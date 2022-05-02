import "../style/header.css"
import LogoSportSee from "../assets/logoSportSee.svg"

export default function Header() {

    return (

        <div className='header'>

            <img src={LogoSportSee} alt="Logo Sport See" />

            <nav className="header-nav">

            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>

                <li>
                    <a href="/">Profil</a>
                </li>

                <li>
                    <a href="/">Réglage</a>
                </li>

                <li>
                    <a href="/">Communauté</a>
                </li>
            </ul>

            </nav>
            
        </div>

    )
}