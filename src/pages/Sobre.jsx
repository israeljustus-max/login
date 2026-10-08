import PageIntro from '../components/PageIntro';
import { institutional } from '../data/catalog';
export default function Sobre() {
  return <section className="container page-section"><PageIntro eyebrow="SOBRE A EMPRESA" title="Tecnologia com propósito.">Conheça a proposta da SCHWARTZ DEV e os princípios que orientam a construção de suas soluções.</PageIntro><p className="editorial-note">Conteúdo institucional provisório, sujeito à revisão da empresa.</p><div className="about-grid">{institutional.map(({title,text}) => <article className="content-panel" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section>;
}
