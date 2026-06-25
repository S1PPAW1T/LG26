import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomePage from './components/WelcomePage'
import IntroPage from './components/IntroPage'
import RandomSeniorPage from './components/RandomSeniorPage'
import ExitPage from './components/ExitPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome') // welcome, intro, random, exit
  const [userName, setUserName] = useState('')

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNext={() => setCurrentPage('intro')} />
      case 'intro':
        return (
          <IntroPage 
            userName={userName} 
            setUserName={setUserName} 
            onNext={() => setCurrentPage('random')} 
          />
        )
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
      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
