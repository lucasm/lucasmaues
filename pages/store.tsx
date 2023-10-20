import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import Style from '../styles/Store.module.css'

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
    description: 'Cancelamento de ruído e audio espacial surreal',
    url: 'https://amzn.to/3Dw6uA0',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Xiaomi Note 12S 256GB 8GB',
    description: 'Smartphone bom, bonito e barato - a China vai dominar o mundo',
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
    description: 'O melhor mouse já criado pelo ser humano',
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
    title: 'Suporte de Notebook Ajustável 6 Ângulos',
    description: 'Segura essa marimba',
    url: 'https://amzn.to/401PVGi',
    image: 'https://m.media-amazon.com/images/I/61ZqTo-kwpL._AC_SX679_.jpg',
    category: 'Eletrônicos',
  },
  {
    title: 'Adaptador USB C multiportas  Hub Baseus',
    description: 'Essencial para USB C fans',
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
    description: 'Marca confiável pra monitores com suporte digno',
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
    title: 'Entendendo Algoritmos: Guia Ilustrado Para Programadores',
    description: 'Aprenda Algoritmos e Estruturas de dados de forma objetiva ',
    url: 'https://amzn.to/400hrUR',
    image: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Estruturas de Dados e Algoritmos com JavaScript',
    description: 'Livro da @Loaine com exemplos em JavaScript com sintaxe atual do ECMAScript',
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
    title: 'Arquitetura limpa: o guia do artesão para estrutura e design de software',
    description: 'Clássico da arquitetura de software com exemplos em Java',
    url: 'https://amzn.to/493NuXW',
    image: 'https://m.media-amazon.com/images/I/815d9tE7jSL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Thinking in Systems: A Primer',
    description: 'Livro Bestseller sobre como sistemas funcionam',
    url: 'https://amzn.to/3M4mSwk',
    image: 'https://m.media-amazon.com/images/I/51ybHl0bT6L._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    description: 'Livro essencial para qualquer profissional de software',
    url: 'https://amzn.to/45DF9Y4',
    image: 'https://m.media-amazon.com/images/I/71f743sOPoL._SY522_.jpg',
    category: 'Livros',
  },
  {
    title: 'Design thinking: uma metodologia poderosa para decretar o fim das velhas ideias',
    description: 'Livro sobre design thinking com exemplos práticos',
    url: 'https://amzn.to/3FpeN1l',
    image: 'https://m.media-amazon.com/images/I/61frFqn8n2L._SY522_.jpg',
    category: 'Livros',
  },
]

export default function PageStore() {
  const [category, setCategory] = useState('Todos')
  const filteredProducts =
    category === 'Todos'
      ? productsBrazil
      : productsBrazil.filter((product) => product.category === category)

  return (
    <PageLayout
      title="Produtos Recomendados — Lucas Menezes"
      description="Curadoria com meus produtos recomendados e favoritos na Amazon.">
      <section>
        <div className="container home">
          <figure className={Style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="m17.54,1.66l3.61,7.31c.25.51.74.86,1.3.94l8.07,1.17c1.41.21,1.98,1.94.96,2.94l-5.84,5.69c-.41.4-.59.97-.5,1.53l1.38,8.04c.24,1.41-1.24,2.48-2.5,1.82l-7.22-3.79c-.5-.26-1.1-.26-1.6,0l-7.22,3.79c-1.26.66-2.74-.41-2.5-1.82l1.38-8.04c.1-.56-.09-1.13-.5-1.53L.52,14.03c-1.02-1-.46-2.73.96-2.94l8.07-1.17c.56-.08,1.05-.43,1.3-.94l3.61-7.31c.63-1.28,2.46-1.28,3.09,0Z" />
            </svg>
          </figure>
          <h1>Produtos Recomendados na Amazon™</h1>

          <p>
            Muitas pessoas me perguntam sobre o meu setup, acessórios e leituras. Criei essa
            curadoria com meus produtos recomendados e favoritos.
          </p>

          <div className={Style.buttons}>
            <button
              onClick={() => setCategory('Todos')}
              className={category === 'Todos' && Style.buttonActive}>
              Todos
            </button>
            <button
              onClick={() => setCategory('Livros')}
              className={category === 'Livros' && Style.buttonActive}>
              Livros
            </button>
            <button
              onClick={() => setCategory('Eletrônicos')}
              className={category === 'Eletrônicos' && Style.buttonActive}>
              Eletrônicos
            </button>
          </div>
        </div>

        <div className={Style.container}>
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
      </section>
    </PageLayout>
  )
}
