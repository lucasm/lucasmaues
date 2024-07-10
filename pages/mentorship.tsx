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
              Desde 2017 na TI, tenho resolvido muitos problemas do mundo real. Essa experiência faz
              com que as pessoas me procurem pedindo ajuda. A mentoria é um espaço onde ofereço
              orientação profissional. Como mentor, te ajudo a enxergar e atingir teus objetivos na
              TI.
            </p>
          </div>
        </div>
      </section>

      <section className="background-y color-b-fixed">
        <div className="container">
          <article>
            <SvgAnimateMentorship />

            <h1>"Primeiro, resolva o problema, então, escreva o código." — John Johnson</h1>

            <h3>Como funciona?</h3>
            <p>
              A mentoria é realizada por videochamada. Durante a primeira sessão vamos conversar e
              entender o seu momento atual na TI. Quais as suas necessidades e desafios? Com base
              nisso, vamos definir metas e traçar um plano de ação de curto/médio prazo para você
              alcançar os seus objetivos, até não precisar mais de mentoria.
            </p>

            <h3>Quem pode participar?</h3>

            <p>
              Desenvolvedores, estudantes e profissionais de TI que buscam orientação e suporte para
              evoluir na carreira, estudos ou projetos.
            </p>

            {/* <h3>O que você precisa?</h3>
            <p>
              - Estar disposto a aprender e evoluir
              <br />
              - Ser verdadeiro
              <br />- Ter comprometimento para executar o plano de ação
            </p> */}

            <h3>Quais os benefícios?</h3>

            <p>
              - Orientação personalizada para os seus objetivos
              <br />
              - Aprendizado prático (hard skills)
              <br />
              - Desenvolvimento profissional (soft skills)
              <br />
              - Plano de ação para alcançar as metas
              <br />
              - Coleta de resultados
              <br />- Feedback, onde não falo o que você quer ouvir para agradar seu ego, mas o que
              você precisa ouvir para evoluir
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
                Formato: Conversa por videochamada
                <br />
                Pagamento: Patreon
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
