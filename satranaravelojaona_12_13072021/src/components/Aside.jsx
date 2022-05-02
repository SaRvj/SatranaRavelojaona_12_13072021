import "../styles/SideBar.css"
import Yoga from "../assets/yoga.svg"
import Swim from "../assets/nage.svg"
import Bike from "../assets/bike.svg"
import Dumbbell from "../assets/dumbbell.svg"

export default function Aside() {

    return (

        <div className='aside'>

            <div className='aside-list'>

                <img src={Yoga} alt='Yoga icon' />
                <img src={Swim} alt='Swimmer icon' />
                <img src={Bike} alt='Bike icon' />
                <img src={Dumbbell} alt='Dumbbell icon' />

            </div>

            <p>
                Copiryght, SportSee 2020
            </p>

        </div>

    )
}