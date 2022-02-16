import PageLayout from '../components/PageLayout';
import Icons from '../components/Icons';
import Cards from '../components/Cards';

export default function Home() {
  return (
      <PageLayout
        title="Lucas Menezes — Software Developer"
        description="Hi, I'm a Software Developer from Brazil creating websites, apps and open source projects.">
    
    <main>

        <section>
            <div className="container home">
                        
                <div>
                    <figure id="profile">
                            <img src="//avatars.githubusercontent.com/lucasm" alt="Lucas Menezes profile photo" />
                    </figure>
                </div>
                            
                <div>
                    <h2>Hi, I'm Lucas Menezes</h2>
                    <p className="description">I'm a Software Developer from Brazil, making websites, apps and open source projects.</p>
                        
                    <Icons/>

                    <a href="#work" className="button button-main">View my projects</a>
                    <a href="https://patreon.com/lucasm" target="_blank" rel="noopener" className="button button-secondary">Donate me</a>
                </div>

            </div>
        </section>

        <section id="work" className="gray">

            <div className="container">

            <div className="left">
                <h3 className="subtitle">Selected work</h3>
            </div>
            
            <Cards/>

            </div>

        </section>

        <section id="about" >
                  
            <div className="container left">

                <h3 className="subtitle">About me</h3>
                
                <div className="special">

                    <h1><span>Building</span> the next Web experiences</h1>

                    <div className="col">
                        <div className="col-left">
                            <p>Working as consultant, I've been helping businesses and organizations to solve their problems and establish an online presence with websites and applications.</p>
                            
                            <p>I develop reactive front-end with focus on user experience (responsive design, accessibility, progressive enhancement and performance) and adjacent back-end integrations with APIs and databases.</p>
                        </div>
                        <div className="col-right">
                                  
                            <p>My main development stack is JavaScript, TypeScript, Node.js, React, Next.js, Vue.js, PHP, WordPress and currently learning Ethereum blockchain and Swift.</p>
                            
                            <p>I believe on digital products that can empower people do their best and that's why I'm creating <a href="https://patreon.com/lucasm">open source projects</a> backed by the community.</p>
                                  
                            <p>Want to work together? Contact me to check my availability.</p>
                            
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section id="contact" className="bg-y">
            <div className="container left">

                <h3 className="subtitle">Get in touch</h3>

                <div className="special special-contact">
                    
                    <h2><a href="mailto:hello@lucasm.dev?subject=Let's%20work%20together">hello@lucasm.dev</a></h2>

                    

                </div>

            </div>
        </section>

    </main>

      </PageLayout>
  )
}
