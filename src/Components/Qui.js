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
        Nous sommes un groupe d'étudiants, du Pôle Léonard de Vinci situé à la Défense, regroupant 3 écoles différentes : l'ESILV, l'EMLV et l'IIM.
        <br/>
        <br/>
        Dans le cadre d'un hackathon portant sur des projets lowtech, nous avons choisis de crée une entreprise, Freco, avec comme produit la création d'un garde-manger. 
      </p>
    </div>
  );
}

export default Qui;
