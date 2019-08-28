import React from 'react' 
import classes from './MoviePreview.module.scss'
import utilService from '../../services/utilService'
const MoviePreview = (props) =>{
    let movieTitle = props.movie.title
    let movie = props.savedMovie && props.savedMovie.find(movie=>movie===movieTitle)
    let fab = (movie)?"fas fa-bookmark ":"far fa-bookmark "
    console.log(props.savedMovie);
    
    
    
   return (
       <div className={classes['preview-container']}>
       <h1>{movieTitle}</h1>
        <span onClick={()=>{
            let savedMovies = (!utilService.loadFromStorage('movies'))?[]:utilService.loadFromStorage('movies')
            savedMovies.push(movieTitle)
            utilService.saveToStorage('movies',savedMovies)}} className={fab}></span>
       </div>
    
    )
}
export default MoviePreview 