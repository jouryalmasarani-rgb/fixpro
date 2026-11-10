'use client'
import { motion } from 'framer-motion'
import { Wrench, Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'آراء العملاء', href: '#stats' },
    { name: 'تواصل', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="glass rounded-2xl px-5 py-2.5 flex justify-between items-center shadow-xl shadow-black/30">
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-lg flex items-center justify-center shadow-md shadow-cyan-400/30">
              <Wrench className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base text-white">FixPro</span>
          </div>

          <ul className="hidden md:flex gap-5">
            {links.map((link, i) => (
              <motion.li 
                key={i}
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer font-medium text-sm"
              >
                {link.name}
              </motion.li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="tel:+963999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-900 font-bold rounded-lg flex items-center gap-1.5 shadow-md shadow-cyan-400/30 text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>اتصل بنا</span>
            </motion.a>
          </div>

          <button 
            className="md:hidden text-white" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden glass rounded-xl mt-2 p-4"
          >
            <ul className="flex flex-col gap-3">
              {links.map((link, i) => (
                <li key={i} className="text-slate-300 hover:text-cyan-400 cursor-pointer font-medium text-sm py-2">
                  {link.name}
                </li>
              ))}
              <a
                href="tel:+963999999999"
                className="px-4 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-900 font-bold rounded-lg flex items-center justify-center gap-1.5 mt-2 text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                اتصل بنا
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}