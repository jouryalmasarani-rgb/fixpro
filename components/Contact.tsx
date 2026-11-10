'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', device: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.')
    setFormData({ name: '', phone: '', device: '', message: '' })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            تواصل <span className="text-blue-600">معنا</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            عندك جهاز معطل؟ املأ النموذج ورح نرد عليك بأسرع وقت
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* معلومات التواصل */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">اتصل بنا</h3>
                <p className="text-slate-600">+963 999 999 999</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">البريد الإلكتروني</h3>
                <p className="text-slate-600">support@fixpro.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">العنوان</h3>
                <p className="text-slate-600">دمشق، سوريا</p>
              </div>
            </div>
          </motion.div>

          {/* نموذج التواصل */}
          <motion.form 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100"
          >
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="الاسم الكامل" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input 
                type="tel" 
                placeholder="رقم الهاتف" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <select 
              required
              value={formData.device}
              onChange={(e) => setFormData({...formData, device: e.target.value})}
              className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="" disabled>اختر نوع الجهاز</option>
              <option value="washer">غسالة</option>
              <option value="coffee">آلة قهوة</option>
              <option value="headphones">سماعات</option>
            </select>

            <textarea 
              placeholder="وصف المشكلة..." 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            />

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              إرسال الطلب
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}