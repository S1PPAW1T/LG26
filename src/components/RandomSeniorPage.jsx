import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, ArrowRight, Quote } from 'lucide-react'
import { seniors } from '../data/seniors'

export default function RandomSeniorPage({ onExit }) {
  const [currentSenior, setCurrentSenior] = useState(null)
  const remainingSeniors = useRef([])
  
  // Pick a random senior on initial mount
  useEffect(() => {
    remainingSeniors.current = [...seniors]
    pickRandomSenior()
  }, [])

  const pickRandomSenior = () => {
    if (seniors.length === 0) return
    
    const testId = null; 
    
    if (testId !== null) {
      const targetSenior = seniors.find(s => s.id === testId);
      if (targetSenior) {
        setCurrentSenior(targetSenior);
        return;
      }
    }
    
    if (remainingSeniors.current.length === 0) {
      remainingSeniors.current = [...seniors]
    }

    let randomIndex = Math.floor(Math.random() * remainingSeniors.current.length)
    let newSenior = remainingSeniors.current[randomIndex]
    
    // Prevent picking the same senior consecutively if possible
    if (seniors.length > 1 && currentSenior) {
      while (newSenior.id === currentSenior.id) {
        randomIndex = Math.floor(Math.random() * remainingSeniors.current.length)
        newSenior = remainingSeniors.current[randomIndex]
      }
    }
    
    remainingSeniors.current.splice(randomIndex, 1)
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
            padding: 'clamp(1.5rem, 5vh, 3rem) clamp(1rem, 5vw, 2rem)',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '85vh',
            boxShadow: '0 20px 40px rgba(138,21,56,0.08)',
            border: '1px solid rgba(138,21,56,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '6px',
            background: 'linear-gradient(90deg, var(--color-crimson) 0%, var(--color-cream) 100%)',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px'
          }}></div>

          {currentSenior.department && (
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '0',
              color: 'rgba(255, 255, 255, 0.9)',
              WebkitTextStroke: '2px var(--color-crimson)',
              textShadow: '2px 4px 12px rgba(138, 21, 56, 0.2)',
              fontSize: 'clamp(3rem, 12vw, 4.5rem)',
              fontWeight: '900',
              transform: 'translate(-20%, -50%) rotate(-25deg)',
              pointerEvents: 'none',
              zIndex: 20,
              whiteSpace: 'nowrap',
            }}>
              {currentSenior.department}
            </div>
          )}

          <div style={{
            width: 'clamp(140px, 32vw, 190px)',
            height: 'clamp(140px, 32vw, 190px)',
            borderRadius: '50%',
            padding: '5px',
            background: 'linear-gradient(135deg, var(--color-crimson) 0%, var(--color-cream) 100%)',
            boxShadow: '0 8px 24px rgba(138,21,56,0.2)',
            marginBottom: '1.25rem',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--color-white)',
              backgroundColor: '#f5f5f5'
            }}>
              <img 
                src={currentSenior.imageUrl} 
                alt={currentSenior.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <h3 style={{ 
            fontSize: 'clamp(1.5rem, 5vw, 2rem)', 
            fontWeight: '700', 
            color: 'var(--color-crimson)',
            marginBottom: '1rem'
          }}>
            {currentSenior.name}
          </h3>

          <div style={{ 
            position: 'relative', 
            padding: '0 clamp(1rem, 5vw, 2rem)', 
            marginBottom: '1.5rem',
            maxHeight: '35vh',
            overflowY: 'auto',
            width: '100%',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(138,21,56,0.2) transparent'
          }}>
            <Quote 
              size={24} 
              color="rgba(138,21,56,0.15)" 
              style={{ position: 'absolute', top: '0', left: '0' }}
            />
            <p style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.15rem)', 
              color: '#444', 
              lineHeight: '1.6',
              fontStyle: 'italic',
              fontWeight: '500',
              zIndex: 1,
              position: 'relative',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem'
            }}>
              "{currentSenior.quote}"
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '80%', gap: '0.75rem', marginTop: '0.5rem' }}>
            <motion.button 
              className="btn-primary"
              onClick={pickRandomSenior}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              ต่อไป <ArrowRight size={20} />
            </motion.button>

            <motion.button
              className="btn-secondary"
              onClick={onExit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <LogOut size={18} /> ออก
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
