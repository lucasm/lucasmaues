import { useRef, useState } from 'react'
import PageLayout from '../components/PageLayout'
import Style from '../styles/Store.module.css'
import DiscountBanner from '../components/DiscountBanner'
import { IconHeart } from '../components/Svgs'

const productsBrazil = [
  {
    title: 'Apple AirPods Pro 2',
    description:
      'O melhor fone Bluetooth, com áudio espacial e cancelamento de ruído padrão Apple.',
    url: 'https://amzn.to/3Dw6uA0',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Apple iPhone 15 128GB',
    description:
      'iPhone com desempenho reconhecido, câmera de qualidade, USB-C e boa duração de bateria.',
    url: 'https://amzn.to/49uT9pP',
    image: 'https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Mouse Logitech MX Vertical',
    description: 'Melhor mouse ergonômico Bluetooth já criado na história.',
    url: 'https://amzn.to/3Q2pxHV',
    image: 'https://m.media-amazon.com/images/I/71P5QJEcfRL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Teclado Logitech MX Keys Mini',
    description:
      'Teclado Bluetooth compacto, iluminado, USB-C, bateria recarregável e até 3 dispositivos.',
    url: 'https://amzn.to/3OwLrDM',
    image: 'https://m.media-amazon.com/images/I/71JFKFPi1VL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Stanley Aerolight Fast Flow',
    description: 'Garrafa térmica 710ML, perfeita para academia e viagens.',
    url: 'https://amzn.to/3uDXl7H',
    image: 'https://m.media-amazon.com/images/I/41xxMGeDEaL._AC_SX679_.jpg',
    category: 'Acessórios',
  },
  {
    title: 'JBL Flip 6',
    description: 'Caixa de som Bluetooth para todas as horas, mesmo na piscina.',
    url: 'https://amzn.to/45IVz1o',
    image: 'https://m.media-amazon.com/images/I/61R45NJNLkL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Monitores Dell 4K, UHD e Full HD',
    description: 'Referência em monitores duráveis, a Dell tem suporte elogiado.',
    url: 'https://amzn.to/3uqCLHx',
    image: 'https://m.media-amazon.com/images/I/81qinbve0BL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Webcam Logitech Brio 500 ',
    description:
      'Webcam Full HD ideal para home office, com foco automático, microfone que reduz barulhos e modo privacidade.',
    url: 'https://amzn.to/4cnZe9t',
    image: 'https://m.media-amazon.com/images/I/51F3uryF62L._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Echo Dot 5 Alexa',
    description:
      'Caixinha de som inteligente, toca música e conversa com IA - "ei Alexa toca uma música".',
    url: 'https://amzn.to/45jAJFL',
    image: 'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'JBL Go 3',
    description: 'Caixinha de som Bluetooth, bom presente para quem você gosta.',
    url: 'https://amzn.to/43CrM9C',
    image: 'https://m.media-amazon.com/images/I/61iD9jlBlqL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'JBL Tune 110',
    description: 'Fone de ouvido com fio durável e com microfone.',
    url: 'https://amzn.to/46Dtp9h',
    image: 'https://m.media-amazon.com/images/I/51bYMYoBKDL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Mochila Dell Pro EcoLoop',
    description: 'Mochila para Notebook impermeável.',
    url: 'https://amzn.to/3TgB6yc',
    image: 'https://m.media-amazon.com/images/I/918irDheCIL._AC_SY879_.jpg',
    category: 'Acessórios',
  },
  {
    title: 'Fire TV Stick Full HD',
    description: 'Controle remoto com Alexa que transforma sua TV em uma central de streamings.',
    url: 'https://amzn.to/44YKNnK',
    image: 'https://m.media-amazon.com/images/I/41IVtjpgH7L._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Kindle 11',
    description: 'O leitor de livros digitais definitivo.',
    url: 'https://amzn.to/3QdXiaV',
    image: 'https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Mini Projetor HDMI Bluetooth 5G Wi-Fi Full HD',
    description: 'Projetor portátil com preço imbatível.',
    url: 'https://amzn.to/3F4zAHn',
    image: 'https://m.media-amazon.com/images/I/5133wKaOqSL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Filtro de Linha Clamper',
    description:
      'Proteção certificada, proteja até 5 equipamentos para não queimarem com surtos elétricos.',
    url: 'https://amzn.to/3Mb5Mg9',
    image: 'https://m.media-amazon.com/images/I/51C9M7zl-5L._AC_SX679_.jpg',
    category: 'Acessórios',
  },
  {
    title: 'Logitech MX Keys S',
    description: 'Teclado Bluetooth famoso pela alta produtividade.',
    url: 'https://amzn.to/3tLZkpo',
    image: 'https://m.media-amazon.com/images/I/71Tjmco5WRL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Logitech Lift Vertical',
    description: 'Mouse ergonômico Bluetooth pequeno - e mais barato que o MX Vertical.',
    url: 'https://amzn.to/3HKL5VS',
    image: 'https://m.media-amazon.com/images/I/61OkuiCWbDL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Xiaomi Mi Band 8',
    description: 'Smartwatch leve, com preço imbatível.',
    url: 'https://amzn.to/404gMl8',
    image: 'https://m.media-amazon.com/images/I/51W7hGYxPOL._AC_SY879_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Apple Watch SE',
    description: 'Smartwatch da Apple, com GPS, monitoramento de sono, saúde e esportes.',
    url: 'https://amzn.to/3TNsluz',
    image: 'https://m.media-amazon.com/images/I/515EBszYPBL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Samsung Galaxy Tab A9+ 64GB 5G Wi-Fi',
    description: 'Tablet Android com preço imbatível.',
    url: 'https://amzn.to/49dhGyK',
    image: 'https://m.media-amazon.com/images/I/41zrg4ISTBL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Apple iPad 10,9" 256GB 5G Wi-Fi',
    description: 'Melhor tablet do mundo.',
    url: 'https://amzn.to/45F8t0g',
    image: 'https://m.media-amazon.com/images/I/51Xy63tCONL.__AC_SY445_SX342_QL70_ML2_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Xiaomi Redmi Note 12 128GB',
    description: 'Smarthphone Android com preço imbatível, com suporte a dois chips SIM.',
    url: 'https://amzn.to/4bp2Tn6',
    image: 'https://m.media-amazon.com/images/I/61FQ61igtVL._AC_SY879_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Apple iPhone 13 128GB',
    description: 'iPhone que vale o preço, mas com cabo Lightning.',
    url: 'https://amzn.to/3rKdF4O',
    image: 'https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Apple MacBook Air M2 13" 8GB 256GB',
    description: 'MacBook leve, portátil e com chip M2 de alto desempenho.',
    url: 'https://amzn.to/495encR',
    image: 'https://m.media-amazon.com/images/I/51B-aeCQTCL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Apple MacBook Air M1 13" 8GB 256GB',
    description:
      'MacBook acessível, super portátil, atinge desempenho e duração de bateria incríveis com chip M1. Obra prima!',
    url: 'https://amzn.to/45JUIxs',
    image: 'https://m.media-amazon.com/images/I/41-RhQeujUL._AC_SX679_.jpg',
    category: 'Dispositivos',
  },
  {
    title: 'Suporte para Notebooks',
    description: 'Segura essa marimba!!!',
    url: 'https://amzn.to/401PVGi',
    image: 'https://m.media-amazon.com/images/I/61ZqTo-kwpL._AC_SX679_.jpg',
    category: 'Acessórios',
  },
  {
    title: 'USB-C Adaptador Hub Baseus',
    description: 'Hub USB-C com multientradas, como HDMI, USB, SD e microSD.',
    url: 'https://amzn.to/3tOi33C',
    image: 'https://m.media-amazon.com/images/I/61f6gHVPN6L._AC_SX679_.jpg',
    category: 'Acessórios',
  },
  {
    title: 'Entendendo algoritmos: Guia ilustrado para programadores',
    description:
      'Aprender algoritmos e estruturas de dados é essencial - e fica fácil com esse livro. Contém exemplos práticos em Python.',
    url: 'https://amzn.to/400hrUR',
    image: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Estruturas de dados e algoritmos com JavaScript',
    description:
      'Escrito pela incrível @Loaine com exemplos em JavaScript na sintaxe atual do ECMAScript.',
    url: 'https://amzn.to/3Fni1T2',
    image: 'https://m.media-amazon.com/images/I/71KGa1y8eaL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'JavaScript: O guia definitivo',
    description: "Referência JavaScript, feito pela consagrada editora O'Reilly.",
    url: 'https://amzn.to/3PWgEj6',
    image: 'https://m.media-amazon.com/images/I/91z1xY4ppaL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Cracking the Coding Interview: 189 programming questions and solutions',
    description: 'Vai trabalhar na gringa meu fi, arrebenta na entrevista, crackeia tuuuudo!!!',
    url: 'https://amzn.to/46EDYZL',
    image: 'https://m.media-amazon.com/images/I/61mIq2iJUXL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Programador Pragmático: de aprendiz a mestre',
    description:
      'Clássico para todo programador, com dicas e principais armadilhas do desenvolvimento de software.',
    url: 'https://amzn.to/3MbyOw9',
    image: 'https://m.media-amazon.com/images/I/61hewOW+8zL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Thinking in Systems: A Primer',
    description: 'Bestseller sobre como os sistemas funcionam.',
    url: 'https://amzn.to/3M4mSwk',
    image: 'https://m.media-amazon.com/images/I/51ybHl0bT6L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Clean Code: Habilidades práticas do Agile software',
    description:
      'Clássico sobre clean code de Uncle Bob. E polêmico: "Mesmo um código ruim pode funcionar, mas se ele não for bem pensado, pode acabar com uma empresa". Ajuda desenvolvedores a escreverem código de maior qualidade e eficiência, usando metodologia Agile.',
    url: 'https://amzn.to/3QoWnEh',
    image: 'https://m.media-amazon.com/images/I/71dH97FwGbL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Clean Architecture: O guia do artesão para estrutura e design de software',
    description:
      'Clássico da arquitetura de software. Com exemplos em Java. Ensina a criar arquiteturas de software que sejam robustas e sustentáveis, adequadas para cada tipo de problema.',
    url: 'https://amzn.to/493NuXW',
    image: 'https://m.media-amazon.com/images/I/815d9tE7jSL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Design Thinking: Uma metodologia poderosa para decretar o fim das velhas ideias',
    description: 'Clássico sobre design thinking.',
    url: 'https://amzn.to/3FpeN1l',
    image: 'https://m.media-amazon.com/images/I/61frFqn8n2L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Domain-Driven Design: atacando as complexidades no coração do software',
    description: 'Clássico sobre DDD.',
    url: 'https://amzn.to/3Qs3jk9',
    image: 'https://m.media-amazon.com/images/I/61aIS4n2jZL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Refatoração: Aperfeiçoando o design de códigos existentes',
    description: 'Clássico sobre refatoração.',
    url: 'https://amzn.to/3Q2xs81',
    image: 'https://m.media-amazon.com/images/I/81sTm5M7wjL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Super Thinking: The big book of mental models',
    description: 'Clássico sobre modelos mentais, para tomar decisões melhores.',
    url: 'https://amzn.to/403ZPau',
    image: 'https://m.media-amazon.com/images/I/815yQmQZFXL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'O ego é seu inimigo: Como dominar seu pior adversário',
    description:
      'O ego pode ser prejudicial ao sucesso e ao desenvolvimento pessoal. Fazer ou ser, é o questionamento explorado por Ryan Holiday aqui.',
    url: 'https://amzn.to/3tFtLxH',
    image: 'https://m.media-amazon.com/images/I/61wr4eRbOUL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Antifrágil: Coisas que se beneficiam com o caos',
    description:
      'O caos é a regra no mundo, as dificuldades são uma escada. Por que você está assustado com o que é natural?',
    url: 'https://amzn.to/3MaTioZ',
    image: 'https://m.media-amazon.com/images/I/71VU8IrbChL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Sapiens: Uma breve história da humanidade',
    description:
      '"Starter pack" da vida na Terra - uma viagem na história e evolução da humanidade. O trunfo de Yuval Harari é também seu equívoco. Ao afirmar que saímos da barbárie para civilização acaba por binariamente ignorar a sabedoria presente na cosmovisão dos povos originários - que como lembra Krenak, vivem em harmonia com o Planeta desde sempre.',
    url: 'https://amzn.to/405U0JB',
    image: 'https://m.media-amazon.com/images/I/81BTkpMrLYL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'O mundo assombrado pelos demônios',
    description:
      'Falsas crenças existem há séculos. Carl Sagan elegantemente divulga a ciência como a melhor arma para combater negacionistas e charlatões - em todas as esferas, políticas e religiosas - e sermos seres críticos.',
    url: 'https://amzn.to/45FOdeY',
    image: 'https://m.media-amazon.com/images/I/9165ewWUEPL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Ideias para adiar o fim do mundo',
    description:
      'Ailton Krenak nos fala, com uma beleza e sinceridade ímpar, que não somos um sistema diferente da Natureza - nós somos a Natureza. Podemos nos reconciliar com a Terra? Os povos originários têm muito a nos ensinar.',
    url: 'https://amzn.to/3QovUqh',
    image: 'https://m.media-amazon.com/images/I/71BnFkpryFL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Se quiser mudar o mundo: Um guia político para quem se importa',
    description:
      'Um amigo me presenteou, e eu indico. Uma introdução a teoria do materialismo histórico dialético, que nos ajuda a compreender o sistema em que vivemos. As mudanças que queremos ver, começam por nós.',
    url: 'https://amzn.to/3rR2qbn',
    image: 'https://m.media-amazon.com/images/I/717zRJ20C2L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Amor líquido: Sobre a fragilidade dos laços humanos',
    description:
      'Bauman não dava like, ele vivia. Na internet, na pós-modernidade, o amor e as relações humanas estão cada vez mais frágeis e superficiais - mas podemos nos fortalecer.',
    url: 'https://amzn.to/3Ft6e5L',
    image: 'https://m.media-amazon.com/images/I/61H-WiwbS5L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Ensaio sobre a cegueira',
    description:
      'José Saramago nos mostra por uma ficção avassaladora e premiada, como a humanidade é cega para o sofrimento do outro - e como podemos ser melhores.',
    url: 'https://amzn.to/48YQQLZ',
    image: 'https://m.media-amazon.com/images/I/71Hr1-by3UL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'O Capital no Século XXI',
    description:
      'Marx é seu filho? Brincadeiras a parte, Thomas Piketty desseca a abissal  desigualdade social no mundo. Imprescindível para entender a relação entre capital, riqueza e renda no sistema capitalista e como a economia não é uma ciência exata, sendo melhor compreendida como economia política.',
    url: 'https://amzn.to/45FQ9Eg',
    image: 'https://m.media-amazon.com/images/I/717SN1VmpSS._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'A Arte da Guerra',
    description:
      'Clássico da estratégia militar - Sun Tzu tem ensinamentos que podem ser aplicados em qualquer área da nossa vida.',
    url: 'https://amzn.to/3Fmkptn',
    image: 'https://m.media-amazon.com/images/I/71ykI7h--qL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Uma breve história do tempo',
    description:
      'Ele nos governa. Nem variável, nem constante, o tempo é uma dimensão cujo fluxo pode ser influenciado pela velocidade e pela gravidade. Conceitos complexos de física e astronomia de forma simples - para sempre Stephen Hawking!',
    url: 'https://amzn.to/3Q2FCxb',
    image: 'https://m.media-amazon.com/images/I/61AaXcdHXKS._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Box Grandes Mestres do Estoicismo',
    description:
      'Estoicismo é uma filosofia de vida (antes de Cristo) que ensina a ser mais resiliente e feliz - hey Epicteto não te bate com a realidade, domina ela! "Não é o que acontece com você, mas como você reage a isso que importa".',
    url: 'https://amzn.to/45JIIMq',
    image: 'https://m.media-amazon.com/images/I/51C7ww6AYCL._SY522_.jpg',
    category: 'Livros',
  },
]

