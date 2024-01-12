import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import MovieSlider from "./components/MovieSlider"
import { useEffect } from "react"
const App = () => {
  useEffect(() => {
    const allMovieSliders = document.querySelectorAll(".movies-slider")
    allMovieSliders.forEach((oneMovieSlider) => {
      const slideButtons = oneMovieSlider.querySelectorAll(".arrow-button");
      const imageList = oneMovieSlider.querySelector(".movies-list");
      // const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      // Slide images according to slide buttons click
      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
      })
      // Hiding the buttons
      // const handleSlideButtons = () => {
      //     slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
      //     slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
      // }
      // update position of scrollbar 
      // imageList.addEventListener("scroll", () => {
      //     handleSlideButtons();
      // })
    })
  })
  
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="movie-sliders">
        <MovieSlider categoryOfMovies="Oblíbené"/>
        <MovieSlider categoryOfMovies="Komedie"/>
        <MovieSlider categoryOfMovies="Romantický"/>
        <MovieSlider categoryOfMovies="Akční"/>
        <MovieSlider categoryOfMovies="Nově přidané"/>
        <MovieSlider categoryOfMovies="Seriál"/>
      </div>
    </div>
  )
}

export default App