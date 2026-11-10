'use client'
import { motion, useInView } from 'framer-motion'
import { Clock, Heart, Users, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: Clock, value: 20, suffix: '+', label: 'سنة الخبرة', color: 'from-cyan-400 to-sky-400' },
  { icon: Heart, value: 100, suffix: '%', label: 'رضا العملاء', color: 'from-pink-400 to-rose-400' },
  { icon: Users, value: 50, suffix: '+', label: 'أعضاء الفريق', color: 'from-violet-400 to-purple-400' },
  { icon: Wrench, value: 30, suffix: '+', label: 'خدمة', color: 'from-emerald-400 to-teal-400' }
]

// مكون العدّاد المتحرك
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    let start = 0
    const duration = 2000
    const step = value / (duration / 16)
    
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
       <div ref={ref} className="text-3xl md:text-4xl font-black text-white">
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-[#060f1e] relative overflow-hidden">
      {/* خلفية ضوئية */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-1.5 mb-3 rounded-full bg-white/5 backdrop-blur-md border border-cyan-400/30 text-cyan-400 text-xs font-bold"
          >
            نتائج يمكنك الوثوق بها
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            إنجازاتنا بالأرقام
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm"
          >
            نقدم خدمة صيانة الأجهزة الموثوقة مدعومة بسنوات من الخبرة والعديد من المشاريع الناجحة وفريق ماهر.
          </motion.p>
        </motion.div>

        {/* الأرقام الكبيرة - بدون كروت */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                {/* خط فاصل بين العناصر (ما يظهر على الأخير) */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-px bg-gradient-to-r from-transparent to-cyan-400/30" />
                )}

                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                  className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <Counter value={stat.value} suffix={stat.suffix} />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="text-slate-400 font-medium text-sm mt-2"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}