import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Servicios } from './components/Servicios.jsx';
import { Galeria } from './components/Galeria.jsx';
import { Resenas } from './components/Resenas.jsx';
import { Contacto } from './components/Contacto.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Galeria />
      <Resenas />
      <Contacto />
      <Footer />
    </>
  );
}
