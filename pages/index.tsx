import PageLayout from '../components/PageLayout'
import Icons from '../components/Icons'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <PageLayout
        title="Lucas Menezes — Frontend Software Engineer"
        description="Hi, I'm a Frontend Software Engineer from Brazil developing web apps, sites and open source projects."
    >
    
        <section>
            <div className="container home">

                <h1>
                    I make web apps, sites and open source
                </h1>

                {/* <figure id="profile">
                    
                        <img src="https://pbs.twimg.com/profile_images/1517213451621486592/hOGCMw8m_400x400.jpg" alt="Lucas Menezes profile photo" />
                </figure> */}
                    {/* //avatars.githubusercontent.com/lucasm */}

                <p className="description">
                    Hi, I'm Lucas Menezes, a Frontend Software Engineer currently based in Brazil.
                </p>

                <div>
                    <a href="#work" className="button button-main">
                        View portfolio
                    </a>
                    <a href="https://patreon.com/lucasm" target="_blank" rel="noopener" className="button button-secondary">
                        Donate me
                    </a>
                </div>
            </div>

        </section>


        <section id="work">
            <div className="container">

                <h3 className="subtitle">
                    Selected work
                </h3>
                
                <Cards/>

            </div>
        </section>


        <section id="about">
            <div className="container">

                <h3 className="subtitle">
                    About me
                </h3>
                
                <div className="specialContainer">

                    <h2>I code web experiences</h2>

                    <p>Working as consultant, I've been helping businesses and organizations launch digital products, like web applications, sites and e-commerces, that's establish an refined online presence and solve their problems.</p>

                    <p>I develop reactive front-end user interfaces with strong focus on user experience (responsive design, accessibility, performance and progressive enhancement) and adjacent back-end with APIs integrations and databases.</p>
                        
                   <p>I'm also write <a href="https://dev.to/lucasm">articles about programming</a> for the developers community and create <a href="https://patreon.com/lucasm">open source projects</a> to empower people.</p>

                </div>

            </div>
        </section>


        <section id="contact" className="gradient-x">
            <div className="container">

                <div className='contactContainer'>

                    <div>

                        <h3 className="subtitle">
                            Say hi
                        </h3>

                        <p>If you want to discuss your project or work together, email to <span><a href="mailto:hello@lucasm.dev?subject=Hello">hello@lucasm.dev</a></span></p>

                    </div>

                    <div>

                        <h3 className="subtitle">
                            Follow me
                        </h3>

                        <Icons/>

                    </div>

                </div>

            </div>
        </section>

    </PageLayout>
  )
}