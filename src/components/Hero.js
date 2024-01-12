import "./Hero.css"
import { FaPlay, FaInfo } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-bg"></div>
            <div className="hero-title">
                <div className="title-text">
                    <h1>Coach Carter</h1>
                    <p className="title-description">Trenér basketballu na střední škole nastaví svým svěřencům přísná pravidla a nebojí se udělat odvážné rozhodnutí, když se jejich prospěch začne zhoršovat.</p>
                </div>
                <div className="title-buttons">
                    <button className="hero-btn"><i><FaPlay /></i>Přehrát</button>
                    <button className="hero-btn info-btn"><i><FaInfo /></i>Další informace</button>
                </div>
            </div>
        </div>
    )
}

export default Hero