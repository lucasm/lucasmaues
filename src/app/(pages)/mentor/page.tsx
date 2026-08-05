import Button from '@/components/Button'
import PageWrapper from '@/components/PageWrapper'
import PatreonCheck from '@/components/PatreonCheck'
import SvgAnimateMentorship from '@/components/SvgAnimateMentorship'
import { CONTACTS } from '@/data/contacts'
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
              Com mais de {new Date().getFullYear() - 2018} anos de experiência,
              hoje trabalho como Líder Técnico de Desenvolvedores guiando a
              Engenharia de Software e soluções com IA no setor Bancário —
              Também sou mentor de profissionais de TI que buscam se destacar no
              mercado. A mentoria é um serviço muito procurado por estudantes e
              profissionais de TI que buscam orientação para crescimento na
              carreira, mas não sabem por onde começar.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <SvgAnimateMentorship />

            <h3>O que é a mentoria?</h3>

            <p>
              A mentoria é um espaço seguro de crescimento e aprendizado. Você
              sente que se esforça mas não cresce na carreira? Eu te ajudo a se
              destacar no mercado de trabalho de tecnologia, destacando as suas
              qualidades.
            </p>

            <h3>Metodologia:</h3>

            <code>
              1. Primeiro, desenhe a solução do problema. <br />
              2. Então automatize o trabalho manual. <br />
              3. E com IA escreva o código.
              <br />
              <br />— Lucas Maués (inspirado por John Johnson)
            </code>

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
              - Desenvolvimento comportamental de soft skills
              <br />
              - Aprendizado técnico de hard skills
              <br />
              - Feedback prático para o seu crescimento
              <br />
              - Avaliação dos resultados alcançados
              <br />- Independência (fase final da mentoria)
            </p>

            <h3>Agende a sua mentoria:</h3>

            <p>
              <strong></strong>
              <br />
              Duração: 45m
              <br />
              Formato: Videocall ao vivo + Plano de ação personalizado
              <br />
              Pagamento: Patreon
              <br />
              <br />
            </p>

            <Button variant="black" url={CONTACTS?.patreon?.url} isExternal>
              <>
                Agendar no {CONTACTS?.patreon?.icon}
                {CONTACTS?.patreon?.title}{' '}
              </>
            </Button>

            <PatreonCheck />
          </article>
        </div>
      </section>
    </PageWrapper>
  )
}
