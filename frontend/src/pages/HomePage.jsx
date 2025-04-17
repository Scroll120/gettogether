import "./homePage.css"
import back from "../assets/temp-back.png";

export default function HomePage() {
    console.log("test")

    return (
        <section className="homePageSection">
            <div className="homeContainer">
                <img src={back}/>
            </div>
        </section>
    )
}