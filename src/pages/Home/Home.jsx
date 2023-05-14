import "./Home.scss";
import Nabvar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Solutions from "../../components/Solutions/Solutions";
import Abonnement from "../../components/Abonnement/Abonnement";
import Bottombar from "../../components/Bottombar/Bottombar";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="Home">
      <Nabvar />
      <Introduction />
      <Element id="solutions">
        <Solutions />
      {/* </Element>
      <Element id="abonnement">
        <Abonnement /> */}
      </Element>
      <Bottombar />
    </div>
  );
}

export default Home;
