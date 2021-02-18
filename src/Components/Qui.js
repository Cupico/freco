import Nous from "./Nous.js";

function Qui() {
  return (
    <div id="qui-sommes-nous" className="qui">
      <p className="section-title">Qui sommes-nous ?</p>
      <div className="qui-nous">
        <Nous />
      </div>
      <p className="text-qui">
        {" "}
        Nous sommes un groupe d'étudiants, du Pôle Léonard de Vinci situé à la
        Défense, regroupant 3 écoles différentes : l'ESILV, l'EMLV et l'IIM.
        <br />
        <br />
        Dans le cadre d'un hackathon portant sur sur le domaine de la lowtech,
        nous avons choisis de crée une entreprise, Freco, avec comme produit la
        création d'un garde-manger. Mais pourquoi un garde-manger ? D'une part
        car le réfrigérateur est source d'une grande consommation d'énergie dans
        le foyer, en règle générale, le frigo représente entre 15 et 20% de la
        consommation d'un foyer, avec une moyenne de 322 kWh par an. D'autres
        part, il alimente le gaspillage alimentaire ; Chaque année, la France
        gaspille près de 10 millions de tonnes de produits alimentaires, soit
        317 kg par seconde (compteur). Sur ces 10 millions de tonnes, plus de
        1,2 concerne de la nourriture encore consommable. C'est fortement dû aux
        habitudes des consommateurs et de la mauvaise gestion de leur
        réfrigérateur. <br />
        <br />
        C'est pourquoi notre solution est un système simple et accessible en
        terme de coût, qui repond aux problèmes de gaspillages alimentaire ainsi
        que de la consommation d'énergie d'un réfrigérateur.
      </p>
    </div>
  );
}

export default Qui;
