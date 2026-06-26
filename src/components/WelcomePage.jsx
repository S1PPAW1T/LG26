import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function WelcomePage({ onNext }) {
  return (
    <motion.div
      key="welcome"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ color: 'var(--color-crimson)', marginBottom: '1rem' }}
      >
        <Sparkles size={48} strokeWidth={1.5} />
      </motion.div>
      
      <h1 style={{ 
        fontSize: '3.5rem', 
        fontWeight: '700', 
        color: 'var(--color-crimson)',
        lineHeight: '1.2',
        marginBottom: '1rem',
        textShadow: '0 4px 12px rgba(138,21,56,0.1)'
      }}>
        สวัสดีน้อง ๆ<br/>ปีโต LG 26
      </h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        color: '#666', 
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        ยินดีต้อนรับเข้าสู่ครอบครัวลานเกียร์ครั้งที่ 26 นะ
      </p>

      <motion.button 
        className="btn-primary"
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        เริ่มกันเลย
      </motion.button>
    </motion.div>
  )
}
