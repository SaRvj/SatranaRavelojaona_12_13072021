import "./Header.css"
import Logo from "../../Assets/logoSportSee.png"
import { Link } from "react-router-dom"

/**
 * Header (Logo + horizontal nav)
 */

const Header = () => {
  return (
    <header>
      <Link to={`/`}>
        <img src={Logo} className="headerLogo" alt="Logo Sportsee"></img>
      </Link>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
