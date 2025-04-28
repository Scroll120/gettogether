import "./homePage.css"
import bgvideo from "../../assets/video-bg.mov"
import logo from "../../assets/logo.png"
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
                            {/*Note to self: Replace with a loop for better handling and just general cleaner code*/}
                            <ProjectCard project={carouselList[0]}/>
                            <ProjectCard project={carouselList[1]}/>
                            <ProjectCard project={carouselList[2]}/>
                            <ProjectCard project={carouselList[3]}/>
                            <ProjectCard project={carouselList[4]}/>
                            <ProjectCard project={carouselList[5]}/>
                            <ProjectCard project={carouselList[6]}/>
                            {/*Carousel repeats here (probably could be built to be more efficient too*/}
                            <ProjectCard project={carouselList[0]}/>
                            <ProjectCard project={carouselList[1]}/>
                            <ProjectCard project={carouselList[2]}/>
                            <ProjectCard project={carouselList[3]}/>
                            <ProjectCard project={carouselList[4]}/>
                            <ProjectCard project={carouselList[5]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}