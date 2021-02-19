function Produit() {
  return (
    <div id="notre-produit" className="container-produit">
      <p className="section-title">Notre produit</p>
      <div className="container-cards">
        <div className="card">
          <div className="card-img">
            <p className="garde-manger">Garde-Manger</p>
            <img src="freco3.png" alt="Garde-Manger" />
            <div className="price">
              <p>150€</p>
            </div>
          </div>
          <div className="logo-card">
            <div className="container-svg">
              <img src="recycler.svg" alt="recyclage" />
              <p>Réduction du gaspillage alimentaire</p>
            </div>
            <div className="container-svg">
              <img src="economie.svg" alt="économie" />
              <p>Economie d'éléctricité</p>
            </div>
            <div className="container-svg">
              <img src="conserver.svg" alt="conserver" />
              <p>Conserve les valeurs nutrionnelles des aliments</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="text">
            <p className="description-title">Description</p>
            <p className="text-description">
              {" "}
              Fabriqué en bois 
              <br />
              Dimension : 1,70m x 1.10m. <br />
              <br />
              Composé de différent compartiment pour des rangements diverses :{" "}
              <br />
              <br />- Aéré, à la lumière de la pièce : abricot, aubergine,
              avocat mais également œufs et beurre s’il ne fait pas trop chaud,
              tiroir qui est aéré. <br />
              <br />- Sec, aéré et sombre : pomme de terre, oignons, ail,
              courges, évite la germination des tubercules, racines et limite la
              maturation de certains fruits. <br />
              <br /> - Sombre, frais et humide. <br />
              <br />- Zeerpot : poterie imbriquée dans une seconde poterie.
              Entre les 2 deux, du sable est ajouté. Les aliments sont placés
              dans la poterie du milieu et le sable est régulièrement humidifié.
              Par effet d’évapo-transpiration, la température intérieure peut
              descendre de 5 à 10°C par rapport à la température ambiante.
              <br /><br />
              - Compost
              <br /><br />
              - Eventuellement un mini-frigo
            </p>
            <div className="container-button">
              <button>Acheter pour 150€</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produit;
