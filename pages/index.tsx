import PageLayout from "../components/PageLayout";
import Image from "next/image";
import Icons from "../components/Icons";
import Cards from "../components/Cards";
import IconArrowLink from "../components/IconArrowLink";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Frontend Software Engineer"
      description="Frontend Software Engineer from Brazil. Development of Web Apps and Sites. Open Source."
    >
      <section className="gradient-x">
        <div className="container home reverse">
          <div>
            <h1>Hello, I develop Web apps &#38; sites</h1>
            <p className="description">
              I'm Lucas Menezes, a Frontend Software Engineer from Brazil,
              creating digital products and open source.
            </p>

            <Icons />
          </div>

          <div>
            <figure id="profile">
              <Image
                alt="Picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
                // layout="fill"
                priority
                width={220}
                height={220}
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2 className="subtitle">Latest posts</h2>

          <Blog />
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h2 className="subtitle">Selected work</h2>

          <Cards />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="specialContainer">
            <h2>I code reliable Web experiences</h2>

            <p>
              Since 2017 I've been helping companies and organizations launch
              digital products, like web applications, websites and e-commerces,
              that's establish a refined online presence.
            </p>

            <p>
              I develop reactive, responsive and progressive front-end user
              interfaces (UI) with strong focus on user experience (UX).
              Adjacent back-end with APIs integrations, databases and cloud
              deploy. Web architecture patterns, performance, security and
              accessibility are my focal points.
            </p>

            <p>
              I also maintain amazing Open Source projects and I write a Blog
              where I share programming tutorials and advocate for open web
              standards.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="gradient-x">
        <div className="container">
          <div className="contactContainer">
            <div>
              <h2 className="subtitle">Get in touch</h2>

              <p>
                Do you want to discuss your project or work together? Please,
                send an email to{" "}
                <span>
                  <a href="mailto:hello@lucasm.dev?subject=Hello">
                    hello@lucasm.dev
                  </a>
                </span>
              </p>
            </div>

            <div>
              <h2 className="subtitle">Community</h2>

              <a
                href="https://github.com/sponsors/lucasm"
                target="_blank"
                rel="noopener"
                className="button button-secondary"
              >
                Sponsor my Open Source
                <IconArrowLink />
              </a>

              <a
                href="https://dev.to/lucasm"
                target="_blank"
                rel="noopener"
                className="button button-secondary"
              >
                Read my Blog
                <IconArrowLink />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
