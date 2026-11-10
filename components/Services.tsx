'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft } from 'lucide-react'

const services = [
  {
    title: 'صيانة الغسالات',
    desc: 'نقدم خدمة صيانة غسالات سريعة واحترافية لإعادة غسالتك للعمل في أسرع وقت.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
    features: ['إصلاح مشاكل العصر والدوران', 'إصلاح مشاكل سحب وطرد المياه']
  },
  {
    title: 'صيانة المجففات',
    desc: 'خدمات صيانة مجفف موثوقة لاستعادة أداء التجفيف الأمثل بسرعة وأمان.',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80',
    features: ['انسداد فلتر الوبر أو مجرى الهواء', 'إصلاح الكارت الإلكتروني والبرمجة']
  },
  {
    title: 'صيانة غسالات الأطباق',
    desc: 'تضمن الصيانة المتخصصة لغسالات الأطباق دورات غسيل نظيفة وفعالة وغير متقطعة.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    features: ['إصلاح مشاكل التنظيف', 'صيانة الرشاشات والمضخات']
  },
  {
    title: 'صيانة آلات القهوة',
    desc: 'صيانة وتنظيف احترافي لآلات القهوة المنزلية والتجارية لتعود لك كأول يوم.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    features: ['تنظيف دوري شامل', 'إصلاح مشاكل الضغط والتسخين']
  },
  {
    title: 'صيانة السماعات',
    desc: 'إصلاح مشاكل الصوت، البطارية، والبلوتوث في جميع أنواع السماعات الاحترافية.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    features: ['إصلاح مشاكل الصوت', 'استبدال البطارية والبلوتوث']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-[#060f1e]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              خدمة صيانة الأجهزة المنزلية
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="block text-cyan-400"
            >
              باحتراف
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm"
          >
            نقدم خدمات صيانة متخصصة لمختلف الأجهزة المنزلية مع التركيز على السرعة والدقة وجودة الخدمة.
          </motion.p>
        </motion.div>

        {/* شبكة البوكسات مع توسيط تلقائي */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              // تم دمج الـ className هنا بشكل صحيح لتوسيط البوكسات
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* الصورة */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="relative h-40 overflow-hidden"
              >
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
              </motion.div>

              {/* المحتوى */}
              <div className="p-5">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className="text-lg font-bold text-white mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="text-slate-400 mb-4 leading-relaxed text-xs"
                >
                  {service.desc}
                </motion.p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.6 + i * 0.1 }}
                      className="flex items-center gap-2 text-slate-300 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-900 font-bold rounded-full flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-sky-500 transition-all text-sm"
                >
                  عرض تفاصيل الخدمات
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}