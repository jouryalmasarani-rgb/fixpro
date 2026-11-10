'use client'
import { motion } from 'framer-motion'
import { CalendarCheck, Search, Wrench, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    number: '01',
    title: 'الحجز السهل',
    desc: 'يمكنك بسهولة تحديد موعد صيانة الأجهزة عبر الإنترنت أو عبر الهاتف.'
  },
  {
    icon: Search,
    number: '02',
    title: 'تفتيش الخبراء',
    desc: 'يصل الفنيون المعتمدون في الوقت المحدد لتشخيص المشكلة بدقة احترافية.'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'صيانة موثوقة',
    desc: 'نقدم صيانة سريعة باستخدام قطع غيار عالية الجودة وتقنيات موثوقة.'
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'الاختبار النهائي',
    desc: 'نقوم بإجراء اختبارات شاملة للتأكد من أن جهازك يعمل بشكل مثالي.'
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-[#060f1e] relative overflow-hidden">
      {/* خط أفقي يربط الخطوات (يظهر على الديسكتوب) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
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
            className="inline-block px-5 py-1.5 mb-3 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold"
          >
            عملية عملنا
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            كيف تتم عملية صيانة الأجهزة لدينا
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm"
          >
            نقدم تجربة صيانة سلسة بدءًا من الحجز السهل وحتى صيانة موثوقة.
          </motion.p>
        </motion.div>

        {/* الخطوات مع timeline */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* الرقم الكبير في الخلفية */}
                <div className="absolute -top-4 right-0 text-7xl font-black text-cyan-400/5 select-none">
                  {step.number}
                </div>

                <div className="relative">
                  {/* الأيقونة مع ring */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    {/* نقطة على الخط */}
                    <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-[#0a1628]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}