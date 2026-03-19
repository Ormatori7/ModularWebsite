export interface Card3DProps {
  id: number;
  titre: string;
  description: string;
  prix: number;
  etiquette: string;
  image: string;
}

export function Card3D({
  titre,
  description,
  prix,
  etiquette,
  image,
}: Card3DProps) {
  return (
    <div className="w-96 bg-white rounded-[2rem] p-5 shadow-xl border border-slate-100 cursor-pointer">
      <div className="relative h-80 w-full rounded-3xl overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={`Image - ${titre}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute top-4 left-4 z-10 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
          {etiquette}
        </span>
      </div>

      <div className="mt-6 px-2 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[11px] bg-indigo-50 text-indigo-600 font-bold px-2 py-1 rounded uppercase">
            Géométrique
          </span>
          <span className="font-black text-slate-900 text-2xl">{prix}€</span>
        </div>

        <h2 className="font-bold text-slate-800 text-base">{titre}</h2>
        <h3 className=" text-slate-800 text-base">{description}</h3>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all cursor-pointer">
          <span>Icone </span> Acheter
        </button>
      </div>
    </div>
  );
}
