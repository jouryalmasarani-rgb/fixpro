'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Wrench, X, Check, Search, ClipboardCheck } from 'lucide-react'
import { useRepairRequest, type RepairDevice } from '@/components/RepairRequestProvider'

const services = [
  { title: 'Waschmaschinen', image: '/images/washer-technician-cutout.png', alt: 'Servicetechniker repariert eine Waschmaschine am geöffneten Wartungsfach', text: 'Die Wäsche wartet? Wir schauen nach, warum Ihre Maschine nicht mehr mitmacht.', tags: ['Abpumpen', 'Schleudern', 'Elektronik'], category: 'Reparatur & Fehlersuche', tone: 'dark' },
  { title: 'Kaffeemaschinen', image: '/images/image-removebg-preview (3).png', alt: 'Servicetechnikerin repariert eine geöffnete Espressomaschine', text: 'Ihr Morgen verdient guten Kaffee. Wir kümmern uns um Druck, Wärme und Durchlauf.', tags: ['Druck', 'Heizung', 'Durchlauf'], category: 'Reparatur & Wartung', tone: 'cream' },
  { title: 'Lautsprecher', image: '/images/image-removebg-preview (1).png', alt: 'Audiotechniker repariert die Elektronik eines Lautsprechers', text: 'Mehr Musik, weniger Aussetzer. Wir prüfen Klang, Anschlüsse und Stromversorgung.', tags: ['Klang', 'Anschlüsse', 'Verstärker'], category: 'Reparatur & Klangprüfung', tone: 'mint' },
]

const details: { device: RepairDevice; introduction: string; problems: string[]; checks: string; preparation: string }[] = [
  {
    device: 'Waschmaschine',
    introduction: 'Wenn Ihre Waschmaschine den Alltag unterbricht, suchen wir nach der Ursache und besprechen mit Ihnen die passende Reparatur.',
    problems: ['Wasser wird nicht abgepumpt oder läuft aus', 'Trommel dreht sich nicht oder schleudert nicht', 'Ungewöhnliche Geräusche oder starke Vibrationen', 'Fehlercode im Display oder Probleme beim Start'],
    checks: 'Wir prüfen das Fehlerbild und die betroffenen Bauteile. Vor weiteren Arbeiten besprechen wir Reparaturmöglichkeiten, Aufwand und mögliche Ersatzteile.',
    preparation: 'Halten Sie Marke, Modell und einen möglichen Fehlercode bereit. Öffnen Sie keine Abdeckungen selbst.',
  },
  {
    device: 'Kaffeemaschine',
    introduction: 'Ein guter Kaffee braucht das Zusammenspiel von Wasser, Druck und Temperatur. Wir schauen nach, wo dieses Zusammenspiel gestört ist.',
    problems: ['Kaffee bleibt kalt oder die Maschine heizt nicht', 'Zu wenig Druck oder langsamer Wasserdurchlauf', 'Undichte Stellen oder Wasser unter dem Gerät', 'Ungewöhnliche Geräusche oder Fehlermeldungen'],
    checks: 'Wir untersuchen Durchlauf, Heizung, Pumpe und Anschlüsse passend zum Fehlerbild. Reinigung, Wartung oder Reparatur werden mit Ihnen abgestimmt.',
    preparation: 'Notieren Sie Hersteller, Modell und Ihre Beobachtungen. Bitte lassen Sie das Gerät abkühlen, bevor Sie es für eine Übergabe vorbereiten.',
  },
  {
    device: 'Lautsprecher',
    introduction: 'Von störendem Knacken bis zum fehlenden Ton: Wir grenzen Fehler an Ihrem Lautsprecher Schritt für Schritt ein.',
    problems: ['Kein Ton oder Aussetzer während der Wiedergabe', 'Verzerrungen, Brummen oder störende Nebengeräusche', 'Probleme mit Anschlüssen und Kontakten', 'Gerät lässt sich nicht einschalten'],
    checks: 'Wir prüfen Signalweg, Anschlüsse und Stromversorgung. Welche Bauteile instand gesetzt werden können, klären wir nach der Diagnose mit Ihnen.',
    preparation: 'Teilen Sie uns Modell und Anschlussart mit und beschreiben Sie, wann der Fehler auftritt. Öffnen Sie das Gehäuse nicht selbst.',
  },
]

