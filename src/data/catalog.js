// Conteúdo local editável. Projetos são exemplos, não trabalhos realizados.
export const categories = ['Desenvolvimento Web', 'Sistemas Personalizados', 'Soluções com IA'];
export const services = [
  { id: 'web', title: 'Desenvolvimento Web', category: categories[0], kind: 'Serviço', description: 'Sites e interfaces responsivas, com foco em acessibilidade, desempenho e uma navegação clara.' },
  { id: 'systems', title: 'Sistemas Personalizados', category: categories[1], kind: 'Serviço', description: 'Aplicações pensadas para organizar processos e atender necessidades específicas do seu negócio.' },
  { id: 'ai', title: 'Soluções com IA', category: categories[2], kind: 'Serviço', description: 'Exploração de inteligência artificial para apoiar tarefas, conectar informações e ampliar possibilidades.' },
];
export const catalog = [...services,
  { id: 'portal', title: 'Portal institucional', category: categories[0], kind: 'Projeto demonstrativo', description: 'Exemplo conceitual de um site institucional com conteúdo organizado e navegação responsiva.' },
  { id: 'dashboard', title: 'Painel de gestão', category: categories[1], kind: 'Projeto demonstrativo', description: 'Exemplo conceitual de uma interface para acompanhar tarefas e processos internos.' },
  { id: 'assistant', title: 'Assistente de conteúdo', category: categories[2], kind: 'Projeto demonstrativo', description: 'Exemplo conceitual de um assistente com IA para encontrar e organizar informações.' },
];
export const institutional = [
  { title: 'Quem somos', text: 'A SCHWARTZ DEV é uma proposta de desenvolvimento orientada à criação de soluções digitais úteis, claras e acessíveis. Este texto é uma base institucional provisória para edição.' },
  { title: 'Nossa missão', text: 'Transformar ideias e necessidades em soluções digitais bem estruturadas, com atenção à experiência de quem as utiliza.' },
  { title: 'Nossa visão', text: 'Construir uma atuação baseada em tecnologia responsável, colaboração e evolução contínua.' },
  { title: 'Nossos valores', text: 'Clareza na comunicação, cuidado com as pessoas, qualidade técnica, transparência e aprendizado contínuo.' },
  { title: 'Nosso compromisso com a tecnologia', text: 'Escolher ferramentas com propósito, priorizar acessibilidade e manutenção e acompanhar a evolução tecnológica com senso crítico.' },
];
