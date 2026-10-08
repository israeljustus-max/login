export default function PageIntro({ eyebrow, title, children }) {
  return <div className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{children}</p></div>;
}
