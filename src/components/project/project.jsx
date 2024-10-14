import './index.scss'

function Project() {
    return ( 
        <section className="project">
            <div className="project__inner">
                <div className="project__row">
                    <div className="project__content">
                        <h2 className="project__content-title">
                            Architect <br />
                            Identity
                        </h2>
                        <p className="project__content-year">
                            Year - 2018
                        </p>
                        <p className="project__content-desc">
                            Graphic Design, Web Design, <br />
                            Web Development
                        </p>
                    </div>
                    <div className="project__banner">
                       <img src="./project-banner.jpg" alt="" className="project__banner-img" />
                    </div>
                </div>
                <div className="project__cta">
                    <a href="#"><img src="./arrow-down.svg" alt="" /></a>
                </div>
            </div>
        </section>
     );
}

export default Project;