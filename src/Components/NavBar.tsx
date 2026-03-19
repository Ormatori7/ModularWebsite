import { HiOutlineCubeTransparent } from "react-icons/hi2";






interface NavBarProps {
  page: string;
  setPage: (page: string) => void; //a quoi doit ressembler la fonction qeu je recois (void car ne renvoie rien, l'etat va juste changer)
}

export function NavBar({ page, setPage }: NavBarProps) {
  //ariable qui contiennt un tableau sur lequelle la fonction va boucler pour créer les boutons
  const NavTableau = [
    { id: "Home", label: "Home" },
    { id: "Model", label: "Model" },
    { id: "Texture", label: "Texture" },
    { id: "Shop", label: "Shop" },
  ];
  return (
    <header className="fixed left-0 w-full z-[200] flex justify-center pointer-events-none">
      <div className="w-full border-b border-violet-400 p-1.5 rounded-b-lg pointer-events-auto h-15">
        <div className="grid grid-cols-2 items-center h-full px-4">
          <div className="flex items-center">
            <HiOutlineCubeTransparent className="text-4xl" />
            <div className="pl-3">Studio</div>
          </div>
          {/* la div qui permet de créer les boutons en te basant sur sur la variable Navtableau qui contient les bouttons */}
          <div className="flex justify-end gap-4">
            {NavTableau.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={
                  page === item.id ? "border-b border-violet-400" : "text-gray-500 cursor-pointer"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
