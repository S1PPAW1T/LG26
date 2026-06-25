import { motion } from 'framer-motion'
import { UserCircle } from 'lucide-react'

export default function IntroPage({ userName, setUserName, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName.trim()) {
      onNext()
    }
  }

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
    >
      <h2 style={{ 
        fontSize: '2.5rem', 
        color: 'var(--color-crimson)', 
        marginBottom: '2rem',
        fontWeight: '600'
      }}>
        แนะนำตัวให้พี่ ๆ รู้จักหน่อย
      </h2>

      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '2rem',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <UserCircle 
            size={24} 
            color="var(--color-crimson)" 
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="พิมพ์ชื่อเล่นของน้อง..."
            required
            style={{
              width: '100%',
              padding: '16px 16px 16px 52px',
              fontSize: '1.25rem',
              borderRadius: '16px',
              border: '2px solid rgba(138,21,56,0.2)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              fontFamily: 'var(--font-main)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-crimson)';
              e.target.style.boxShadow = '0 4px 20px rgba(138,21,56,0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(138,21,56,0.2)';
              e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            }}
          />
        </div>

        <motion.button 
          type="submit"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!userName.trim()}
          style={{ 
            width: '100%',
            opacity: userName.trim() ? 1 : 0.5,
            cursor: userName.trim() ? 'pointer' : 'not-allowed'
          }}
        >
          เริ่ม
        </motion.button>
      </form>
    </motion.div>
  )
}
