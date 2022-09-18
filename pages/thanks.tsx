import PageLayout from "../components/PageLayout";
import { useEffect, useRef } from "react";
import CircleMouse from "../components/CircleMouse";

export default function Thanks() {
  const background = useRef(null);

  useEffect(() => {
    let gif = [
      "//c.tenor.com/1fxCGeZXSbkAAAAd/rock-on-avril-lavigne.gif",
      "//c.tenor.com/punc1TeVVpYAAAAd/travis-barker-rock-on.gif",
      "//c.tenor.com/vP9VBz_ldiYAAAAd/machine-gun-kelly-colson-baker.gif",
      "//c.tenor.com/Xf4Ua78-cR4AAAAd/dominic-harrison-yungblud.gif",
    ];

    background.current.style.backgroundImage =
      "url(" + gif[Math.floor(Math.random() * gif.length)] + ")";
  });

  return (
    <PageLayout title="Thanks — Lucas Menezes" description="Thanks page.">
      <section className="fullscreen">
        <CircleMouse />
        <div className="fullscreen-container">
          <div className="container">
            <figure className="gif" ref={background} id="background"></figure>

            <h1>Thanks!</h1>

            <p className="description">I just want to say thank you.</p>

            <a href="/" className="button button-main">
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
