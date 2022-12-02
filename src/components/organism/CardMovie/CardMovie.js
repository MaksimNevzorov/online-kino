import { Component } from "../../../core";
import './CardMovie.scss'
import { moviesService } from "../../../services/MovieService";

export class CardMovie extends Component {
    
  static get observedAttributes(){
    return ['title','poster','comments', 'id', 'rating']
  }
  

  render(){
   return`
   <div class="movie">
   <div class="movie-image"> 
           <span class="play">
            <span class="name">${this.props.title}</span>
           </span> 
           <a href="#">
             <img src="../../../assets/images/${this.props.poster}" alt="" />
           </a> 
   </div>
   <div class="rating">
     <p>RATING</p>
     <div class="stars">
       <div class="stars-in"> </div>
     </div>
     <span class="comments">${this.props.comments?.length ?? 0}</span> </div>
 </div>
   `
  }
}

customElements.define('movie-card', CardMovie)