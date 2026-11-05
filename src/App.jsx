import './App.css';
import { useState } from "react";
import StudentCard from './components/StudentCard.jsx';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from './assets/123.jpg';
import Image1 from './assets/img1.avif';
import Image2 from './assets/img3.jpg';
import Image3 from './assets/img2.avif';
import Image5 from './assets/img5.jpg';

function App() {

  const [etudiants, setEtudiants] = useState([
    { nom: "ben rayana", prenom: "hamza", email: "benrayanahamza2007@gmail.com",
      tel: "+216 93 865 001", filiere: "Génie Logiciel et Système d'information",
      anneEtude: "2026/2027", groupe: "GLSI 2 B", ville: "teboulba", image: Image },
    { nom: "Boubaker", prenom: "Slim", email: "slimboubaker@gmail.com",
      tel: "+216 93 555 555", filiere: "Génie Logiciel et Système d'information",
      anneEtude: "2026/2027", groupe: "GLSI 2 A", ville: "Mahdia", image: Image1 },
    { nom: "Trabelsi", prenom: "Sarra", email: "sarratrabelsi@gmail.com",
      tel: "+216 95 999 999", filiere: "Licence Computer Science",
      anneEtude: "2026/2027", groupe: "LCS 1", ville: "Sousse", image: Image2 },
    { nom: "Khalfallah", prenom: "Abdessattar", email: "abdesssattarkhalfallah@gmail.com",
      tel: "+216 95 333 565", filiere: "Licence Business Computing",
      anneEtude: "2026/2027", groupe: "LBC 2", ville: "Béja", image: Image3 },
  ]);

  const [recherche, setRecherche] = useState("");

 
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      nom: "Ben Salem",
      prenom: "Yassine",
      email: "yassine" + Date.now() + "@gmail.com", // email فريد في كل مرة
      tel: "+216 44 444 444",
      filiere: "Génie Logiciel et Système d'information",
      anneEtude: "2026/2027",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: Image5,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  
  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((e) => e.email !== email));
  }

  
  function modifierEtudiant(email) {
    const nouveauPrenom = prompt("Entrez le nouveau prénom :");
    if (!nouveauPrenom || nouveauPrenom.trim() === "") return;

    setEtudiants(
      etudiants.map((e) =>
        e.email === email ? { ...e, prenom: nouveauPrenom.trim() } : e
      )
    );
  }


  const etudiantsFiltres = etudiants.filter((e) => {
    const texte = recherche.toLowerCase();
    return (
      e.nom.toLowerCase().includes(texte) ||
      e.prenom.toLowerCase().includes(texte) ||
      e.filiere.toLowerCase().includes(texte)
    );
  });

  return (
    <div className="page" id="accueil">
      <Header />
      <Navbar />

      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      <main className="student-list" id="etudiants">
        {etudiantsFiltres.map((e) => (
          <StudentCard
            key={e.email}
            nom={e.nom}
            prenom={e.prenom}
            email={e.email}
            tel={e.tel}
            filiere={e.filiere}
            anneEtude={e.anneEtude}
            groupe={e.groupe}
            ville={e.ville}
            image={e.image}
            onSupprimer={() => supprimerEtudiant(e.email)}
            onModifier={() => modifierEtudiant(e.email)}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;