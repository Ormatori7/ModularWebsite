import { IoCubeOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";


interface HomeProps {
  setPage: (page: string) => void;
}

export function Home({ setPage }: HomeProps) {
  return (
    <div className="h-[100dvh] bg-white text-center">
      <div className="flex flex-col h-full">
        {/* Section Titre & Description */}
        <div className="h-1/2 flex flex-col items-center justify-center p-4 ">
          <h1 className="text-6xl font-black text-slate-900">
            STUDIO <span className="text-violet-600">3D.</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-md text-sm">
            Ressources premium pour créateurs exigeants. <br />
            Modèles optimisés, textures 8K, prêt pour la production.
          </p>
        </div>

        {/* section pour les bouttons */}
        <div className="h-1/2 p-6">
          <div className="grid grid-cols-2 gap-6 h-full max-w-5xl mx-auto">

            {/* bouton 1 */}
            <button className=" flex-col rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-400 flex items-center justify-center cursor-pointer shadow-lg"
            onClick={() => setPage("Model")}>
              <IoCubeOutline className="text-4xl mb-2.5" />
              <h2 className="text-white text-xl font-bold uppercase tracking-tighter">
                Modèles 3D
              </h2>
            </button>

            {/* bouton 2 */}
            <button className="rounded-3xl bg-slate-400 flex items-center justify-center flex-col cursor-pointer shadow-lg" onClick={() => setPage("Texture")}>
              <CiImageOn className="text-4xl mb-2.5" />
              <h2 className="text-white text-xl font-bold uppercase tracking-tighter">
                Textures PBR
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
