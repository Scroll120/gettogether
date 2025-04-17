import "./homePage.css"
import bgvideo from "../assets/video-bg.mov"
import logo from "../assets/logo.png"

export default function HomePage() {
    console.log("test")

    return (
        <section className="home-page-section">
            <div className="home-container">
                <video src={bgvideo} loop muted autoPlay />
                <div className="overlay"></div>
                <div className="home-foreground">
                    <img src={logo} alt="Logo" className="home-logo"/>
                    <h1>Get Together</h1>
                </div>
                <div className="home-page-project-slide-container">
                    <div className="carousel">
                        <div className="carousel-track">
                            <div className="project-card">1</div>
                            <div className="project-card">2</div>
                            <div className="project-card">3</div>
                            <div className="project-card">4</div>
                            <div className="project-card">5</div>
                            <div className="project-card">6</div>
                            <div className="project-card">7</div>
                            {/* Repeat 1-3 to make it seamless */}
                            <div className="project-card">1</div>
                            <div className="project-card">2</div>
                            <div className="project-card">3</div>
                            <div className="project-card">4</div>
                            <div className="project-card">5</div>
                            <div className="project-card">6</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}