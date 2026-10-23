import './App.css';
import StudentCard from './components/StudentCard.jsx';
import Image from './assets/123.jpg'
import Image1 from './assets/img1.avif'
import Image2 from './assets/img3.jpg'
import Image3 from './assets/img2.avif'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const etudiant =[ {
 nom:"hamza ben rayana",
 email:"benrayanahamza2007@gmail.com",
 tel:"+216 93 865 001",
 filiere:"Génie Logiciel et Système d'information",
 anneEtude:"2026/2027",
 groupe:"GLSI 2 B",
 ville:"teboulba",
 image:Image,
},
{
 nom:"Slim Boubaker",
 email:"slimboubaker@gmail.com",
 tel:"+216 93 555 555",
 filiere:"Génie Logiciel et Système d'information",
 anneEtude:"2026/2027",
 groupe:"GLSI 2 A",
 ville:"Mahdia",
 image:Image1,
},
{
 nom:"Sarra Trabelsi",
 email:"sarratrabelsi@gmail.com",
 tel:"+216 95 999 999",
 filiere:"Génie Logiciel et Système d'information",
 anneEtude:"2026/2027",
 groupe:"GLSI 2 B",
 ville:"Sousse",
 image:Image2,
},
{
 nom:"Abdessattar khalfallah",
 email:"abdesssattarkhalfallah@gmail.com",
 tel:"+216 95 333 565",
 filiere:"Génie Logiciel et Système d'information",
 anneEtude:"2026/2027",
 groupe:"GLSI 2 c",
 ville:"Béja",
 image:Image3,
},
]
function App(){
  return (
    <div className="page" id="accueil">
  <Header />
  <Navbar />

  <main className="student-list" id="etudiants">
    {etudiant.map((etudiant) => (
        <StudentCard 
        nom={etudiant.nom}
        key={etudiant.email}
        email={etudiant.email}
        tel={etudiant.tel}
        filiere={etudiant.filiere}
        anneEtude={etudiant.anneEtude}
        groupe={etudiant.groupe}
        ville={etudiant.ville}
        image={etudiant.image}
          />
    ))}
  </main>

  <Footer />
</div>
    //   <div className='container'>
    //       <div className='card'>
    //           {etudiant.map((etudiant) => (
    //     <StudentCard 
    //     nom={etudiant.nom}
    //     key={etudiant.email}
    //     email={etudiant.email}
    //     tel={etudiant.tel}
    //     filiere={etudiant.filiere}
    //     anneEtude={etudiant.anneEtude}
    //     groupe={etudiant.groupe}
    //     ville={etudiant.ville}
    //     image={etudiant.image}
    //       />
    //   ))}
    // </div>
  
            
        
      );
}
    
export default App;
