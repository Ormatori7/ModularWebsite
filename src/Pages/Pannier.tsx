interface ShopPageProps {
  panier: any[]; // On reçoit le tableau d'articles depuis App.tsx
}

export function ShopPage({ panier }: ShopPageProps) {
  //pour afficher le prix
  //.reduce permet de transformer un tableau en un seul chiffre (c'est uen fonction)
  //acc pour acumulateur c'est la valeur qui augmente au fur est a mesure / item c'est l'article que react est entrain de lire (on veut prrx donc => item.prix) / le zero c'est la valeur de depart et acc vaut donc zero au debut
  //la fonction reduce accepte 2 arguments : 1=> la fonction (acc, item) => acc + item.prix  2=> la valeur initial donc zero
  const total = panier.reduce((acc, item) => acc + item.prix, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pt-20">
      <div className="flex flex-col">
        <div className="h-60 flex px-8 w-full items-end">
          <div className="flex justify-between items-baseline w-full border-b border-violet-400 pb-4">
            <h1 className="text-4xl font-black text-black uppercase tracking-tighter">
              Mon <span className="text-violet-400">Panier</span>
            </h1>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {panier.length} Article{panier.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        {/* LA PARTIE AFFICHAGE DES ARTICLES */}
        <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {panier.length === 0 ? (
              <p className="text-slate-400 italic font-bold">
                Ton panier est actuellement vide
              </p>
            ) : (
              panier.map((item, index) => ( //item c'est l'article que l'on a a l'insatnté et qui possed un titre et un prix
                <div
                  key={index} // On utilise l'index car on peut avoir deux fois le mme objet
                  className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100"
                >
                  <div>
                    <p className="text-[10px] font-black text-violet-400 uppercase tracking-widest">
                      {item.etiquette || "Ressource"}
                    </p>
                    <h3 className="text-xl font-black italic uppercase text-slate-900">
                      {item.titre}
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-slate-900">
                    {item.prix.toFixed(2)} €
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="p-10 bg-slate-900 text-white rounded-[2rem] space-y-10 h-fit">
            <h2 className="text-2xl font-black italic uppercase tracking-tight text-center">
              Résumé
            </h2>

            <div className="space-y-4 text-sm font-bold">
              <div className="flex justify-between text-slate-400">
                <span>Sous-total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="border-t border-slate-700 pt-4 flex justify-between text-xl font-black uppercase text-white">
                <span>Total</span>
                {/* .toFixed(2) permet d'afficher deux chiffres apres la virgule */}
                <span className="text-violet-400">{total.toFixed(2)} €</span>
              </div>
            </div>

            <button className="w-full py-5 bg-violet-600 text-white font-black rounded-2xl uppercase tracking-widest active:scale-95 transition-transform cursor-pointer">
              Payer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
