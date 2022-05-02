import "../styles/users.css";
import calories from "../assets/calories.svg";
import proteines from "../assets/proteines.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";

import WeightChart from "../chart/wheight";
import RadarActivity from "../chart/Radar";
import ObjectifChart from "../chart/Objectifs";
import ScoreChart from "../chart/Score";
import Stats from "../components/Statistiques";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findID } from "../utils/Tools";
import PropTypes from 'prop-types' ;

export default function User() {

  const {id} = useParams()
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      const response = await findID(id)
      setUser(response)
    }
    getUser()
    
  }, [id] )


  return (

    <div className="userpage">

      <div className="user-infos">

        {user &&
        <h1>
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        }
        <h2>Félicitation! Vous avez explosé vos objectifs hier 👏 </h2>

      </div>

      <div className="user-graphics">

        {user &&

        <div className="user-charts">

          <div className="user-weight">
            <WeightChart id={user.id}/>
          </div>

          <div className="user-objectif">
            <h3>Durée moyenne des sessions</h3>
            <ObjectifChart id={user.id}/>
          </div>

          <div className="user-radar">
            <RadarActivity id={user.id}/>
          </div>

          <div className="user-score">
            <h3>Score</h3>
            <ScoreChart id={user.id}/>
          </div>
          
          <div className="user-symbols">
            <Stats name="Calories" value={`${String(user.keyData.calorieCount).replace(/(.)(?=(\d{3})+$)/g,'$1,')}kCal`} img={calories} />
            <Stats name="Proteines" value={`${user.keyData.proteinCount}g`} img={proteines} />
            <Stats name="Glucides" value={`${user.keyData.carbohydrateCount}g`} img={glucides} />
            <Stats name="Lipides" value={`${user.keyData.lipidCount}g`} img={lipides} />
          </div>

        </div>

        }

      </div>

    </div>
  );
  
}

User.propTypes = {
  id : PropTypes.number
}