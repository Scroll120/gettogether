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
            </div>
        </section>
    )
}