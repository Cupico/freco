import { useState } from "react";

function Body() {
  const [image, setImage] = useState("freco1.png");
  const [anime, setAnime] = useState("");
  const [textButton, setTextButton] = useState("Ouvrir");
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    if (!isOpen) {
      setAnime("door");
      setImage("freco3.png");
      setTextButton("Fermer");
      setIsOpen(true);
    } else {
      setAnime("");
      setImage("freco1.png");
      setTextButton("Ouvrir");
      setIsOpen(false);
    }
  };

  return (
    <div className="container-body">
      <div className="container-left">
        <p className="title-left">Une entreprise dans le domaine du low-tech</p>
        <p>
          Notre entreprise "Freco" est une entreprise qui a pour mission de
          construire des garde-manger en bois afin de conserver tout type
          d'aliments. Nous voulons donc remplacer le réfrigérateur électrique
          par un garde-manger qui n'utilise très peu voir aucune énergie.
        </p>
      </div>
      <div className="container-center">
        <img id="test" src={image} className={anime} alt="Garde-Manger" />
        <button className="button-img" onClick={open}>
          {textButton}
        </button>
      </div>
      <div className="container-right">
        <p className="title-right">Le garde-manger comme solution</p>
        <p>
          Pour pallier aux problèmes de gaspillage alimentaire et réduire la consommation d'énergie d'un foyer, notre garde-manger s'inscrit dans une démarche d'alimentation durable. 
        </p>
      </div>
    </div>
  );
}
export default Body;
