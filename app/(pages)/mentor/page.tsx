import Button from '@/components/Button'
import PageWrapper from '@/components/PageWrapper'
import PatreonCheck from '@/components/PatreonCheck'
import SvgAnimateMentorship from '@/components/SvgAnimateMentorship'
import { IconArrowExternal } from '@/components/Svgs'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('MENTORSHIP')

export default function PageMentor() {
  const title = ROUTES.MENTORSHIP.title

  return (
    <PageWrapper>
      <section>
        <div className="page">
          <div className="container ">
            <h1>{title}</h1>

            <p className="description">
              Com mais de {new Date().getFullYear() - 2018} anos de experiência
              em Engenharia de Software, Frontend e Liderança Técnica, oriento
              estudantes e profissionais de TI que buscam crescimento na
              carreira e estudos. Meu foco é ajudar você a se destacar no
              mercado de tecnologia, com as suas qualidades.
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

            <h3>O que é?</h3>

            <p>
              A mentoria é um espaço seguro de crescimento e aprendizado. Você
              sente que se esforça mas não evolui? Eu te ajudo a se destacar no
              mercado de TI, com as suas qualidades.
            </p>

            <h3>Metodologia:</h3>

            <p>
              Quando você compra cursos e não faz, ou quando você tenta fazer
              tudo ao mesmo tempo, você está tentando ser 10x. Mas na verdade
              precisa ser 1x. Essa é a minha filosofia. Eu chamo de "método 1x"
              o conjunto de práticas e técnicas que eu desenvolvi ao longo dos
              anos para me tornar um profissional mais produtivo, e com
              qualidade de vida. Lembre-se: não é sobre fórmulas mágicas. 1x
              significa fazer uma vez e fazer bem feito. É sobre resultados
              baseado em ações assertivas. É sobre fazer o que precisa ser
              feito. Com calma, foco, disciplina, consistência e analisando
              dados.
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
              Profissionais de TI, desenvolvedores e estudantes que buscam
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
              - Orientação profissional
              <br />
              - Plano de ação personalizado com foco nos seus objetivos
              <br />
              - Desenvolvimento comportamental (soft skills)
              <br />
              - Aprendizado técnico (hard skills)
              <br />
              - Feedback real, onde falo o que você PRECISA ouvir para evoluir
              como profissional, não o que seu ego quer ouvir
              <br />
              - Avaliação de resultados
              <br />- Independência (essa fase é o fim da mentoria)
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          {/* <h2 className="subtitle">Contact</h2> */}

          <div className="aboutContainer">
            <div>
              <h3>Agende uma sessão de mentoria</h3>
            </div>

            <div>
              <p>
                <strong></strong>
                <br />
                Duração: 45 minutos
                <br />
                Formato: Chamada de vídeo + Plano de ação personalizado
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
    </PageWrapper>
  )
}
