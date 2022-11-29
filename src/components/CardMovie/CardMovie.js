import { Component } from "../../core";
import { moviesService } from "../../services/MovieService";

export class CardMovie extends Component {
    
    render() {
    console.log(moviesService.getAllMovies)
        return `
        <div class="movie">
        
        <div class="movie-image"> <span class="play"><span class="name">X-MAN</span></span> <a href="#"><img src="css/images/movie1.jpg" alt="" /></a> </div>
        
        <div class="rating">
          <p>RATING</p>
            <div class="stars">
            <div class="stars-in"> </div>
            </div>
            <span class="comments">12</span> 
        </div>
        
      </div>
        `
    }
}

customElements.define('movie-card', CardMovie)