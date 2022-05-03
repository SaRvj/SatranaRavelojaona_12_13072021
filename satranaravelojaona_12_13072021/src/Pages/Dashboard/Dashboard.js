import "./Dashboard.css"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { fetchSwitch } from "../../Utils/Switch/fetchSwitch"

import caloriesIcon from "../../Assets/KeyData/calories.png"
import carbsIcon from "../../Assets/KeyData/carbs.png"
import fatIcon from "../../Assets/KeyData/fat.png"
import proteinIcon from "../../Assets/KeyData/protein.png"

import Header from "../../Components/Header/Header"
import Aside from "../../Components/Aside/Aside"

import KeyData from "../../Components/KeyData/KeyData"
import Weight from "../../Components/Charts/Weight"
import Objectifs from "../../Components/Charts/Objectifs"
import Radarr from "../../Components/Charts/Radarr"
import Kpi from "../../Components/Charts/Kpi"

import urldatamock from "../../Utils/urldatamock"
import urldataAPI from "../../Utils/urldataAPI"
import Apifetch from "../../Utils/Apifetch"

/**
 * Dashboard fetching the data and displaying the metric charts + Header + Vertical nav
 */

const Dashboard = () => {
  let { idURL } = useParams()
  let loadingComplete = true

  // Checks if the fetch should be made from API or Mock and paste the correct paths
  const { fetch } = useContext(fetchSwitch)
  const url = fetch === "Mock" ? urldatamock : urldataAPI

  const mainData = Apifetch(url.urlMainData(idURL))
  const activity = Apifetch(url.urlActivity(idURL))
  const sessions = Apifetch(url.urlSessions(idURL))
  const performance = Apifetch(url.urlPerformance(idURL))

  // Checks if all necessary data has been loaded
  if (
    mainData === null ||
    activity === null ||
    sessions === null ||
    performance === null
  ) {
    return (loadingComplete = false)
  }

  return loadingComplete === false ? (
    console.log("Chargement...")
  ) : (
    <>
      <Header />
      <main className="Dashboard">
        <h1>
          Bonjour <span>{mainData.userInfos.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        <section className="Activities">
          <div className="ChartsWrapper">
            <Weight data={activity.sessions} />
            <Objectifs data={sessions.sessions} />
            <Radarr data={performance.data} />
            <Kpi data={mainData.score} />
          </div>
          <div className="KeyDataWrapper">
            <KeyData
              src={caloriesIcon}
              name="Calories"
              number={mainData.keyData.calorieCount + "kCal"}
            />
            <KeyData
              src={proteinIcon}
              name="Proteines"
              number={mainData.keyData.proteinCount + "g"}
            />
            <KeyData
              src={carbsIcon}
              name="Glucides"
              number={mainData.keyData.carbohydrateCount + "g"}
            />
            <KeyData
              src={fatIcon}
              name="Lipides"
              number={mainData.keyData.lipidCount + "g"}
            />
          </div>
        </section>
      </main>
      <Aside />
    </>
  )
}

export default Dashboard