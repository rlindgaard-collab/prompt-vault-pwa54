import { Star } from 'lucide-react'

import React from 'react'
export function Header({ dark, setDark, onToggleFav, showFav }: { dark: boolean, setDark: (v: boolean) => void, onToggleFav: () => void, showFav: boolean }) {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-6 rounded bg-accent"></div>
        <h1 className="font-semibold text-ink dark:text-white">Prompt Vault</h1>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onToggleFav}
          className={"p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-soft " + (showFav ? "ring-2 ring-amber-400/60 border-amber-500" : "")}
          title="Favoritter" aria-label="Favoritter">
          <Star className={"w-5 h-5 transition-colors " + (showFav ? "fill-amber-500 text-amber-500" : "text-slate-500 dark:text-slate-300 hover:text-amber-500")} />
        </button>
        <button onClick={() => setDark(!dark)}
          className="px-3 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-soft"
          title="Toggle theme">{dark ? '🌙' : '☀️'}</button>
        <button onClick={() => {
          if ((window.navigator as any).standalone || window.matchMedia('(display-mode: standalone)').matches) {
            alert('Allerede installeret som app ✅')
          } else {
            alert('Tip: Brug browserens menu for at installere på hjemskærmen.')
          }
        }} className="px-3 py-1.5 rounded-2xl bg-accent text-white">Installer</button>
      </div>
    </header>
  )
}
