import "./Introduction.scss";
import introImage from "../../images/IntroSamediz.png";
import useWindowSize from "../../Utils";

function Introduction() {
  const scrollToSolutions = () => {
    const solutionsElement = document.getElementById("solutions");
    solutionsElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      window.scrollBy({
        top: -80,
        left: 0,
        behavior: "smooth",
      });
    }, 700);
    // window.scrollBy(0, 830, {behavior: "smooth"});
    // setTimeout(() => {
    // }, 700);
  };

  // const scrollToAbonnement = () => {
  //   const solutionsElement = document.getElementById("abonnement");
  //   solutionsElement.scrollIntoView({ behavior: "smooth" });
  // };

  const wSize = useWindowSize();

  return (
    <div className="Introduction">
      <div className="introComponent">
        <div className="introLeft">
          <div className="introText">
            Saturdayz, la plateforme Marocaine qui{" "}
            <span className="orangeWord">révolutionne</span> la gestion de votre
            restaurant
          </div>
          <div className="introButtons">
            <div
              className="soluButton"
              onClick={() => {
                scrollToSolutions();
              }}
            >
              <div className="buttonText">Nos solutions</div>
              <div className="downArrow">{">"}</div>
            </div>
            {/* <div className="aboButton" onClick={() => scrollToAbonnement()}>
            <div className="buttonText">Nos abonnements</div>
            <div className="downArrow">{">"}</div>
          </div> */}
          </div>
          <div className="googleText">
            En partenariat avec{" "}
            <span className="gTextBold">Google Reserve</span>
          </div>
        </div>
        <div className="introRight">
          {wSize.width > 1200 ? (
            <img
              src={introImage}
              className="introImage"
              alt="introsamediz"
            ></img>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
