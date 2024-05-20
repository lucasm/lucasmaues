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
              A mentoria é um processo de orientação no qual um mentor ajuda um mentorado a atingir
              seus objetivos. Se você precisa de suporte para carreira em TI, estudos ou projetos,
              agende sua mentoria. Ajudo você a evoluir de forma prática e saudável.
            </p>
          </div>
        </div>
      </section>

      <section className="background-y color-b-fixed">
        <div className="container">
          <article>
            <SvgAnimateMentorship />

            <h1>"Primeiro, resolva o problema. Então, escreva o código." — John Johnson</h1>

            <h3>Como funciona?</h3>
            <p>
              A mentoria é realizada por videochamada de forma personalizada. Durante a sessão,
              vamos entender o seu momento atual, conversar sobre as suas necessidades e desafios.
              Com base nisso, vamos definir suas metas e traçar um plano de ação de curto/médio
              prazo com os passos para você alcançar seus objetivos.
            </p>

            <h3>Quem pode participar?</h3>

            <p>
              Desenvolvedores, estudantes, empreendedores e profissionais que buscam orientação e
              suporte para evoluir na carreira de TI.
            </p>

            {/* <h3>O que você precisa?</h3>

              <p>
                - Ser verdadeiro
                <br />
                - Ter comprometimento
                <br />- Estar disposto a aprender e evoluir
              </p> */}

            <h3>Quais são os benefícios?</h3>

            <p>
              - Orientação personalizada
              <br />
              - Aprendizado prático
              <br />
              - Desenvolvimento profissional (hard & soft skills)
              <br />
              - Plano de ação para alcançar suas metas
              <br />
              - Resultados
              <br />- Feedback
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
                Formato: Bate-papo em videochamada
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
