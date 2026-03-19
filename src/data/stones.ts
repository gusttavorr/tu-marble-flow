const BASE_IMG = "http://www.itumarmores.com.br/area_restrita/img_produtos";

export interface Stone {
  id: string;
  name: string;
  image: string;
  category: string;
  origin: string;
  application: string[];
  finish: string[];
  description: string;
  history: string;
  characteristics: string[];
  whyChoose: string;
}

export const stones: Stone[] = [
  {
    id: "branco-polar",
    name: "Branco Polar",
    image: `${BASE_IMG}/13.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Pisos", "Revestimentos", "Escadas"],
    finish: ["Polido", "Levigado", "Flameado"],
    description:
      "O Branco Polar é um granito brasileiro de elegância atemporal. Seu fundo branco com delicados veios cinza cria uma atmosfera de sofisticação e amplitude em qualquer ambiente.",
    history:
      "Extraído das montanhas do Espírito Santo, o Branco Polar é formado há milhões de anos por processos geológicos intensos. Sua composição rica em quartzo e feldspato lhe confere uma resistência excepcional. Amplamente utilizado em projetos de alto padrão ao redor do mundo, este granito se tornou símbolo de luxo discreto e bom gosto. Arquitetos renomados o escolhem pela sua versatilidade — combina tanto com ambientes clássicos quanto contemporâneos, trazendo luminosidade e amplitude aos espaços.",
    characteristics: [
      "Alta resistência a riscos e manchas",
      "Baixa absorção de água",
      "Ideal para áreas de alto tráfego",
      "Fácil manutenção e limpeza",
    ],
    whyChoose:
      "Escolher o Branco Polar é investir em durabilidade e beleza que transcendem gerações. Sua tonalidade neutra se adapta a qualquer decoração, tornando-o a escolha perfeita para quem busca sofisticação sem esforço.",
  },
  {
    id: "preto-absoluto",
    name: "Preto Absoluto",
    image: `${BASE_IMG}/36.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Mesas", "Pisos", "Fachadas"],
    finish: ["Polido", "Escovado", "Flameado"],
    description:
      "O Preto Absoluto é a expressão máxima de elegância e poder. Seu tom negro profundo e uniforme transforma qualquer superfície em uma obra de arte minimalista.",
    history:
      "Originário do estado da Bahia, o Preto Absoluto é um dos granitos mais procurados do mundo. Sua formação geológica de mais de 600 milhões de anos resulta em uma pedra de densidade e dureza incomparáveis. Exportado para os cinco continentes, ele é presença garantida em hotéis de luxo, restaurantes estrelados e residências de alto padrão. O Preto Absoluto é mais que uma pedra — é uma declaração de estilo.",
    characteristics: [
      "Cor uniforme e profunda",
      "Extrema durabilidade",
      "Resistente a altas temperaturas",
      "Brilho intenso quando polido",
    ],
    whyChoose:
      "O Preto Absoluto é para quem não tem medo de ousar. Ele traz drama e sofisticação a qualquer projeto, criando contrastes marcantes que elevam o design a outro nível.",
  },
  {
    id: "amarelo-ornamental",
    name: "Amarelo Ornamental",
    image: `${BASE_IMG}/5.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Pisos", "Revestimentos"],
    finish: ["Polido", "Levigado"],
    description:
      "O Amarelo Ornamental é sinônimo de calor e acolhimento. Com tons dourados e movimentação suave, ele traz vida e energia para os ambientes.",
    history:
      "Extraído no Espírito Santo, o Amarelo Ornamental conquistou o mercado internacional pela sua beleza calorosa e custo-benefício excepcional. Sua formação geológica única, com cristais de feldspato amarelo, quartzo e biotita, cria um padrão visual harmonioso. Presente em milhares de cozinhas e banheiros pelo mundo, ele é prova de que elegância e acessibilidade podem caminhar juntas.",
    characteristics: [
      "Padrão uniforme e harmonioso",
      "Excelente custo-benefício",
      "Resistente e durável",
      "Combina com madeira e tons neutros",
    ],
    whyChoose:
      "O Amarelo Ornamental é a escolha inteligente para quem busca beleza natural sem comprometer o orçamento. Ele aquece os ambientes e cria uma atmosfera convidativa.",
  },
  {
    id: "verde-ubatuba",
    name: "Verde Ubatuba",
    image: `${BASE_IMG}/48.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Pisos", "Escadas", "Revestimentos"],
    finish: ["Polido", "Levigado", "Escovado"],
    description:
      "O Verde Ubatuba é uma joia da natureza brasileira. Seu verde profundo com reflexos dourados evoca a exuberância da mata atlântica.",
    history:
      "Batizado em homenagem à cidade litorânea de Ubatuba, este granito é um dos mais emblemáticos do Brasil. Formado há centenas de milhões de anos, carrega em seus cristais a história geológica do nosso planeta. O Verde Ubatuba é exportado para mais de 50 países e é reconhecido internacionalmente pela sua beleza singular. Designers do mundo todo o utilizam para criar ambientes que conectam o luxo à natureza.",
    characteristics: [
      "Verde profundo com reflexos dourados",
      "Alta resistência mecânica",
      "Ideal para cozinhas gourmet",
      "Não mancha com facilidade",
    ],
    whyChoose:
      "Escolher o Verde Ubatuba é trazer a força e a beleza da natureza para dentro de casa. Ele é perfeito para quem deseja um ambiente único e cheio de personalidade.",
  },
  {
    id: "bordeaux",
    name: "Bordeaux",
    image: `${BASE_IMG}/7.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Mesas", "Pisos", "Lareiras"],
    finish: ["Polido", "Levigado"],
    description:
      "O Bordeaux é a personificação do luxo. Seus tons avermelhados e movimentação intensa criam superfícies de tirar o fôlego.",
    history:
      "Originário de Minas Gerais, o Bordeaux leva o nome da famosa região vinícola francesa — e não é por acaso. Assim como um grande vinho, este granito é complexo, sofisticado e melhora com o tempo. Sua composição única de granada, feldspato e quartzo cria padrões que nunca se repetem. Cada chapa é uma peça única da natureza, valorizada por colecionadores de pedras e arquitetos visionários.",
    characteristics: [
      "Padrão exclusivo e irrepetível",
      "Tons que variam do vermelho ao bordô",
      "Extremamente resistente",
      "Peça única da natureza",
    ],
    whyChoose:
      "O Bordeaux é para quem entende que verdadeiro luxo está nos detalhes. Cada chapa conta uma história diferente, tornando seu projeto absolutamente único.",
  },
  {
    id: "carrara",
    name: "Carrara",
    image: `${BASE_IMG}/12.jpg`,
    category: "Mármore",
    origin: "Itália",
    application: ["Bancadas", "Pisos", "Revestimentos", "Esculturas"],
    finish: ["Polido", "Amaciado"],
    description:
      "O Mármore Carrara é lenda viva. Usado por Michelangelo em suas obras-primas, ele continua sendo o padrão de excelência em pedras naturais.",
    history:
      "Extraído das montanhas de Carrara, na Toscana italiana, desde a Roma Antiga, este mármore é sinônimo de arte e civilização. Michelangelo o escolheu para esculpir o David e a Pietà. Os imperadores romanos o usaram em templos e palácios. Hoje, ele continua sendo a escolha de arquitetos e designers que buscam o melhor do melhor. Ter Carrara em sua casa é possuir um pedaço da história da humanidade.",
    characteristics: [
      "Veios cinza sobre fundo branco",
      "Pedra utilizada há mais de 2.000 anos",
      "Sinônimo de arte e sofisticação",
      "Ideal para ambientes clássicos",
    ],
    whyChoose:
      "O Carrara não é apenas um mármore — é patrimônio cultural da humanidade. Escolhê-lo é conectar seu lar a milênios de arte, cultura e beleza.",
  },
  {
    id: "red-dragon",
    name: "Red Dragon",
    image: `${BASE_IMG}/38.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Ilhas de cozinha", "Mesas", "Painéis"],
    finish: ["Polido", "Escovado"],
    description:
      "O Red Dragon é selvagem e magnífico. Seus veios vermelhos intensos sobre fundo escuro criam um visual dramático e inesquecível.",
    history:
      "Encontrado em jazidas exclusivas do Brasil, o Red Dragon é uma das pedras mais espetaculares do mundo. Sua formação geológica rara, com veios de granada vermelha cortando uma base de granulito escuro, cria um efeito visual que lembra labaredas de fogo. Cobiçado por designers internacionais, ele é utilizado em projetos que buscam causar impacto visual máximo. Cada chapa é uma explosão de cores da natureza.",
    characteristics: [
      "Visual dramático e único",
      "Veios vermelhos sobre fundo escuro",
      "Extrema durabilidade",
      "Pedra rara e valorizada",
    ],
    whyChoose:
      "O Red Dragon é para projetos que querem ser lembrados. Ele transforma qualquer ambiente em uma experiência visual extraordinária.",
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    image: `${BASE_IMG}/33.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Painéis", "Revestimentos", "Banheiros"],
    finish: ["Polido", "Levigado"],
    description:
      "O Ocean Blue captura a essência do mar em pedra. Seus tons azulados e movimentação fluida trazem serenidade e exclusividade.",
    history:
      "Raro e precioso, o Ocean Blue é encontrado em poucas jazidas no Brasil. Sua coloração azul única é resultado de cristais de sodalita e outros minerais raros, formados sob condições geológicas específicas ao longo de bilhões de anos. Disputado por colecionadores e designers de todo o mundo, ele é considerado uma pedra semipreciosa. Ter Ocean Blue em seu projeto é possuir algo verdadeiramente raro.",
    characteristics: [
      "Tonalidade azul natural e rara",
      "Pedra semipreciosa",
      "Brilho excepcional quando polida",
      "Exclusividade garantida",
    ],
    whyChoose:
      "O Ocean Blue é para quem busca o extraordinário. Sua raridade e beleza o tornam um investimento em exclusividade e bom gosto.",
  },
  {
    id: "branco-itaunas",
    name: "Branco Itaúnas",
    image: `${BASE_IMG}/9.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Pisos", "Revestimentos", "Escadas"],
    finish: ["Polido", "Levigado"],
    description:
      "O Branco Itaúnas combina a pureza do branco com veios suaves em tons de cinza e bege, criando um visual clean e contemporâneo.",
    history:
      "Batizado em homenagem ao rio Itaúnas, no Espírito Santo, este granito representa a beleza natural do litoral capixaba. Sua formação em rochas metamórficas confere padrões suaves e elegantes. O Branco Itaúnas ganhou popularidade mundial por ser uma alternativa acessível ao mármore branco, oferecendo a mesma beleza com a resistência superior do granito. É a escolha favorita de quem deseja o visual do mármore sem abrir mão da praticidade.",
    characteristics: [
      "Visual similar ao mármore",
      "Resistência superior do granito",
      "Baixa manutenção",
      "Ideal para ambientes claros",
    ],
    whyChoose:
      "O Branco Itaúnas oferece o melhor dos dois mundos: a elegância do mármore com a praticidade do granito. Perfeito para quem busca beleza sem complicação.",
  },
  {
    id: "verde-pavao",
    name: "Verde Pavão",
    image: `${BASE_IMG}/43.jpg`,
    category: "Granito",
    origin: "Brasil",
    application: ["Bancadas", "Mesas", "Pisos", "Revestimentos"],
    finish: ["Polido", "Levigado", "Escovado"],
    description:
      "O Verde Pavão é uma celebração de cores. Seus cristais verdes, azuis e dourados lembram as penas de um pavão, criando superfícies exuberantes.",
    history:
      "Encontrado em jazidas de Minas Gerais, o Verde Pavão é uma das pedras mais exuberantes do Brasil. Seu nome faz referência às cores vibrantes das penas do pavão, e não é exagero — seus cristais multicoloridos criam um espetáculo visual. Cada chapa revela nuances diferentes dependendo da iluminação, tornando-o uma pedra viva que muda de humor ao longo do dia. É a escolha de quem quer um ambiente que nunca cansa.",
    characteristics: [
      "Cristais multicoloridos",
      "Efeito visual que muda com a luz",
      "Alta durabilidade",
      "Pedra exuberante e única",
    ],
    whyChoose:
      "O Verde Pavão é para quem celebra a vida através das cores. Ele transforma qualquer ambiente em um espaço vibrante e cheio de energia.",
  },
];
