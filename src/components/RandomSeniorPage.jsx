import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, ArrowRight, Quote } from 'lucide-react'
import { seniors } from '../data/seniors'

export default function RandomSeniorPage({ onExit }) {
  const [currentSenior, setCurrentSenior] = useState(null)
  
  // Pick a random senior on initial mount
  useEffect(() => {
    pickRandomSenior()
  }, [])

  const pickRandomSenior = () => {
    let newSenior = seniors[Math.floor(Math.random() * seniors.length)]
    
    // Prevent picking the same senior consecutively if possible
    if (seniors.length > 1 && currentSenior) {
      while (newSenior.id === currentSenior.id) {
        newSenior = seniors[Math.floor(Math.random() * seniors.length)]
      }
    }
    
    setCurrentSenior(newSenior)
  }

  if (!currentSenior) return null

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSenior.id}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 40px rgba(138,21,56,0.08)',
            border: '1px solid rgba(138,21,56,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '6px',
            background: 'linear-gradient(90deg, var(--color-crimson) 0%, var(--color-cream) 100%)'
          }}></div>

          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--color-white)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            marginBottom: '1.5rem',
            backgroundColor: '#f5f5f5'
          }}>
            <img 
              src={currentSenior.imageUrl} 
              alt={currentSenior.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: 'var(--color-crimson)',
            marginBottom: '1.5rem'
          }}>
            {currentSenior.name}
          </h3>

          <div style={{ position: 'relative', padding: '0 2rem', marginBottom: '2.5rem' }}>
            <Quote 
              size={32} 
              color="rgba(138,21,56,0.1)" 
              style={{ position: 'absolute', top: '-16px', left: '-8px' }}
            />
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#444', 
              lineHeight: '1.6',
              fontStyle: 'italic',
              fontWeight: '500',
              zIndex: 1,
              position: 'relative'
            }}>
              "{currentSenior.quote}"
            </p>
          </div>

          <motion.button 
            className="btn-primary"
            onClick={pickRandomSenior}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              width: '80%',
              justifyContent: 'center'
            }}
          >
            ต่อไป <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </AnimatePresence>

      <motion.button
        className="btn-secondary"
        onClick={onExit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--color-white)'
        }}
      >
        <LogOut size={18} /> ออก
      </motion.button>
    </div>
  )
}
