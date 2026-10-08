import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [['/', 'Home'], ['/sobre', 'Sobre'], ['/pesquisa', 'Pesquisa'], ['/cadastro', 'Cadastro'], ['/login', 'Login']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  function closeWithEscape(event) {
    if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); }
  }
  return <nav className="navigation-band" aria-label="Navegação principal" onKeyDown={closeWithEscape}>
    <div className="container navigation-inner">
      <button ref={button} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}{open ? 'Fechar menu' : 'Abrir menu'}
      </button>
      <ul id="main-navigation" className={`nav-list ${open ? 'is-open' : ''}`}>
        {links.map(([to, label]) => <li key={to}><NavLink to={to} className={({ isActive }) => [isActive ? 'active' : '', to === '/login' ? 'login-link' : ''].filter(Boolean).join(' ')} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink></li>)}
      </ul>
      <span className="nav-detail"><span /> DESENVOLVIMENTO & TECNOLOGIA</span>
    </div>
  </nav>;
}
