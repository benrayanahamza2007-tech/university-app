
function StudentCard(props) {

  return (
    <div className='container'>
        <div className='card'>
            <img className="student-image" src={props.image} alt={props.nom} />
            <h1>Fiche etudiant</h1>
            <p><strong>Nom & Prénom :</strong> {props.nom}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Téléphone:</strong>{props.tel}</p>
            <p><strong>Filière:</strong>{props.filiere}</p>
            <p><strong>Année d'étude :</strong>{props.anneEtude}</p>
            <p><strong>Groupe:</strong>{props.groupe}</p>
            <p><strong>Ville:</strong> {props.ville}</p>
            <button >contacter</button>
            </div>
      
    </div>);}
    export default StudentCard;