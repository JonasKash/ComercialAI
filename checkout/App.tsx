import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<Checkout theme={theme} setTheme={setTheme} />} />
          <Route path="/checkout" element={<Checkout theme={theme} setTheme={setTheme} />} />
          <Route path="/success" element={<Success theme={theme} setTheme={setTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;