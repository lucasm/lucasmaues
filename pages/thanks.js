// pages/thanks.js

import PageLayout from '../components/PageLayout'

if (typeof (document) !== "undefined") {
    var gifs = [
        '//c.tenor.com/1fxCGeZXSbkAAAAd/rock-on-avril-lavigne.gif',
        '//c.tenor.com/punc1TeVVpYAAAAd/travis-barker-rock-on.gif',
        '//c.tenor.com/vP9VBz_ldiYAAAAd/machine-gun-kelly-colson-baker.gif',
        '//c.tenor.com/Xf4Ua78-cR4AAAAd/dominic-harrison-yungblud.gif'
        
    ];
    document.getElementById("background").style.backgroundImage = 'url(' + gifs[Math.floor(Math.random() * gifs.length)] + ')';
}

export default function Thanks() {

  return (
    <PageLayout
        title="Thanks — Lucas Menezes"
        description="Thanks page.">
          
        <section className="fullscreen">
            <div className="fullscreen-container">
                  
                <div className="container">
                    <figure className="gif" id="background"></figure>
                    <h1>Thanks!</h1>
                    <p className="description">I want to say this for you.</p>
                </div>
                  
            </div>
        </section>

    </PageLayout>
  )
}