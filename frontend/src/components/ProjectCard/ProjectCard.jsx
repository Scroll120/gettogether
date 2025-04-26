import './projectCard.css';
import logo from '../../assets/logo.png';

export default function ProjectCard (props) {

    return (
        <div className="project-card">
            {props.project ? 1 :<img src={logo} alt="Logo" className="carousel-logo"/>}
        </div>
    )
}