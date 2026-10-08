import { CodeXml, Layers, Sparkles } from 'lucide-react';
const icons = { 'Desenvolvimento Web': CodeXml, 'Sistemas Personalizados': Layers, 'Soluções com IA': Sparkles };
export default function ServiceCard({ item }) {
  const Icon = icons[item.category] || CodeXml;
  return <article className="service-card"><div className="service-card-top"><Icon size={25} aria-hidden="true" /><span className="item-kind">{item.kind}</span></div><h3>{item.title}</h3><p>{item.description}</p><span className="category-label">{item.category}</span></article>;
}
