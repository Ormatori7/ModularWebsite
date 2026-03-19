// pour créer une mémoire locale pour le composant
//déclencher une action comme lire une base de données par ex
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Card3D } from "../Components/3D_ModelCard";
import type { Card3DProps } from "../Components/3D_ModelCard"; // une interface s'importe avec type

export function ModelPage() {
  //creation d'un tableau vide pour recup les ligens de ma table dans ma db
  const [modeles, setModeles] = useState<Card3DProps[]>([]);

  useEffect(() => {
    const chargementDonnees = async () => {
      const { data, error } = await supabase
      .from("Table3DCard")
      .select("*");

      if (!error && data) {
        //si pas d'erreur et que data est rempli alors on range le tableau recu (data) de la db dans la variable modeles qui est sur le format de l'interface card3Dprops
        setModeles(data as Card3DProps[]); //fais le lien a la variable apres le debut de la function / on utilise les [] pour dire que c'est une liste
      } else {
        //sinon mettre un msg d'erreur
        console.error("Erreur =>:", error.message);
      }
    };
    chargementDonnees(); // on l'appelle directement pour que ça se lance au demarrage de la page
  }, []);

  //--------SECURITE => si le tableau est encore vide-------------
  if (modeles.length === 0) {
    return (
      <div className="text-black text-center pt-20">
        Chargement des modèles 3D...
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-white">
      <div className="flex flex-col">
        <div className="h-80 flex px-8 w-full items-end ">
          <div className="flex justify-between items-baseline w-full border-b border-violet-400 pb-4">
            <h1 className="text-4xl font-black text-black uppercase">
              3D <span className="text-violet-400">Model</span>
            </h1>
            <span className="text-xs font-bold text-black/250 uppercase tracking-widest">
            {/* pour modifier le nombre en fonction des card et mettre un s si plus de 1 card */}
              {modeles.length} Ressource{modeles.length > 1 ? 's' : ''} 
            </span>
          </div>
        </div>

        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {/* utilisation de la tech appelé "SPREAD OPERATOR" pour boucler sur les lignes de ma table 
        (condition => avoir escatement les mmes noms pour les elemnents de la table et interface) */}
          {modeles.map((item) => (
            <Card3D 
            key={item.id} 
            {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
