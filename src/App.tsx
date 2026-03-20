import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { ModelPage } from "./Pages/PageModel";
import { TexturePage } from "./Pages/PageTexture";
import { ProfilPage } from "./Pages/PageProfil";

function App() {
  const [page, setPage] = useState("Home");
  const [user, setUser] = useState<any>(null); // Le State central

  //POUR LA PARTIE SAUVERAGDE DE SESSION
    useEffect(() => {
    // Vérifie si une session existe déjà au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser({ id: session.user.id, email: session.user.email });
      }
    });
  
    // Écoute les changements (connexion, déconnexion)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser({ id: session.user.id, email: session.user.email });
      } else {
        setUser(null);
      }
    });
  
    return () => subscription.unsubscribe();
  }, []);

  return (
    //les functions des pages
    <>
      <NavBar page={page} setPage={setPage} user={user} />

      {page === "Home" && <Home setPage={setPage} />}
      
      {page === "Model" && <ModelPage  />}
      
      {page === "Texture" && <TexturePage />}

      {page === "Profil" && <ProfilPage user={user} setUser={setUser} />}
      
    </>
  );
}

export default App;
