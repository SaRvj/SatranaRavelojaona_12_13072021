import "./Error.css"
import { Link } from "react-router-dom"
import Logo from "../../Assets/logoSportSee.png"

/**
 * Error page displayed in case of fetch error
 */

const Error = () => {
  return (
    <main className="Error">
      <img src={Logo} className="headerLogo" alt="Logo Sportsee"></img>
      <p>Oups... On dirait qu'il y a eu une erreur !</p>
      <Link to={`/`}>
        <button>Retourner vers l'accueil</button>
      </Link>
    </main>
  )
}

export default Error
