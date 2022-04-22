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
                    I create web apps, sites and open source
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 783.74 695.32"><path d="M0,347.17,345.6,695.32l70.6-68.16L184.86,395.87H783.74V299.46H183.18l233-231.3L345.6,0,0,346.14l.53.52Z"/></svg>
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

                    <h2>Scaling web experiences</h2>

                    <p>As consultant I've been helping businesses and organizations launch digital products, like web applications, sites and e-commerces, that's establish an refined online presence.</p>

                    <p>I develop reactive front-end user interfaces with strong focus on user experience (performance, responsive design, accessibility, security and progressive enhancement) and adjacent back-end with APIs integrations and databases. Software architecture patterns are a point that I value.</p>
                        
                   <p>I believe my work can empower others, so I write <a href="https://dev.to/lucasm" target="_blank" rel="noopener">programming articles</a> and maintain <a href="https://patreon.com/lucasm" target="_blank" rel="noopener">open source projects</a> for/by the community.</p>

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