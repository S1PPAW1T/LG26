import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function ExitPage({ userName }) {
  return (
    <motion.div
      key="exit"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
        style={{ marginBottom: '2rem' }}
      >
        <Heart size={64} color="var(--color-crimson)" fill="var(--color-crimson)" opacity={0.8} />
      </motion.div>

      <h2 style={{ 
        fontSize: '2.5rem', 
        color: 'var(--color-crimson)', 
        marginBottom: '1.5rem',
        fontWeight: '700',
        lineHeight: '1.4'
      }}>
        ยินดีที่ได้รู้จักนะ<br/>น้อง {userName || 'ปีหนึ่ง'}
      </h2>

      <p style={{ 
        fontSize: '1.25rem', 
        color: '#555', 
        lineHeight: '1.8',
        maxWidth: '500px',
        fontWeight: '400'
      }}>
        "ขอให้น้อง {userName || ''} มีความสุขและสนุกกับชีวิตในรั้วมหาวิทยาลัยนะ พวกพี่เป็นกำลังใจให้เสมอ แล้วเจอกันวันเปิดเทอมนะ!"
      </p>
      
      <p style={{
        marginTop: '3rem',
        fontSize: '1rem',
        color: '#999',
        fontStyle: 'italic'
      }}>
        - รุ่นพี่ LG 26 -
      </p>
    </motion.div>
  )
}
