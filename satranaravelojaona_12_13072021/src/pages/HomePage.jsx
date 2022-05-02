import "../styles/homepage.css"
import color from "../assets/html-colorI.jpg"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="homepage">
            <img className='banner-image' src={color} alt='background' />
            <h1 className="slogan">PAGE D'ACCUEIL DU SITE SPORTSEE</h1>
            <Link to="/user/12" className="user12link">Utilisateur 12 : Karl</Link>
            <Link to="/user/18" className="user18link">Utilisateur 18 : Cecilia</Link>
        </div>
        
      
    )
}