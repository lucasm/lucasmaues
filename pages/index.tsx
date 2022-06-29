import PageLayout from "../components/PageLayout";
import Icons from "../components/Icons";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Frontend Software Engineer"
      description="Frontend Software Engineer from Brazil. Development of Web Apps and Sites. Open Source."
    >
      <section className="gradient-y">
        <div className="container home reverse">

          <div>

            <h1>Hello, I develop Web apps &#38; sites</h1>
            <p className="description">
              I'm Lucas Menezes, a Frontend Software Engineer from Brazil creating digital products and open source.
            </p>

            <Icons />

          </div>

          <div>

            <figure id="profile">
              <img
                src="https://avatars.githubusercontent.com/lucasm"
                alt="Lucas Menezes profile photo"
              />
            </figure>

          </div>
          
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h3 className="subtitle">Selected work</h3>

          <Cards />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h3 className="subtitle">About me</h3>

          <div className="specialContainer">
            <h2>I code reliable Web experiences</h2>

            <p>
              Since 2017 I've been helping businesses and organizations launch digital
              products, like web applications, websites and e-commerces, that's
              establish a refined online presence.
            </p>

            <p>
              I develop reactive, responsive and progressive front-end user
              interfaces (UI) with strong focus on user experience (UX).
              Adjacent back-end with APIs integrations, databases and cloud
              deploy. Web architecture patterns, performance, security
              and accessibility are my focal points.
            </p>

            <p>I'm also create Open Source projects, write a Blog of programming and advocate for the Open Web.</p>

            {/* <a href="#contact" className="button button-main">
              Get in touch
            </a> */}

          </div>
        </div>
      </section>

      <section id="contact" className="gradient-x">
        <div className="container">
          <div className="contactContainer">
            <div>
              <h3 className="subtitle">Get in touch</h3>

              <p>
                Want to work together or discuss your project? Email me at {" "}
                <span>
                  <a href="mailto:hello@lucasm.dev?subject=Hello">
                    hello@lucasm.dev
                  </a>
                </span>
              </p>
            </div>

            <div>
              <h3 className="subtitle">Community</h3>

              <a
              href="https://github.com/sponsors/lucasm"
              className="button button-secondary"
            >
              Sponsor my Open Source
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 783.74 695.32" >
                <path d="M0,347.17,345.6,695.32l70.6-68.16L184.86,395.87H783.74V299.46H183.18l233-231.3L345.6,0,0,346.14l.53.52Z" />
              </svg>
            </a>

            <a href="https://dev.to/lucasm" target="_blank" rel="noopener" className="button button-secondary">
              Dev Blog
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 783.74 695.32" >
                <path d="M0,347.17,345.6,695.32l70.6-68.16L184.86,395.87H783.74V299.46H183.18l233-231.3L345.6,0,0,346.14l.53.52Z" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
