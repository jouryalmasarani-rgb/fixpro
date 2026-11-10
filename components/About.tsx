'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'صيانة سريعة وموثوقة للأجهزة في منزلك',
  'فنيون معتمدون صيانة في نفس اليوم',
  'خدمات صيانة موثوقة للمنازل والشركات',
  'حلول فعالة من حيث التكلفة لجميع ماركات الأجهزة'
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#060f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-5 rounded-full bg-cyan-400/20 text-cyan-400 text-xs font-bold border border-cyan-400/30"
            >
              عن فريق الصيانة
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                خبراء صيانة الأجهزة
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400"
              >
                الموثوق بهم
              </motion.span>
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-base mb-5 leading-relaxed"
            >
              فريق الصيانة هو خيارك الموثوق به في صيانة الأجهزة. نقدم خدمة سريعة 
              ومتقنة وبأسعار معقولة. يتعامل الفنيون الخبراء لدينا مع جميع العلامات 
              التجارية الكبرى بعناية، ويقدمون الصيانة في نفس اليوم.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-slate-300 text-base mb-6 font-semibold"
            >
              احجز صيانة أجهزتك السريعة والموثوقة اليوم - احصل على خدمة الخبراء في نفس اليوم!
            </motion.p>

            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2.5 text-slate-300 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-cyan-400 text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-400/30 text-sm"
              >
                اتصل بالهاتف الساخن
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black border border-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm"
              >
                دردشة واتساب مباشرة
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/20"
            >
              <img 
                src="/images/team.jpg"
                alt="فريق الصيانة المحترف"
                className="w-full h-[420px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-400/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-[10px] font-bold text-white">ضمان الرضا</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}