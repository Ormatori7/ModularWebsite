

export function Squellettepage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <nav className="p-6 border-b border-slate-100">
        <button className="text-slate-500 font-bold uppercase text-sm">
          ← Retour
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center">
          <img 
            src="https://via.placeholder.com/600" 
            alt="Produit"
            className="w-full h-full object-contain p-8 opacity-50"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-black italic uppercase text-slate-900 leading-none">
            Titre Modèle
          </h1>
          <p className="text-3xl font-black text-indigo-600 mt-2">50 €</p>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</h3>
            <p className="mt-3 text-slate-600 font-medium text-lg leading-relaxed">
              Ceci est un texte de description fictif pour le prototype visuel de la page.
            </p>
          </div>

          <button className="mt-12 w-full py-5 rounded-xl font-black text-lg text-white bg-indigo-600 shadow-lg shadow-indigo-100">
            ACHETER
          </button>
        </div>
      </main>
    </div>
  );
}