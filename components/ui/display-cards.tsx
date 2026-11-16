'use client'

import { useState } from 'react'
import { MessageCircle, Search, Wrench, ArrowUpRight } from 'lucide-react'

const steps = [
  { icon: MessageCircle, title: 'Ihre Anfrage', description: 'Gerät und Fehler kennenlernen.', detail: 'Sie nennen uns Marke, Modell und Ihre Beobachtungen. Gemeinsam klären wir den nächsten Schritt.', label: 'Schritt 01' },
  { icon: Search, title: 'Die Diagnose', description: 'Genau hinsehen. Klar besprechen.', detail: 'Wir grenzen die Ursache ein und sprechen mit Ihnen über die passenden Reparaturmöglichkeiten.', label: 'Schritt 02' },
  { icon: Wrench, title: 'Die Reparatur', description: 'Vereinbarte Arbeiten. Funktionstest.', detail: 'Nach Ihrer Zustimmung folgen die vereinbarten Arbeiten. Zum Abschluss wird die Funktion geprüft.', label: 'Schritt 03' },
]

export default function DisplayCards() {
  const [active, setActive] = useState(2)
  return (
    <div>
      <div className="relative mx-auto h-[310px] w-full max-w-[470px]">
        {steps.map(({ icon: Icon, title, description, label }, index) => (
          <button key={title} type="button" onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} aria-pressed={active === index} aria-controls="repair-step-description" className={`absolute flex h-[150px] w-[80%] -skew-y-[7deg] flex-col justify-between rounded-[20px] border p-5 text-left shadow-[0_14px_30px_-24px_rgba(15,65,35,.5)] transition-[transform,background-color,border-color] duration-500 motion-reduce:transform-none motion-reduce:transition-none ${active === index ? '-translate-y-5 border-[#7ebd91] bg-[#163e2b] text-white' : 'border-[#d1e1d5] bg-[#f0f6f0] text-[#41644c]'}`} style={{ left: `${index * 8}%`, top: `${index * 65 + 30}px`, zIndex: active === index ? 5 : index }}>
            <span className="flex items-center gap-3"><span className={`flex h-8 w-8 items-center justify-center rounded-full ${active === index ? 'bg-white/10 text-[#a4e6b5]' : 'bg-[#dfede2] text-[#338457]'}`}><Icon size={17} /></span><span className="text-lg font-semibold">{title}</span><ArrowUpRight size={15} className="ml-auto opacity-50" /></span>
            <span className="text-sm">{description}</span><span className={`text-[10px] ${active === index ? 'text-[#a4cbb0]' : 'text-[#8ca291]'}`}>{label}</span>
          </button>
        ))}
      </div>
      <p id="repair-step-description" aria-live="polite" className="mx-auto mt-5 max-w-sm text-center text-sm leading-7 text-[#6a8070]">{steps[active].detail}</p>
    </div>
  )
}
