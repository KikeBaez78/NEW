import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar/index.js';
import { Footer } from './components/layout/Footer/index.js';
import { LandingPage } from './pages/LandingPage/index.js';
import { DashboardPage } from './pages/DashboardPage/index.js';

function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--color-neutral-200)' }}>404</h1>
      <p style={{ color: 'var(--color-neutral-500)', marginTop: '0.5rem' }}>Page not found.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
