import Button from '../components/Button'
import PageLayout from '../components/PageLayout'
import PatreonCheck from '../components/PatreonCheck'
import SvgAnimateMentorship from '../components/SvgAnimateMentorship'
import { IconArrowExternal } from '../components/Svgs'
import { ROUTES } from '../routes/routes'

export default function PageMentorship() {
  const title = ROUTES.MENTORSHIP.title
  const image = ROUTES.MENTORSHIP.image
  const description = ROUTES.MENTORSHIP.description

  return (
    <PageLayout title={title} description={description} image={image}>
      <section>
        <div className="page">
          <div className="container ">
            <h1>{title}</h1>

            <p className="description">
              Desde 2017, atuo com Engenharia de Software e Frontend e sou
              procurado por profissionais e estudantes de TI que buscam
              orientação para avançar na carreira.
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

            <h3>O que é a mentoria?</h3>

            <p>
              A mentoria é um espaço de crescimento e aprendizado. Você não
              precisa sofrer para evoluir, mas precisa se esforçar. Eu te ensino
              o meu método para você se destacar no mercado de TI.
            </p>

            <h3>A filosofia 1x</h3>

            <p>
              Quando você compra cursos e não faz, você está tentando ser 10x.
              Quando você tenta fazer tudo ao mesmo tempo, você está tentando
              ser 10x. Mas na verdade precisa ser 1x. Essa é a minha filosofia.
              Eu chamo de "método 1x" o conjunto de práticas e técnicas que eu
              desenvolvi ao longo dos anos para me tornar um profissional mais
              produtivo, e com qualidade de vida. Lembre-se: não é sobre
              fórmulas mágicas. 1x significa fazer uma vez e fazer bem feito. É
              sobre resultados baseado em ações assertivas. É sobre fazer o que
              precisa ser feito. Com calma, foco, disciplina e consistência.
            </p>

            <h3>Como funciona?</h3>
            <p>
              A mentoria é realizada por videochamada. Durante a primeira sessão
              vamos conversar e entender o seu momento atual na TI. Quais as
              suas necessidades e desafios? Com base nisso, vamos definir metas
              e traçar um plano de ação de curto ou médio prazo para você
              alcançar os seus objetivos. E vou te passar feedbacks fundamentais
              para o seu crescimento.
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
              - Orientação
              <br />
              - Plano de ação personalizado para alcançar os seus objetivos
              <br />
              - Desenvolvimento comportamental (soft skills)
              <br />
              - Aprendizado prático (hard skills)
              <br />
              - Feedback, onde falo o que você PRECISA ouvir para evoluir, não o
              que quer ouvir (sem egos aqui)
              <br />
              - Avaliação dos resultados alcançados
              <br />- Independência e final da mentoria
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
                Formato: Videochamada + Anotações
                <br />
                Pagamento: Patreon
                <br />
                <br />
              </p>

              <Button url="https://patreon.com/lucasm">
                <>
                  Agendar
                  <IconArrowExternal />
                </>
              </Button>

              <PatreonCheck />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
