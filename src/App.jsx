import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage3.jsx';
import AIToolsPage from './components/AIToolsPage.jsx';
import ProductDetailPage from './components/ProductDetailPage.jsx';
import ForumPage from './components/ForumPage.jsx';
import SubmitPage from './components/SubmitPage.jsx';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tools" element={<AIToolsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;