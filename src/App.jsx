import { useEffect, useRef } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pesquisa from './pages/Pesquisa';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
const titles = { '/': 'Home', '/sobre': 'Sobre', '/pesquisa': 'Pesquisa', '/cadastro': 'Cadastro', '/login': 'Login' };
export default function App() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    document.title = `${titles[pathname] || 'Página não encontrada'} | SCHWARTZ DEV`;
    if (previousPath.current !== pathname) { document.querySelector('main')?.focus(); window.scrollTo(0, 0); }
    previousPath.current = pathname;
  }, [pathname]);
  return <><a className="skip-link" href="#main-content">Pular para o conteúdo</a><Header /><main id="main-content" tabIndex={-1}><Routes><Route path="/index.html" element={<Navigate to="/" replace />} /><Route path="/" element={<Home />} /><Route path="/sobre" element={<Sobre />} /><Route path="/pesquisa" element={<Pesquisa />} /><Route path="/cadastro" element={<Cadastro />} /><Route path="/login" element={<Login />} /><Route path="*" element={<section className="container page-section"><p className="eyebrow">404</p><h1>Página não encontrada.</h1><Link className="button" to="/">Voltar para Home</Link></section>} /></Routes></main><Footer /></>;
}
