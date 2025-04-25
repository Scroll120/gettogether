import "./homePage.css"
import bgvideo from "../../assets/video-bg.mov"
import logo from "../../assets/logo.png"
import { useState } from "react";

export default function HomePage() {
    const [carouselList, setCarouselList] = useState([]);
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
                            <div className="project-card"> {carouselList[0] ? 1 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[1] ? 2 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[2] ? 3 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[3] ? 4 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[4] ? 5 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[5] ? 6 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[6] ? 7 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            {/*Carousel repeats here (probably could be built to be more efficient too*/}
                            <div className="project-card"> {carouselList[0] ? 1 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[1] ? 2 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[2] ? 3 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[3] ? 4 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[4] ? 5 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                            <div className="project-card"> {carouselList[5] ? 6 :
                                <img src={logo} alt="Logo" className="carousel-logo"/>}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}