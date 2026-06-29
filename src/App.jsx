import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomePage from './components/WelcomePage'
import IntroPage from './components/IntroPage'
import MessagePage from './components/MessagePage'
import RandomSeniorPage from './components/RandomSeniorPage'
import ExitPage from './components/ExitPage'
import { seniors } from './data/seniors'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome') // welcome, intro, message, random, exit
  const [userName, setUserName] = useState('')

  // Preload all senior images in the background when the app first loads
  useEffect(() => {
    seniors.forEach(senior => {
      if (senior.imageUrl) {
        const img = new Image()
        img.src = senior.imageUrl
      }
    })
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNext={() => setCurrentPage('intro')} />
      case 'intro':
        return (
          <IntroPage 
            userName={userName} 
            setUserName={setUserName} 
            onNext={() => setCurrentPage('message')} 
          />
        )
      case 'message':
        return <MessagePage userName={userName} onNext={() => setCurrentPage('random')} />
      case 'random':
        return <RandomSeniorPage onExit={() => setCurrentPage('exit')} />
      case 'exit':
        return <ExitPage userName={userName} />
      default:
        return <WelcomePage onNext={() => setCurrentPage('intro')} />
    }
  }

  return (
    <div className="app-container">
      <div className="bg-decor-1"></div>
      <div className="bg-decor-2"></div>
      <div className="bg-decor-3"></div>
      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
