import "../../styles/Aside.css"
import yoga from "../../Assets/Aside/yoga.png"
import swim from "../../Assets/Aside/swim.png"
import bike from "../../Assets/Aside/bike.png"
import dumbell from "../../Assets/Aside/dumbell.png"

/**
 * Vertical nav
 */

const Aside = () => {
  return (
    <div className="SideBar">
      <nav className="SideBarMenu">
        <button>
          <img src={yoga} alt="Icon" className="SideBarIcon"></img>
        </button>
        <button>
          <img src={swim} alt="Icon" className="SideBarIcon"></img>
        </button>
        <button>
          <img src={bike} alt="Icon" className="SideBarIcon"></img>
        </button>
        <button>
          <img src={dumbell} alt="Icon" className="SideBarIcon"></img>
        </button>
      </nav>
      <span className="copyrightLabel">Copyright, Sportsee 2020</span>
    </div>
  )
}

export default Aside
