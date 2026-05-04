export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-plano-de-saude-ideal",
    category: "Bem-estar",
    title: "Como escolher o plano de saúde ideal para sua família",
    excerpt:
      "Descubra os fatores essenciais na hora de contratar um plano que atenda às necessidades de todos.",
    date: "15 Mar 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    content: [
      "Escolher um plano de saúde é uma das decisões mais importantes para quem quer cuidar da família com responsabilidade e tranquilidade. Com tantas opções disponíveis no mercado, é fácil se sentir perdido entre coberturas, valores e redes credenciadas.",
      "O primeiro passo é entender o perfil da sua família. Quantas pessoas precisam ser cobertas? Existem crianças, idosos ou pessoas com condições de saúde específicas? Essas perguntas ajudam a definir o nível de cobertura necessário.",
      "A rede credenciada é um dos pontos mais importantes. Verifique se os hospitais, clínicas e laboratórios mais próximos da sua casa fazem parte do plano. Não adianta ter uma cobertura ampla se os melhores serviços de saúde estão longe do seu dia a dia.",
      "Outro fator essencial é a carência. Muitos planos exigem um período mínimo de espera antes de liberar determinados procedimentos. Planos como os da Amélia Saúde oferecem carências reduzidas, especialmente no coletivo por adesão, agilizando o acesso quando você mais precisa.",
      "O custo-benefício vai além do valor da mensalidade. Considere a coparticipação, os reajustes anuais e o que está incluído no pacote. Um plano mais barato pode sair mais caro no longo prazo se a cobertura for limitada.",
      "Por fim, pesquise a reputação da operadora. Avalie a qualidade do atendimento ao cliente, a agilidade nas autorizações e a satisfação dos beneficiários. Essas informações estão disponíveis na ANS (Agência Nacional de Saúde Suplementar) e em avaliações de usuários.",
    ],
  },
  {
    slug: "consultas-online-telemedicina",
    category: "Telemedicina",
    title: "Consultas online: praticidade sem perder a qualidade",
    excerpt:
      "Entenda como a telemedicina está transformando o acesso à saúde no Brasil.",
    date: "12 Mar 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
    content: [
      "A telemedicina chegou para ficar. O que começou como uma alternativa emergencial se consolidou como um dos pilares do atendimento em saúde no Brasil. Hoje, milhões de brasileiros já realizaram pelo menos uma consulta online.",
      "A principal vantagem é a acessibilidade. Sem precisar enfrentar trânsito ou salas de espera lotadas, o paciente pode ser atendido de casa, do trabalho ou de qualquer lugar com conexão à internet. Isso é especialmente valioso para quem mora em regiões com pouca oferta de profissionais de saúde.",
      "Mas será que a qualidade é a mesma? Estudos mostram que, para muitas especialidades, a telemedicina é tão eficaz quanto a consulta presencial. Dermatologia, psicologia, nutrologia e clínica geral são exemplos de áreas onde o atendimento remoto funciona excepcionalmente bem.",
      "A Amélia Saúde oferece telemedicina integrada ao seu plano, permitindo que você tenha acesso rápido a profissionais qualificados sem sair de casa. Agendamento simplificado, prescrições digitais e acompanhamento contínuo — tudo na palma da sua mão.",
      "Claro, existem situações que exigem exame físico e a consulta presencial continua sendo indispensável. A telemedicina complementa, não substitui. O equilíbrio entre os dois formatos é o que garante o melhor cuidado possível.",
    ],
  },
  {
    slug: "checkup-anual-prevencao",
    category: "Prevenção",
    title: "Check-up anual: por que você não deve adiar",
    excerpt:
      "A prevenção é o melhor caminho para uma vida saudável. Saiba quais exames são essenciais.",
    date: "08 Mar 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=600&fit=crop",
    content: [
      "Muitas pessoas só procuram um médico quando sentem algum sintoma. Essa abordagem reativa pode ser perigosa, pois diversas doenças graves se desenvolvem silenciosamente durante anos antes de manifestar qualquer sinal.",
      "O check-up anual é a ferramenta mais eficaz para detectar problemas em fase inicial, quando o tratamento é mais simples e as chances de cura são maiores. Investir em prevenção é investir em qualidade de vida.",
      "Entre os exames essenciais estão: hemograma completo, glicemia, colesterol e frações, função hepática e renal, urinálise e eletrocardiograma. Para mulheres, adicionam-se o Papanicolau e a mamografia. Para homens acima de 50 anos, o exame de PSA é recomendado.",
      "A frequência ideal dos exames varia de acordo com a idade, o histórico familiar e os fatores de risco individuais. Um clínico geral pode montar um plano personalizado de prevenção, levando em conta suas particularidades.",
      "Com um bom plano de saúde, o check-up deixa de ser um custo e se torna um investimento acessível. A Amélia Saúde cobre todos esses exames preventivos, sem burocracia e com ampla rede de laboratórios credenciados em todo o Rio de Janeiro.",
      "Não espere o corpo dar sinais. Cuide de você antes que seja tarde demais. Agende seu check-up anual e tenha paz de espírito para aproveitar o que realmente importa.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
