import type { RepairDevice } from '@/components/RepairRequestProvider'
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

const slugs = ['waschmaschinen-reparatur', 'kaffeemaschinen-reparatur', 'lautsprecher-reparatur']
export const repairServices = services.map((service, index) => ({ ...service, ...details[index], slug: slugs[index] }))
export type RepairService = (typeof repairServices)[number]
export function findService(slug: string) { return repairServices.find(service => service.slug === slug) }