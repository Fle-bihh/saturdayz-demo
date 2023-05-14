import "./Solutions.scss";
import box1Img from "../../images/box1Img.png";
import box2Img from "../../images/box2Img.png";
import box3Img from "../../images/box3Img.png";
import useWindowSize from "../../Utils";

function Solutions() {
  const wSize = useWindowSize();

  return (
    <div className="Solutions">
      <div className="solution1">
        <div className="boxTitle">
          Maximisez vos <span className="orangeWord">réservations</span> et optimisez votre gestion
        </div>
        <div className="columnContainer">
          <div className="box1Column">
            <div className="box1Title">Gestion des réservations</div>
            <div className="box1Text2">
              Donnez à vos clients la possibilité de réserver 24h/24 sur
              l’application ou le site web Saturdayz et augmentez vos flux.
            </div>
            <div className="box1Title">Dites au revoir aux No-Shows</div>
            <div className="box1Text">
              Maximisez vos couvertures avec notre système de mails et
              notifications automatiques de rappel et de confirmation quelques
              heures avant la réservation.
            </div>
            <div className="box1Title">Widgets de réservation</div>
            <div className="box1Text">
              Implantez un widget de réservation personnalisé pour faciliter les
              réservations depuis votre site web, et à travers Google Reserve.
            </div>
            <div className="box1Title">Gestion des tables</div>
            <div className="box1Text">
              Optimisez les places assises et le service avec les affectations
              de tables intelligentes et un plan de salle intuitif qui vous
              renseigne sur les disponibilités.
            </div>
          </div>
          {wSize.width > 1405 ? <img src={box1Img} alt="box1Img" className="box1Img" /> : <div></div>}
        </div>
      </div>
      <div className="solution2">
        <div className="boxTitle">
          Augmentez votre <span className="orangeWord">visibilité</span> grâce à Saturdayz
        </div>
        <div className="columnContainer">
          {wSize.width > 1400 ? <img src={box2Img} alt="box2Img" className="box2Img" /> : <div></div>}
          <div className="box2Column">
            <div className="box2Title">
              Faire partie d’une communauté grandissante
            </div>
            <div className="box2Text">
              Attirez une clientèle de locaux et de touristes élargie grâce à
              votre présence sur Saturdayz, et Google Reserve
            </div>
            <div className="box2Title2">Les Stories</div>
            <div className="box2Text2">
              Publiez des formats "story" en direct sur l'application, qui
              durent 24 heures et apparaissent sur l'onglet "Explorer" pour
              attirer l'attention des utilisateurs.
            </div>
            <div className="box2Title2">Promotions et systèmes de fidélité</div>
            <div className="box2Text">
              Proposez des incitations pendant les heures creuses pour attirer
              plus de clients et fidélisez-vos clients grâce à des offres
              exclusives sur Saturdayz.
            </div>
            <div className="box2Title2">Réseaux sociaux et newsletter</div>
            <div className={wSize.width > 400 ? "box2Text2" : "box2Text"}>
              Gagnez en popularité en apparaissant sur les réseaux sociaux et
              les newsletters ciblées de Saturdayz.
            </div>
          </div>
        </div>
      </div>
      <div className="solution3">
        <div className="boxTitle">
          Vos <span className="orangeWord">clients</span> sont rois, apprenez à les connaître
        </div>
        <div className="columnContainer">
          <div className="box3Column">
            <div className="box3Title">Outils de gestion des clients</div>
            <div className="box3Text">
              Construisez des relations plus solides avec les clients grâce à
              des outils de gestion de la clientèle de pointe et gardez-les
              fidèles.
            </div>
            <div className="box3Title3">
              Préférences automatisées des clients
            </div>
            <div className="box3Text">
              Identifiez et reconnaissez les clients en fonction de leurs
              préférences.
            </div>
            <div className="box3Title2">Gestion des avis</div>
            <div className="box3Text">
              Seuls les utilisateurs ayant visité votre établissement peuvent
              émettre un avis, de sorte à ce que les avis soient les plus
              fiables possibles. Vous pouvez les gérer et y répondre.
            </div>
          </div>
          {wSize.width > 1400 ? <img src={box3Img} alt="box3Img" className="box3Img"></img> : <div></div>}
        </div> 
      </div>
    </div>
  );
}

export default Solutions;
