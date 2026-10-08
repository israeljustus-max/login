import { useState } from 'react';
import { Search } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import ServiceCard from '../components/ServiceCard';
import { catalog, categories } from '../data/catalog';
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim();
export default function Pesquisa() {
  const [query, setQuery] = useState('');
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('');
  const results = catalog.filter(item => (!category || item.category === category) && normalize(`${item.title} ${item.description} ${item.category} ${item.kind}`).includes(normalize(term)));
  return <section className="container page-section"><PageIntro eyebrow="EXPLORE NOSSAS POSSIBILIDADES" title="Encontre uma solução.">Pesquise os serviços e exemplos conceituais do catálogo. Projetos demonstrativos não representam trabalhos realizados.</PageIntro><form className="content-panel search-form" onSubmit={event => { event.preventDefault(); setTerm(query.trim()); }}><label htmlFor="search">Pesquisar serviços e projetos</label><div className="search-row"><input id="search" type="search" placeholder="Ex.: web, gestão, inteligência artificial" value={query} onChange={event => setQuery(event.target.value)} /><button className="button" type="submit"><Search size={18} aria-hidden="true" />Pesquisar</button></div><div className="filter-field"><label htmlFor="category">Filtrar por categoria</label><select id="category" value={category} onChange={event => setCategory(event.target.value)}><option value="">Todas as categorias</option>{categories.map(value => <option key={value}>{value}</option>)}</select></div></form><p className="results-summary" role="status">{results.length} {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}{term && ` para “${term}”`}.</p>{results.length ? <div className="service-grid">{results.map(item => <ServiceCard key={item.id} item={item} />)}</div> : <div className="content-panel empty-state"><Search aria-hidden="true" /><h2>Nenhum resultado encontrado</h2><p>Tente outro termo ou selecione outra categoria.</p><button className="button" type="button" onClick={() => { setQuery(''); setTerm(''); setCategory(''); }}>Limpar filtros</button></div>}</section>;
}