export default function Services() {
  const reduced = useReducedMotion()
  const [selected, setSelected] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const { setDevice } = useRepairRequest()
  const selectedService = selected === null ? null : services[selected]
  const selectedDetails = selected === null ? null : details[selected]

  useEffect(() => {
    if (selected === null) return
    dialog.current?.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [selected])

  function requestRepair() {
    if (!selectedDetails) return
    setDevice(selectedDetails.device)
    dialog.current?.close()
    setSelected(null)
    document.getElementById('anfrage')?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' })
    document.getElementById('repair-device')?.focus({ preventScroll: true })
  }

  return (
    <section id="services" className="section-space bg-[#faf9f6]">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Unsere Leistungen</p>
            <h2 className="section-title">Wir reparieren.<br /><span className="text-[#258454]">Sie genießen den Alltag.</span></h2>
          </div>
          <div className="max-w-xs pb-1">
            <p className="text-sm leading-7 text-stone-500">Drei Gerätewelten. Ein Anspruch: genau hinsehen und eine passende Lösung finden.</p>
            <a href="#anfrage" className="mt-4 inline-flex items-center gap-3 text-xs font-semibold text-[#16804a]">Welches Gerät braucht Ihre Hilfe?<ArrowRight size={16} /></a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const dark = service.tone === 'dark'
            return (
              <motion.article
                key={service.title}
                initial={reduced ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : index * 0.13 }}
                whileHover={reduced ? undefined : { y: -7 }}
                className={`group relative flex flex-col overflow-hidden rounded-[30px] border p-5 lg:p-7 ${dark ? 'border-[#14372e] bg-[#123a2c] text-white' : service.tone === 'cream' ? 'border-[#e9e2d7] bg-[#f2ece2] text-[#293c30]' : 'border-[#d6e6dc] bg-[#e4efe7] text-[#293c30]'}`}
              >
                <button type="button" onClick={() => setSelected(index)} aria-label={`${service.title}: Servicedetails ansehen`} aria-haspopup="dialog" className="absolute inset-0 z-10 cursor-pointer rounded-[30px] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#70c98a]" />
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-widest ${dark ? 'border-white/20 text-[#b0cfbc]' : 'border-[#47694e]/15 text-[#58735f]'}`}>{service.category}</span>
                  <span className={`text-[11px] ${dark ? 'text-white/35' : 'text-[#64806c]/60'}`}>0{index + 1}</span>
                </div>

                <div className="relative my-5 h-[270px] overflow-hidden rounded-[20px] lg:h-[285px]">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 85vw, 28vw" className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#123a2c]/80 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur-sm"><Wrench size={12} aria-hidden="true" />Reparaturservice</span>
                </div>

                <h3 className="text-[26px] font-semibold tracking-tight">{service.title}</h3>
                <p className={`mt-3 min-h-[84px] text-sm leading-7 ${dark ? 'text-[#b0c8b9]' : 'text-[#687b6b]'}`}>{service.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{service.tags.map(tag => <span key={tag} className={`rounded-full px-2.5 py-1 text-[9px] ${dark ? 'bg-white/[.07] text-[#accbb7]' : 'bg-white/60 text-[#6c7e70]'}`}>{tag}</span>)}</div>
                <span className={`mt-7 flex items-center justify-between border-t pt-5 text-sm font-semibold ${dark ? 'border-white/15 text-[#a3e5b5]' : 'border-[#688871]/15 text-[#206b42]'}`}>
                  Service entdecken
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${dark ? 'bg-[#a3e5b5] text-[#163c26] group-hover:bg-white' : 'bg-white text-[#236b43] group-hover:bg-[#236b43] group-hover:text-white'}`}><ArrowUpRight size={18} /></span>
                </span>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs leading-6 text-stone-500"><span className="h-1.5 w-1.5 rounded-full bg-[#49a96d]" />Ihr Gerät ist nicht dabei?<a href="#anfrage" className="font-semibold text-[#16804a] underline underline-offset-4">Fragen kostet erst mal nur eine Nachricht.</a></div>
      </div>
      <dialog ref={dialog} aria-labelledby="service-dialog-title" aria-describedby="service-dialog-description" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }} className="service-dialog fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-24px)] max-w-[950px] overflow-y-auto overscroll-contain rounded-[28px] border border-[#d6e6dc] bg-[#fafcf9] p-0 text-[#22392b] shadow-2xl backdrop:bg-[#04110b]/65 backdrop:backdrop-blur-sm">
        {selectedService && selectedDetails && <div className="relative">
          <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Servicedetails schließen" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e6dc] bg-white text-[#365a41] transition-colors hover:bg-[#e7f1e9]"><X size={19} /></button>
          <div className="grid md:grid-cols-[.8fr_1.2fr]">
            <div className="flex flex-col justify-center bg-[#e7f0e9] px-7 pb-7 pt-12 md:p-9">
              <p className="eyebrow mb-5">FixPro Reparaturservice</p>
              <div className="relative h-44 md:h-72"><Image src={selectedService.image} alt={selectedService.alt} fill sizes="(max-width: 768px) 80vw, 360px" className="object-contain" /></div>
              <p className="mt-6 hidden text-sm leading-7 text-[#5e7867] md:block">Erst verstehen. Dann gemeinsam entscheiden.</p>
              <div className="mt-4 flex flex-wrap gap-2">{selectedService.tags.map(tag => <span key={tag} className="rounded-full bg-white/70 px-3 py-1.5 text-[10px] text-[#57735f]">{tag}</span>)}</div>
            </div>
            <div className="p-6 md:p-9 md:pt-14">
              <h2 id="service-dialog-title" className="pr-7 text-3xl font-semibold leading-tight tracking-tight">{selectedService.title}<span className="mt-1 block text-xl font-medium text-[#258454]">Reparatur & Diagnose</span></h2>
              <p id="service-dialog-description" className="mt-5 text-sm leading-7 text-[#6e7d71]">{selectedDetails.introduction}</p>
              <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold"><Wrench size={16} className="text-[#258454]" />Dabei können wir helfen</h3>
              <ul className="mt-4 space-y-3">{selectedDetails.problems.map(problem => <li key={problem} className="flex items-start gap-2.5 text-xs leading-6 text-[#5c7061]"><Check size={15} className="mt-1 shrink-0 text-[#258454]" />{problem}</li>)}</ul>
              <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold"><Search size={16} className="text-[#258454]" />So gehen wir vor</h3>
              <p className="mt-3 text-xs leading-6 text-[#6e7d71]">{selectedDetails.checks}</p>
              <div className="mt-5 rounded-2xl border border-[#dfebe1] bg-[#f0f6f0] p-4"><p className="flex items-center gap-2 text-xs font-semibold text-[#3f6c4d]"><ClipboardCheck size={15} />Gut vorbereitet</p><p className="mt-2 text-xs leading-6 text-[#6e7d71]">{selectedDetails.preparation}</p></div>
              <button type="button" onClick={requestRepair} className="primary-button mt-6 w-full">Reparatur anfragen<ArrowRight size={17} /></button>
              <p className="mt-3 text-center text-[10px] text-[#87938a]">Das Gerät wird im Anfrageformular vorausgewählt.</p>
            </div>
          </div>
        </div>}
      </dialog>
    </section>
  )
}
