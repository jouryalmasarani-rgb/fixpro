'use client'

import { Layers3 } from 'lucide-react'
import TransparentGif from './transparent-gif'

const animations: Record<string, { gif: string; final: string; poster: string; ratio: string }> = {
  Waschmaschine: { gif: 'Animated Washing Machine Exploded Assembly.gif', final: 'washer-final-hd.png', poster: 'washer-exploded-removebg-preview.png', ratio: '347 / 267' },
  Kaffeemaschine: { gif: 'Espresso Machine Exploded View Animation.gif', final: 'coffee-final-hd.png', poster: 'Espresso_Machine-removebg-preview.png', ratio: '358 / 349' },
  Lautsprecher: { gif: 'Portable Speaker Exploded Animation.gif', final: 'speaker-final-hd.png', poster: 'Bluetooth_Speaker-removebg-preview.png', ratio: '358 / 267' },
}

export default function ExplodedWasher({ device = 'Waschmaschine' }: { device?: string }) {
  const animation = animations[device] ?? animations.Waschmaschine
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#d9e6dc] bg-[#ecf3ee]">
      <div className="flex items-center justify-between gap-4 px-6 pt-6"><span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#5c7c66]"><Layers3 size={15} />Ein Blick ins Innere</span><span className="rounded-full bg-white/70 px-3 py-1.5 text-[9px] text-[#6e8c77]">{device}</span></div>
      <TransparentGif key={device} src={`/images/${encodeURIComponent(animation.gif)}`} finalSrc={`/images/${animation.final}`} posterSrc={`/images/${animation.poster}`} aspectRatio={animation.ratio} alt={`${device}: animierte Zerlegung und Montage`} />
    </div>
  )
}
