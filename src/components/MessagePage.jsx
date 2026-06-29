import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function MessagePage({ userName, onNext }) {
  return (
    <motion.div
      key="message"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', textAlign: 'center' }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ color: 'var(--color-crimson)', marginBottom: '2rem' }}
      >
        <Heart size={56} strokeWidth={1.5} />
      </motion.div>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ 
          fontSize: '1.4rem', 
          color: '#444', 
          lineHeight: '1.7',
          marginBottom: '3rem',
          maxWidth: '550px',
          fontWeight: '500'
        }}
      >
        เป็นยังไงบ้างน้อง <span style={{ color: 'var(--color-crimson)', fontWeight: '700', fontSize: '1.6rem' }}>{userName}</span> กลับมาเป็นปีโตสนุกหรือป่าว พี่ ๆ หวังว่าเราจะสนุก และมีความความสุขกับการทำค่ายลานเกียร์ครั้งนี้นะ พี่ ๆ มีอะไรจะบอกด้วย
      </motion.p>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="btn-primary"
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ต่อไป
      </motion.button>
    </motion.div>
  )
}
