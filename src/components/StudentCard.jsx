import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="container">
      <div className="card">
        <img className="student-image" src={props.image} alt={props.nom} />
        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>

        
        {coordonneesVisibles && (
          <>
            <p><strong>Email :</strong> {props.email}</p>
            <p><strong>Téléphone :</strong> {props.tel}</p>
          </>
        )}

        <p><strong>Filière :</strong> {props.filiere}</p>
        <p><strong>Année :</strong> {props.anneEtude}</p>
        <p><strong>Groupe :</strong> {props.groupe}</p>
        <p><strong>Ville :</strong> {props.ville}</p>

        
        <button onClick={basculerCoordonnees}>
          {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>
        <button>Contacter</button>
        <button onClick={props.onModifier}>Modifier</button>
        <button onClick={props.onSupprimer}>Supprimer</button>
      </div>
    </div>
  );
}

export default StudentCard;