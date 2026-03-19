//le fichier qui sert de lien entre react et supabase

import { createClient } from "@supabase/supabase-js"; //l'import de la librairie supabase pour créer un client qui va nous permettre de communiquer avec notre base de données Supabase

// On utilise import.meta.env pour lire les clés de mon fichier .env.local
//on ajoute "as string" pour indiquer que les variables sont de type string, ce qui est nécessaire pour éviter des erreurs de type lors de la création du client Supabase.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Si jamais une clé est oubliée dans le .env.local, on arrête tout
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Les clés Supabase sont manquantes dans le fichier .env.local",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//l'erreur du env est a modifier dans le tsconfig.json pour que typescript puisse reconnaitre les variables d'environnement spécifiques à Vite, comme import.meta.env.