export default function PageStore() {
  const [category, setCategory] = useState('Todos')
  const filteredProducts =
    category === 'Todos'
      ? productsBrazil
      : productsBrazil.filter((product) => product.category === category)

  const productsRef = useRef<HTMLDivElement>(null)
  const handleClick = (category: string) => {
    setCategory(category)
    if (productsRef?.current) {
      productsRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PageLayout
      title="Produtos Recomendados — Lucas Menezes"
      description="Curadoria com produtos recomendados e favoritos na Amazon.">
      <section>
        <div className="container page">
          <figure className={Style.icon}>
            <IconHeart />
          </figure>
          <h1>Produtos Recomendados</h1>

          <p>
            Sempre me perguntam: "onde você comprou isso?"... Então criei essa listagem com os meus
            produtos recomendados e favoritos. Todos os produtos estão na Amazon. No final da página
            tem desconto, aproveite!
          </p>

          <div className={Style.buttons}>
            <button
              onClick={() => handleClick('Todos')}
              className={category === 'Todos' ? Style.buttonActive : undefined}>
              Tudo
            </button>
            <button
              onClick={() => handleClick('Dispositivos')}
              className={category === 'Dispositivos' ? Style.buttonActive : undefined}>
              Dispositivos
            </button>
            <button
              onClick={() => handleClick('Acessórios')}
              className={category === 'Acessórios' ? Style.buttonActive : undefined}>
              Acessórios
            </button>
            <button
              onClick={() => handleClick('Livros')}
              className={category === 'Livros' ? Style.buttonActive : undefined}>
              Livros
            </button>
          </div>
        </div>

        <div className={Style.container} ref={productsRef}>
          <ul>
            {filteredProducts.map((product, index) => (
              <li key={index}>
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h2>{product.title}</h2>
                    <span>{product.description}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <DiscountBanner
          title="Ganhe R$ 5,00 de Cashback"
          subtitle="Use minha indicação Méliuz para ganhar R$ 5,00 na próxima compra."
          image={<IconHeart />}
          link="https://www.meliuz.com.br/i/ref_lucasmauess?ref_source=2"
        />
      </section>
    </PageLayout>
  )
}
