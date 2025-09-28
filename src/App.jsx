import LandingPage from './components/LandingPage3.jsx'
import './App.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <LandingPage />
      <Analytics />
    </>
  );
}

export default App