import PageLayout from '../components/PageLayout'

export default function Store() {
  return (
    <PageLayout
      title="Produtos Recomendados — Lucas Menezes"
      description="Hello, I'm a Software Engineer from Brazil, coding to help companies and people grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <figure className="iconStore">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="m17.54,1.66l3.61,7.31c.25.51.74.86,1.3.94l8.07,1.17c1.41.21,1.98,1.94.96,2.94l-5.84,5.69c-.41.4-.59.97-.5,1.53l1.38,8.04c.24,1.41-1.24,2.48-2.5,1.82l-7.22-3.79c-.5-.26-1.1-.26-1.6,0l-7.22,3.79c-1.26.66-2.74-.41-2.5-1.82l1.38-8.04c.1-.56-.09-1.13-.5-1.53L.52,14.03c-1.02-1-.46-2.73.96-2.94l8.07-1.17c.56-.08,1.05-.43,1.3-.94l3.61-7.31c.63-1.28,2.46-1.28,3.09,0Z" />
              </svg>
            </figure>
            <h1>Produtos Recomendados</h1>

            <p>
              Muitas pessoas me perguntam qual meu setup, quais equipamentos utilizo, o que
              recomendo ler. Criei essa curadoria com meus produtos recomendados e favoritos na
              Amazon.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">a</div>
      </section>
    </PageLayout>
  )
}
