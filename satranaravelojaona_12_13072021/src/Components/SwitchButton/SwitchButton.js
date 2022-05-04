import { useContext } from "react"
import { fetchSwitch } from "../../Utils/Switch/fetchSwitch"

/**
 * Button that switches between API and Mock
 */

const SwitchButton = () => {
  const { toggleFetch, fetch } = useContext(fetchSwitch)

  return (
    // useContext allows to retrieve function to switch between API and Mock
    <button onClick={() => toggleFetch()}>
      Data From {fetch === "API" ? "API" : "Mock"}
    </button>
  )
}

export default SwitchButton
