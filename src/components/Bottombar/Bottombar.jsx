import "./Bottombar.scss";
import instaIcon from "../../images/instaIcon.png";
import inIcon from "../../images/inIcon.png";

import PC from "./assets/PCstdz.pdf";
import CGU from "./assets/CGUstdz.pdf";

function Bottombar() {
  return (
    <div className="Bottombar">
      <div className="columnContainer">
        <div className="botColumn">
          <div className="botTitle">SATURDAYZ</div>
          <div className="botText">À propos</div>
          <div className="botText">FAQ</div>
          <a href={PC} target="blank">
            <div className="botText">Politique de confidentialité</div>
          </a>  
          <a href={CGU} target="blank">
            <div className="botText">Conditions d'utilisation</div>
          </a>
        </div>
        <div className="botColumn2">
          <div className="botTitle">NOUS REJOINDRE</div>
          <a href="https://calendly.com/saturdayz/45min" target="blank">
            <div className="botText">Demander une démo</div>
          </a>
          <div className="botText">Nous contacter</div>
        </div>
        <div className="botColumn3">
          <div className="botTitle">PLUS</div>
          <div className="botText">Saturdayz pour IOS</div>
          <div className="botText">Saturdayz pour android</div>
          <div className="iconContainer">
            <img src={instaIcon} alt="instaIcon" className="botIcon" />
            <img src={inIcon} alt="inIcon" className="botIcon" />
          </div>
        </div>
      </div>
      <div className="cpyRightText">
        Copyright © 2023 M Tech Venture. Maroc - Tous droits réservés.
      </div>
    </div>
  );
}

export default Bottombar;
