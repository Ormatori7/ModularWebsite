import { HiOutlineCubeTransparent } from "react-icons/hi2";

interface NavBarProps {
  page: string;
  setPage: (page: string) => void; //a quoi doit ressembler la fonction qeu je recois (void car ne renvoie rien, l'etat va juste changer)
  user: any; // l'info de si on est connecté ou non
}

export function NavBar({ page, setPage, user }: NavBarProps) {
  //ariable qui contiennt un tableau sur lequelle la fonction va boucler pour créer les boutons
  const NavTableau = [
    { id: "Home", label: "Home" },
    { id: "Model", label: "Model" },
    { id: "Texture", label: "Texture" },
    { id: "Profil", label: "Profil" },
    { id: "Shop", label: "Shop" },
  ];
  // SYSTEME DE FILTRAGE : On ne garde le Shop que si user existe
  const liensAffichables = NavTableau.filter((item) => {
    if (item.id === "Shop") {
      return user !== null; // Retourne vrai (affiche) seulement si l'user est connecté
    }
    return true; // Pour tous les autres boutons (Home, Profil...), on affiche toujours
  });
  return (
    <header className="fixed left-0 w-full z-[200] flex justify-center pointer-events-none">
      <div className="w-full border-b border-violet-400 p-1.5 rounded-b-lg pointer-events-auto h-15">
        <div className="grid grid-cols-2 items-center h-full px-4">
          <div className="flex items-center">
            <HiOutlineCubeTransparent className="text-4xl" />
            <div className="pl-3">Studio</div>
          </div>
          {/* la div qui permet de créer les boutons en te basant sur sur la variable liensAffichables qui contient les bouttons et le systemùe de filtre */}
          <div className="flex justify-end gap-4">
            {liensAffichables.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={
                  page === item.id
                    ? "border-b border-violet-400"
                    : "text-gray-500 cursor-pointer"
                }
              >
                {/* pour chnager le nom du lien profil en compte si la condition est validé */}
                {item.id === "Profil" && user ? "Compte" : item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
