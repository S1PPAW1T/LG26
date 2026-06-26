import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function ExitPage({ userName }) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        key="exit"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          padding: '2rem',
          width: '90%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ marginBottom: '2rem' }}
        >
          <Heart size={64} color="var(--color-crimson)" fill="var(--color-crimson)" opacity={0.8} />
        </motion.div>

        <h2 style={{ 
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
          color: 'var(--color-crimson)', 
          marginBottom: '2rem',
          fontWeight: '700',
          lineHeight: '1.4'
        }}>
          ขอบคุณน้อง {userName || 'ปีหนึ่ง'}<br/>ที่มาเป็นส่วนหนึ่งของลานเกียร์
        </h2>

        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
          color: '#555', 
          lineHeight: '1.8',
          maxWidth: '500px',
          fontWeight: '400',
          marginBottom: '3rem'
        }}>
          "ขอให้น้อง <span style={{color: 'var(--color-crimson)', fontWeight: '600'}}>{userName || ''}</span> มีความสุขและสนุกกับการทำค่ายลานเกียร์ครั้งนี้นะ ถ้ามีปัญหาตรงไหนสามารถมองมาหาพวกพี่ได้เสมอ มาช่วยกันทำให้ลานเกียร์ครั้งนี้เป็นครั้งที่ดีที่สุดกัน!!!"
        </p>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-crimson)',
          fontWeight: '700',
          letterSpacing: '1px'
        }}>
          - Core team LG 26 -
        </p>
      </motion.div>
    </div>
  )
}
