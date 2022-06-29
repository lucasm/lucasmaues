import PageLayout from "../components/PageLayout";
import Icons from "../components/Icons";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Frontend Developer"
      description="Hi, I'm a Frontend Developer from Brazil developing web apps and sites and open source."
    >
      <section>
        <div className="container home">
          <h1>Hi, I code web apps & sites</h1>

          {/* <figure id="profile">
                    <img src="https://pbs.twimg.com/profile_images/1517213451621486592/hOGCMw8m_400x400.jpg" alt="Lucas Menezes profile photo" />
                </figure> */}
          {/* //avatars.githubusercontent.com/lucasm */}

          <p className="description">
            I'm Lucas Menezes, a Frontend Developer from Brazil creating digital
            products and open source
          </p>

          <div>
            <a href="#work" className="button button-main">
              My portfolio
            </a>
            <a
              href="https://github.com/sponsors/lucasm"
              target="_blank"
              rel="noopener"
              className="button button-secondary"
            >
              Sponsor me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 783.74 695.32"
              >
                <path d="M0,347.17,345.6,695.32l70.6-68.16L184.86,395.87H783.74V299.46H183.18l233-231.3L345.6,0,0,346.14l.53.52Z" />
              </svg>
            </a>
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
            <h2>I code web experiences</h2>

            <p>
              I've been helping businesses and organizations launch digital
              products, like web applications, websites and e-commerces, that's
              establish a refined online presence.
            </p>

            <p>
              I develop reactive, responsive and progressive front-end user
              interfaces (UI) with strong focus on user experience (UX).
              Adjacent back-end with APIs integrations, databases and cloud
              deploy. Software architecture patterns, web performance, security
              and accessibility are my focal points.
            </p>

            <p>
              I believe my work can empower people too. So, I maintain{" "}
              <a
                href="https://github.com/sponsors/lucasm"
                target="_blank"
                rel="noopener"
              >
                open source projects
              </a>{" "}
              backed by community and write a{" "}
              <a href="https://dev.to/lucasm" target="_blank" rel="noopener">
                web programming blog
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="gradient-x">
        <div className="container">
          <div className="contactContainer">
            <div>
              <h3 className="subtitle">Let's talk</h3>

              <p>
                If you want to work together or discuss your project, email to{" "}
                <span>
                  <a href="mailto:hello@lucasm.dev?subject=Hello">
                    hello@lucasm.dev
                  </a>
                </span>
              </p>
            </div>

            <div>
              <h3 className="subtitle">Follow me</h3>

              <Icons />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
