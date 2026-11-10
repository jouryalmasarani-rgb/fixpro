'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Wrench, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80',
    title: 'صيانة الغسالات',
    subtitle: 'إصلاح احترافي لجميع أنواع الغسالات'
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80',
    title: 'صيانة آلات القهوة',
    subtitle: 'نعيد لقهوتك نكهتها الأصلية'
  },
  {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80',
    title: 'صيانة السماعات',
    subtitle: 'صوت نقي كما كان في أول يوم'
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  // تبديل تلقائي كل 5 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Slider الصور */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
          {/* Overlay داكن */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#060f1e]/80 via-[#060f1e]/70 to-[#060f1e]" />
        </motion.div>
      </AnimatePresence>

      {/* تأثيرات ضوئية */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-sky-500/15 rounded-full blur-[100px]" />

      {/* أزرار التنقل */}
      <button 
        onClick={prevSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* نقاط التنقل */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 text-xs font-medium text-cyan-400"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>فريق الصيانة الاحترافي</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 text-white">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                {slides[current].title}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-glow"
              >
                {slides[current].subtitle}
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              نقدم خدمات صيانة وفحص للأجهزة المنزلية بأيدي فنيين محترفين مع سرعة في الاستجابة 
              واهتمام بجودة الخدمة وراحة العميل.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a 
                href="tel:+963999999999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-cyan-400 text-slate-900 font-bold rounded-full flex items-center justify-center gap-2 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-400/30 text-sm"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </motion.a>
              
              <motion.a 
                href="https://wa.me/963999999999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black/50 backdrop-blur-md text-white font-bold rounded-full flex items-center justify-center gap-2 border border-white/20 hover:bg-black/70 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                دردشة واتساب مباشرة
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}