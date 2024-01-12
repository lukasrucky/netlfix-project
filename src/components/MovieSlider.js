import "../components/MovieSlider.css"
import allMovies from "../data"
import { useState, useEffect } from "react"
import categories from "./categories"
import { FaArrowCircleLeft, FaArrowCircleRight, FaPlay, FaPlus, FaThumbsUp, FaChevronDown } from 'react-icons/fa';

const MovieSlider = (props) => {
    const [activeMovie, setActiveMovie] = useState(false)
    const typeOfMovie = props.categoryOfMovies
    const vysledneFilmy = allMovies.filter((oneMovie) => {
        return oneMovie["category"].includes(typeOfMovie)
    })
    
    return <div className="movies-slider">
        <div className="one-button">
            {
                categories.filter((oneCategory, index) => {
                    return oneCategory === props.categoryOfMovies
                })
            }
        </div>
        <div className="slider-wrapper">
            <FaArrowCircleLeft id="prev-slide" className="arrow-button arrow-left"/>
            <div className="movies-list">
                {
                    vysledneFilmy.map((oneMovie) => {
                        const {id, image, title, age, tags} = oneMovie

                        return <div className="one-movie" key={id} onClick={() => setActiveMovie(!activeMovie)}>
                            <img className="one-movie-img" src={image} alt="movie-image"/>
                            <div className={`${activeMovie ? "movie-more-info active" : "movie-more-info"}`}>
                                <div className="button-section">
                                    <div className="left">
                                        <li><FaPlay className="button"/></li>
                                        <li><FaPlus className="button"/></li>
                                        <li><FaThumbsUp className="button"/></li>
                                    </div>
                                    <li><FaChevronDown className="button"/></li>
                                </div>
                                <div className="movie-details">
                                    <p className="match">97% shoda</p>
                                    <div className="movie-description">
                                        <div className="adq">
                                            <p className="age border">{age}</p>
                                            <p className="duration">1 h 36 m</p>
                                            <p className="quality border">HD</p>
                                        </div>
                                        <p className="tags">{tags}</p>
                                        <h4>{title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <FaArrowCircleRight className="arrow-button arrow-right" />
            
        </div>
    </div>
}

export default MovieSlider
