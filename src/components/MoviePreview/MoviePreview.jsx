import React from 'react' 
import classes from './MoviePreview.module.scss'
import utilService from '../../services/utilService'
const MoviePreview = (props) =>{
    let movieTitle = props.movie.title
    let movie = props.savedMovie && Object.keys(props.savedMovie).find(movie=> movie===movieTitle)
    let fab = (props.savedMovie[movie])?"fas fa-bookmark ":"far fa-bookmark "
    
    
    
   return (
       <div className={classes['preview-container']}>
       <h1>{movieTitle}</h1>
        <span onClick={()=>{props.click(movieTitle)}} className={fab}></span>
       </div>
    
    )
}
export default MoviePreview 