import PageLayout from '../components/PageLayout'

if (typeof (document) !== "undefined") {

    // gifs
    var gifs = [
        '//c.tenor.com/4By6BoDLlxoAAAAd/the-office-dwight-schrute.gif',
        '//c.tenor.com/yAtN8iFS2OcAAAAd/oh-wow-the-office.gif',
        '//c.tenor.com/A-usPJNu8_AAAAAd/yes-right.gif',
        '//c.tenor.com/EuCsUQhyZtgAAAAd/stanley-hudson-the-office.gif'
    ];
    document.getElementById("background").style.backgroundImage = 'url(' + gifs[Math.floor(Math.random() * gifs.length)] + ')';

    // circle
    const circle = document.getElementById("circle");

    let X = 0;
    let Y = 0;
    const onMouseMove = (e) => {
        X = e.clientX;
        Y = e.clientY;
    }

    setInterval(() => {
        circle.style.transform = `translateX(${X}px) translateY(${Y}px)`;
    }, 50);

    document.addEventListener('mousemove', onMouseMove);
}

export default function Custom404() {
  return (

    <PageLayout
        title="Not Found — Lucas Menezes"
        description="Error page.">
          
          <div id="circle"></div>

          <section className="fullscreen">
            <div className="fullscreen-container">

                <div className="container">
                    <figure className="gif" id="background"></figure>
                    <h1>Not Found</h1>
                    <p className="description">The page you're looking for can't be found.</p>
                    <a href="/" className="button button-main">
              Back to home
            </a>
                </div>

            </div>
        </section>

    </PageLayout>
  )
}