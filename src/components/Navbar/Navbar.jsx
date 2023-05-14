import "./Navbar.scss";
import logoDemo from "../../images/logoDemo.png";
import logoMyResto from "../../images/logoMyResto.png";
import useWindowSize from "../../Utils";

function Navbar() {
  const wSize = useWindowSize();

  return (
    <div className="Navbar">
      <div className="homeTitle">
        <div className="circleLogo">
          <div className="blueCircle"></div>
          <div className="redCircle"></div>
        </div>
        <div className="titleLogo">{wSize.width}</div>
      </div>
      <div className="buttons">
        <div className="blackButton">
          {wSize.width > 958 ? (
            <a href="https://calendly.com/saturdayz/45min" target="blank">
              <div className="bbText">Demander une démo</div>
            </a>
          ) : (
            <a href="https://calendly.com/saturdayz/45min" target="blank">
              <img src={logoDemo} className="logoDemo" alt="logoDemo"></img>
            </a>
          )}
        </div>
        <div className="whiteButton">
          {wSize.width > 958 ? (
            <div className="wbText">Mon restaurant</div>
          ) : (
            <img
              src={logoMyResto}
              className="logoMyResto"
              alt="logoMyResto"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
