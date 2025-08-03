import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <nav className="space-x-3 md:space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
