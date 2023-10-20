import { useRef, useState } from 'react'
import PageLayout from '../components/PageLayout'
import Style from '../styles/Store.module.css'
import DiscountBanner from '../components/DiscountBanner'
import { IconHeart, IconStar } from '../components/Svgs'

const productsBrazil = [
  {
    title: 'JBL Tune 110 Fone de Ouvido',
    description: 'Áudio de qualidade para reuniões',
    url: 'https://amzn.to/46Dtp9h',
    image: 'https://m.media-amazon.com/images/I/51bYMYoBKDL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Apple AirPods Pro 2',
    description: 'Excepcional cancelamento de ruído e áudio espacial',
    url: 'https://amzn.to/3Dw6uA0',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Xiaomi Note 12S 256GB 8GB',
    description: 'Smartphone bom, bonito e barato - China você já pode dominar o mundo',
    url: 'https://amzn.to/401AaPG',
    image: 'https://m.media-amazon.com/images/I/61LvXyda+6L._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Echo Dot 5 Alexa',
    description: 'Ei Alexa, tome conta da minha vida',
    url: 'https://amzn.to/45jAJFL',
    image: 'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'JBL Go 3 Bluetooth',
    description: 'Um presente pra quem você gosta',
    url: 'https://amzn.to/43CrM9C',
    image: 'https://m.media-amazon.com/images/I/61iD9jlBlqL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Fire TV Stick Full HD',
    description: 'Controle remoto pra TV, streamings e tem Alexa',
    url: 'https://amzn.to/44YKNnK',
    image: 'https://m.media-amazon.com/images/I/41IVtjpgH7L._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Teclado Logitech MX Keys Mini',
    description: 'Compacto, iluminado, Bluetooth, USB, até 3 dispositivos e bateria recarregável',
    url: 'https://amzn.to/3OwLrDM',
    image: 'https://m.media-amazon.com/images/I/71JFKFPi1VL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Logitech Lift Vertical Mouse Ergonômico Bluetooth',
    description: 'O irmão mais barato * e menor * do MX Vertical',
    url: 'https://amzn.to/452yAP6',
    image: 'https://m.media-amazon.com/images/I/61EWLRLgYQL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Logitech MX Vertical Mouse Ergonômico Bluetooth',
    description: 'O melhor mouse já criado pelo homem',
    url: 'https://amzn.to/3Q2pxHV',
    image: 'https://m.media-amazon.com/images/I/71P5QJEcfRL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'JBL Flip 6 Caixa de Som Bluetooth',
    description: 'Amiga de todas as horas - até na piscina',
    url: 'https://amzn.to/45IVz1o',
    image: 'https://m.media-amazon.com/images/I/51RX5vKoClL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Apple iPhone 13 128GB',
    description: 'iPhone que vale a pena',
    url: 'https://amzn.to/3rKdF4O',
    image: 'https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Kindle 11ª',
    description: 'Leitor de livros digitais definitivo',
    url: 'https://amzn.to/3QdXiaV',
    image: 'https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Apple MacBook Air M2 8GB 256GB',
    description: 'Mac leve com chip de altíssimo desempenho',
    url: 'https://amzn.to/3rMaLg5',
    image: 'https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_ML2_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Mini Projetor Portátil 5G WiFi 6 Bluetooth 5.0 4K Full HD',
    description: 'Projetor com preço imbatível',
    url: 'https://amzn.to/3F4zAHn',
    image: 'https://m.media-amazon.com/images/I/5133wKaOqSL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Suporte de Notebook 6 Ângulos',
    description: 'Segura essa marimba',
    url: 'https://amzn.to/401PVGi',
    image: 'https://m.media-amazon.com/images/I/61ZqTo-kwpL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Adaptador Baseus USB C Hub multiportas',
    description: 'Essencial para amantes do USB C',
    url: 'https://amzn.to/3tOi33C',
    image: 'https://m.media-amazon.com/images/I/61f6gHVPN6L._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Filtro de Linha Clamper 5 Tomadas',
    description: 'Nã deixa seus equipamentos queimarem',
    url: 'https://amzn.to/3Mb5Mg9',
    image: 'https://m.media-amazon.com/images/I/51C9M7zl-5L._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Apple Watch Series 7 GPS + Cellular',
    description: 'A melhor smart pulseira esportiva',
    url: 'https://amzn.to/45yB73i',
    image: 'https://m.media-amazon.com/images/I/51IxCp-f3tL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Monitores Dell Full HD, UHD e 4K',
    description: 'Marca consagrada de monitores com suporte digno',
    url: 'https://amzn.to/3tGwLda',
    image: 'https://m.media-amazon.com/images/I/81qinbve0BL.__AC_SX300_SY300_QL70_ML2_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Apple iPad 10,9 64GB',
    description: 'Melhor tablet do mundo',
    url: 'https://amzn.to/45F8t0g',
    image: 'https://m.media-amazon.com/images/I/41pCFSDVeBL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },

  {
    title: 'Entendendo Algoritmos: Guia Ilustrado para Programadores',
    description:
      'Aprenda Algoritmos e Estruturas de dados de forma objetiva com exemplos em Python',
    url: 'https://amzn.to/400hrUR',
    image: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Estruturas de Dados e Algoritmos com JavaScript',
    description: 'Escrito pela @Loaine com exemplos em JavaScript com sintaxe atual ECMAScript',
    url: 'https://amzn.to/3Fni1T2',
    image: 'https://m.media-amazon.com/images/I/71KGa1y8eaL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'JavaScript: O Guia Definitivo',
    description: 'Referência da O Reilly para JavaScript',
    url: 'https://amzn.to/3PWgEj6',
    image: 'https://m.media-amazon.com/images/I/91z1xY4ppaL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions',
    description: 'Vai trabalhar na gringa meu fi, arrebenta na entrevista, crackeia tuuuudo',
    url: 'https://amzn.to/46EDYZL',
    image: 'https://m.media-amazon.com/images/I/61mIq2iJUXL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Programador Pragmático: De Aprendiz a Mestre',
    description:
      'Clássico para todo programador, com dicas e principais armadilhas do desenvolvimento de software',
    url: 'https://amzn.to/3MbyOw9',
    image: 'https://m.media-amazon.com/images/I/61hewOW+8zL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Arquitetura limpa: o guia do artesão para estrutura e design de software',
    description: 'Clássico da arquitetura de software com exemplos em Java',
    url: 'https://amzn.to/493NuXW',
    image: 'https://m.media-amazon.com/images/I/815d9tE7jSL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Thinking in Systems: A Primer',
    description: 'Bestseller sobre como os sistemas funcionam',
    url: 'https://amzn.to/3M4mSwk',
    image: 'https://m.media-amazon.com/images/I/51ybHl0bT6L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Código limpo: habilidades práticas do Agile software',
    description:
      'Clássico e polêmico: "Mesmo um código ruim pode funcionar, mas se ele não for bem pensado, pode acabar com uma empresa"',
    url: 'https://amzn.to/3QoWnEh',
    image: 'https://m.media-amazon.com/images/I/71dH97FwGbL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Design thinking: uma metodologia poderosa para decretar o fim das velhas ideias',
    description: 'Design thinking com exemplos práticos',
    url: 'https://amzn.to/3FpeN1l',
    image: 'https://m.media-amazon.com/images/I/61frFqn8n2L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Domain-driven design: atacando as complexidades no coração do software',
    description: 'Clássico sobre DDD',
    url: 'https://amzn.to/3Qs3jk9',
    image: 'https://m.media-amazon.com/images/I/61aIS4n2jZL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Refatoração: Aperfeiçoando o Design de Códigos Existentes',
    description: 'Clássico sobre refatoração',
    url: 'https://amzn.to/3Q2xs81',
    image: 'https://m.media-amazon.com/images/I/81sTm5M7wjL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'O ego é seu inimigo: Como dominar seu pior adversário',
    description: 'Pro Dev deixar de ser cuzão e vencer ajudando as pessoas',
    url: 'https://amzn.to/3tFtLxH',
    image: 'https://m.media-amazon.com/images/I/61wr4eRbOUL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Super Thinking: The Big Book of Mental Models',
    description: 'Modelos mentais para tomar decisões melhores',
    url: 'https://amzn.to/403ZPau',
    image: 'https://m.media-amazon.com/images/I/815yQmQZFXL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Antifrágil: Coisas que se beneficiam com o caos',
    description: 'Por que você está assustado? O caos é a regra no mundo',
    url: 'https://amzn.to/3Q7NsG5',
    image: 'https://m.media-amazon.com/images/I/71VU8IrbChL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Sapiens - Uma Breve História da Humanidade',
    description:
      'Starter pack da vida na Terra - mesmo Yuval Harari ignorando a cosmovisão dos povos tradicionais',
    url: 'https://amzn.to/405U0JB',
    image: 'https://m.media-amazon.com/images/I/81BTkpMrLYL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'O mundo assombrado pelos demônios',
    description:
      'Falsas crenças existem há séculos - Carl Sagan mostra como a ciência é a melhor arma para combate-las e nos tornar mais críticos',
    url: 'https://amzn.to/45FOdeY',
    image: 'https://m.media-amazon.com/images/I/9165ewWUEPL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Ideias para adiar o fim do mundo',
    description:
      'Autor indígena Ailton Krenak nos fala que não somos diferentes da Natureza, nós somos a Natureza',
    url: 'https://amzn.to/3QovUqh',
    image: 'https://m.media-amazon.com/images/I/71BnFkpryFL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Se quiser mudar o mundo: Um guia político para quem se importa',
    description: 'Um grande amigo me presenteou, e eu indico para vocês - a mudança  começa em nós',
    url: 'https://amzn.to/3rR2qbn',
    image: 'https://m.media-amazon.com/images/I/717zRJ20C2L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Amor líquido: Sobre a fragilidade dos laços humanos',
    description:
      'Bauman nos mostra como o amor e as relações humanas estão cada vez mais frágeis e superficiais na pós modernidade - mas você pode fortalecer as suas',
    url: 'https://amzn.to/3Ft6e5L',
    image: 'https://m.media-amazon.com/images/I/61H-WiwbS5L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Ensaio sobre a cegueira',
    description:
      'José Saramago nos mostra por uma ficção, como a humanidade é cega para o sofrimento do outro - e como podemos ser melhores',
    url: 'https://amzn.to/48YQQLZ',
    image: 'https://m.media-amazon.com/images/I/71Hr1-by3UL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'O Capital no Século XXI',
    description:
      'Pensou que ia colocar Marx aqui? Errooou! O livro do Thomas Piketty é imprescindível para compreender a relação entre capital e renda no sistema capitalista e como a economia não é uma ciência exata, sendo melhor compreendida como economia política - que gera desigualdade social',
    url: 'https://amzn.to/45FQ9Eg',
    image: 'https://m.media-amazon.com/images/I/717SN1VmpSS._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'A Arte da Guerra',
    description:
      'Clássico mundial da estratégia militar - os ensinamentos de Sun Tzu podem ser aplicados em qualquer área da vida',
    url: 'https://amzn.to/3Fmkptn',
    image: 'https://m.media-amazon.com/images/I/71ykI7h--qL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Uma breve história do tempo',
    description:
      'Stephen Hawking eu te amo - o tempo é a variável que nos governa, conceitos complexos de  física e astronomia de forma simples',
    url: 'https://amzn.to/3Q2FCxb',
    image: 'https://m.media-amazon.com/images/I/61AaXcdHXKS._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Box Grandes Mestres do Estoicismo',
    description:
      'Estoicismo é uma filosofia de vida (mais antiga que Jesus) que nos ensina a sermos mais resilientes e viver bem -  ei Epicteto não te bate com a realidade, domina ela! "Não é o que acontece com você, mas como você reage a isso que importa"',
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
      description="Curadoria com meus produtos recomendados e favoritos na Amazon.">
      <section>
        <div className="container home">
          <figure className={Style.icon}>
            <IconStar />
          </figure>
          <h1>Produtos Recomendados na Amazon™</h1>

          <p>
            Muitas pessoas me perguntam sobre o meu setup, acessórios e leituras. Nessa curadoria
            estão os meus produtos recomendados e favoritos.
          </p>

          <div className={Style.buttons}>
            <button
              onClick={() => handleClick('Todos')}
              className={category === 'Todos' && Style.buttonActive}>
              Todos
            </button>
            <button
              onClick={() => handleClick('Livros')}
              className={category === 'Livros' && Style.buttonActive}>
              Livros
            </button>
            <button
              onClick={() => handleClick('Eletrônicos')}
              className={category === 'Eletrônicos' && Style.buttonActive}>
              Eletrônicos
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
          title="Ganhe R$: 5,00 de Cashback"
          subtitle="Minha indicação na Méliuz garante R$: 5,00 de Cashback na sua próxima compra online"
          image={<IconHeart />}
          link="https://www.meliuz.com.br/i/ref_lucasmauess?ref_source=2"
        />
      </section>
    </PageLayout>
  )
}
