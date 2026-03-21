import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { ModelPage } from "./Pages/PageModel";
import { TexturePage } from "./Pages/PageTexture";
import { ProfilPage } from "./Pages/PageProfil";
import { ShopPage } from "./Pages/Pannier";

function App() {
  //----------POUR LA PARTIE TELECOMMANDE--------------
  const [page, setPage] = useState("Home");
  

  //------------POUR LA PARTIE SAUVERAGDE DE SESSION-------------
  const [user, setUser] = useState<any>(null); // Le State central
    useEffect(() => {
    // Vérifie si une session existe déjà au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser({ id: session.user.id, email: session.user.email });
      }
    });
  
    // Ecoute les changements (connexion, déconnexion)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser({ id: session.user.id, email: session.user.email });
      } else {
        setUser(null);
      }
    });
  
    return () => subscription.unsubscribe();
  }, []);

  //-------------POUR LA PARTIE AJOUT AU PANNIER EN LOCAL-------------
  const [panier, setPanier] = useState<any[]>([]); // on initialise le tableau vide et on dit qu'il peut avoir n'importe quelle type d'objet
  const ajouterAuPanier = (article: any)=> { // la fonction prend un parmaetre qui est article
  setPanier([...panier, article]); //prend tt les articles qui sont deja dans le pannier et ensuite ajoute ce nouvel article a la fin de la liste et ensuite on donne ce tableau a setPanier pour update le site
  alert(`${article.titre} ajouté au panier !`); // on affiche une alerte pour dire que ca a fonctionné
};
  


  return (
    //les functions des pages
    <>
      <NavBar page={page} setPage={setPage} user={user} />

      {page === "Home" && <Home setPage={setPage} />}
      
      {page === "Model" && <ModelPage ajouterAuPanier={ajouterAuPanier} />} {/* sert de pont pour passer ajouterAuPanier aux enfants(les cards) */}
      
      {page === "Texture" && <TexturePage ajouterAuPanier={ajouterAuPanier} />} {/* sert de pont pour passer ajouterAuPanier aux enfants(les cards) */}

      {page === "Profil" && <ProfilPage user={user} setUser={setUser} />}

      {page === "Shop" && <ShopPage panier={panier} />}
      
    </>
  );
}

export default App;
