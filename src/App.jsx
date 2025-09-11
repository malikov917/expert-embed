import LandingPage from './components/LandingPage2.jsx'
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