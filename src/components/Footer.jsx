import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="container site-footer"><span>SCHWARTZ DEV<span className="footer-divider"> / </span>Desenvolvimento & tecnologia</span><Link to="/sobre">Conheça a empresa</Link><span>Construindo novas possibilidades.</span></footer>;
}
