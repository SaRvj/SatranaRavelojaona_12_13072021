import "./HomePage.css"
import { Link } from "react-router-dom"
import Logo from "../../Assets/logoSportSee.png"
import ContextButton from "../../Components/ContextButton/ContextButton"

/**
 * Home selection for user 12 or user 18 and Api or Mock
 */

const HomePage = () => {
  return (
    <main className="Home">
      <img src={Logo} className="headerLogo" alt="Logo Sportsee"></img>
      <div>
        <Link to={`/dashboard/12`}>
          <button>Utilisateur 12</button>
        </Link>
        <Link to={`/dashboard/18`}>
          <button>Utilisateur 18</button>
        </Link>
      </div>
      <ContextButton />
    </main>
  )
}

export default HomePage
