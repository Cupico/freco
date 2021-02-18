function Produit() {
  return (
    <div className="container-produit">
      <p className="section-title">Notre produit</p>
      <div className="container-cards">
        <div className="card">
          <div className="card-img">
            <p>Garde-Manger</p>
            <img src="freco3.png" alt="Garde-Manger" />
            <div className="price">
              <p>$70</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="text">
            <p>Description</p>
            <p className="text-description">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              elementum feugiat orci, non commodo sapien. Fusce viverra felis
              quis orci rhoncus eleifend. Maecenas semper cursus tortor eget
              ullamcorper. Vestibulum quis malesuada urna, eu rhoncus tellus. In
              ullamcorper faucibus purus, eu cursus lorem ullamcorper non.
              Vivamus commodo nibh eu elementum dictum.
            </p>
            <div className="container-button">
              <button>Achètes pour 70$</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produit;
