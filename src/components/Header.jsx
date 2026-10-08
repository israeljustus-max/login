import { CodeXml } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
  return <header className="site-header">
    <div className="identity-band"><div className="container identity-inner">
      <Link to="/" className="brand" aria-label="SCHWARTZ DEV — página inicial">
        <span className="brand-icon"><CodeXml size={30} aria-hidden="true" /></span>
        <span>SCHWARTZ <span className="brand-accent">DEV</span></span>
      </Link>
      <span className="brand-caption">IDEIAS. CÓDIGO. POSSIBILIDADES.</span>
    </div></div>
    <Navbar />
  </header>;
}
