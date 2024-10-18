import Button from '../components/Button'
import PageLayout from '../components/PageLayout'
import SvgAnimateMentorship from '../components/SvgAnimateMentorship'
import { ROUTES } from '../routes/routes'

export default function PageMentorship() {
  return (
    <PageLayout title={ROUTES.MENTORSHIP.title} description="Mentorship page.">
      <section>
        <div className="page">
          <div className="container ">
            <h1>{ROUTES.MENTORSHIP.title}</h1>

            <p className="description">
              Desde 2017, atuo com Frontend, Web e Engenharia de Software. Sou
              procurado por pessoas que buscam orientação ou ajuda para evoluir
              na carreira de TI e estudos, visando alcançar seus objetivos.
            </p>
          </div>
        </div>
      </section>

      <section className="background-y color-b-fixed">
        <div className="container">
          <article>
            <SvgAnimateMentorship />

            <h1>
              "Primeiro, resolva o problema. Então, escreva o código." — John
              Johnson
            </h1>

            <h3>Como funciona?</h3>
            <p>
              A mentoria é realizada por videochamada. Durante a primeira sessão
              vamos conversar e entender o seu momento atual na TI. Quais as
              suas necessidades e desafios? Com base nisso, vamos definir metas
              e traçar um plano de ação de curto ou médio prazo para você
              alcançar os seus objetivos.
            </p>

            <h3>Quem pode participar?</h3>

            <p>
              Desenvolvedores, estudantes e profissionais de TI que buscam
              orientação e suporte para evoluir na carreira e estudos.
            </p>

            {/* <h3>O que você precisa?</h3>
            <p>
              - Estar disposto a aprender e evoluir
              <br />
              - Ser verdadeiro
              <br />- Ter comprometimento para executar o plano de ação
            </p> */}

            <h3>Benefícios:</h3>

            <p>
              - Orientação personalizada
              <br />
              - Plano de ação
              <br />
              - Aprendizado prático (hard skills)
              <br />
              - Desenvolvimento profissional (soft skills)
              <br />
              - Avaliação de resultados
              <br />- Feedback, onde falo o que você PRECISA ouvir para evoluir,
              não o que quer ouvir para agradar o ego
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          {/* <h2 className="subtitle">Contact</h2> */}

          <div className="aboutContainer">
            <div>
              <h3>Agende sua mentoria</h3>
            </div>

            <div>
              <p>
                <strong></strong>
                <br />
                Duração: 45 minutos
                <br />
                Formato: Google Meet + Notion
                <br />
                Valores e pagamento: Patreon
                <br />
                <br />
              </p>

              <Button url="https://patreon.com/lucasm">Agendar</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
