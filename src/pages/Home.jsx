import { ArrowRight, CodeXml } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/catalog';
export default function Home() {
  return <>
    <section className="hero container">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> BEM-VINDO À SCHWARTZ DEV</p>
        <h1>Transformando ideias em <span>soluções digitais</span></h1>
        <p className="lead">A SCHWARTZ DEV conecta desenvolvimento web, sistemas personalizados e inteligência artificial para transformar ideias em experiências digitais claras e funcionais.</p>
        <a className="button" href="#servicos">Conheça nossos serviços <ArrowRight size={18} aria-hidden="true" /></a>
        <p className="hero-footnote">CLAREZA NO DESIGN. CUIDADO EM CADA DETALHE.</p>
      </div>
      <div className="code-visual" aria-hidden="true">
        <div className="window-bar"><div><i /><i /><i /></div><span>schwartz.dev</span><CodeXml size={16} /></div>
        <div className="code-content"><div className="code-label">DA IDEIA À INTERFACE</div><div className="code-mark">&lt;<span>dev</span> /&gt;</div>
          <pre><span className="code-purple">const</span> próximoPasso = {'{'}<br />{'  '}ideia: <span className="code-green">"sua visão"</span>,<br />{'  '}caminho: <span className="code-green">"tecnologia"</span>,<br />{'  '}possibilidades: <span className="code-blue">Infinity</span><br />{'}'};</pre>
          <div className="code-bottom"><span className="status-dot" /> Pronto para começar <span>01 / 05</span></div>
        </div>
      </div>
    </section>
    <section className="container services-section" id="servicos" aria-labelledby="services-title">
      <p className="eyebrow">DO CONCEITO À SOLUÇÃO</p><h2 id="services-title" className="section-title">Tecnologia para sua próxima ideia.</h2>
      <div className="service-grid">{services.map(service => <ServiceCard key={service.id} item={service} />)}</div>
    </section>
  </>;
}
