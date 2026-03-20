import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

interface UserProfileInterface {
  id: string;
  email: string | undefined;
  
}

interface ProfilPageProps {
  user: UserProfileInterface | null;
  //le state qui contient soit l'utilisateur soit rien ( le null)
  // en mettant l'intrace ici on dit que user doit obligatoirement suivre la mme acrhitecture que l'interface
  setUser: (user: UserProfileInterface | null) => void;
}

export function ProfilPage({ user, setUser }: ProfilPageProps) {
  //le state pour savoir si on affiche connexion ou inscription (de base est sur inscription)
  const [isSignUp, setIsSignUp] = useState(true);
  //on créer une variable pour stocker l'email que tape l'utilisateur
  const [email, setEmail] = useState("");
  //on créer une variable pour stocker le mdp que tape l'utilisateur
  const [password, setPassword] = useState("");

  // Fonction stocké dans variable pour l'inscription ( pour créer un nouvel utilisateur)
  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      // commande specifique a supabase
      email: email,
      password: password,
    });
    if (error)
      alert(error.message); // si probleme alors msg d'erreur
    else alert("Inscription validé"); // message de reussite
  };

  // Fonction pour la connexion ( on vérifie si l'utilisateur existe)
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      // commande specifique a supabase
      email: email,
      password: password,
    });

    if (error)
      alert(error.message); // si probleme alors msg d'erreur
    else if (data.user) {
      // Si c'est bon, on remplit la variable 'user' avec les infos reçues
      setUser({ id: data.user.id, email: data.user.email });
    }
  };
  

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col pt-20">
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-md w-full p-12 bg-white rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-slate-100">
          {user ? (
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-black italic uppercase tracking-tighter leading-none text-violet-600">
                Studio
                <br />
                3D.
              </h1>
              <p className="font-bold text-slate-400 italic">
                Connecté : {user.email}
              </p>
              <button
                onClick={() => {
                  supabase.auth.signOut(); //propre a supabase
                  setUser(null);
                }}
                className="text-xs font-black uppercase text-red-500 hover:underline"
              >
                Se déconnecter
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              <h2 className="text-3xl font-black italic uppercase tracking-tight text-center">
                {isSignUp ? "Inscription" : "Connexion"}
              </h2>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                  //onChange={...} => écouteur d'événement. Il dit à l'ordinateur : Dès que le texte à l'intérieur de cet input change  exécute le code qui est entre les accolades.
                  // le e represente l'evenement (qd un character est ajouté/supp)
                  //e.target.value => texte qui se trouva dans le champ
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                  onChange={(e) => setPassword(e.target.value)} // le e represente l'evenement (qd un character est ajouté/supp)
                />
              </div>

              <button
                onClick={isSignUp ? handleSignUp : handleSignIn}
                className="w-full py-5 bg-violet-600 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl shadow-violet-100 active:scale-95 transition-transform"
              >
                {isSignUp ? "Créer" : "Entrer"}
              </button>

              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full text-center text-[10px] font-black uppercase text-slate-300 hover:text-violet-600 transition-colors"
              >
                {isSignUp ? "Déjà membre ? Connexion" : "Nouveau ? Inscription"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
