import React from 'react' 
import classes from './MoviePreview.module.scss'
import utilService from '../../services/utilService'
const MoviePreview = (props) =>{
    let movieTitle = props.movie.title
    let movie = props.savedMovie && Object.keys(props.savedMovie).find(movie=> movie===movieTitle)
    let fab = (props.savedMovie[movie])?"fas fa-bookmark ":"far fa-bookmark "
    let img = utilService.getImg(movieTitle)
    
    
   return (
       <div className={classes['preview-container']}>
       <div className={classes['img-movie']} style={{backgroundImage: `url(${img})`}}></div>
       <h1>{movieTitle}</h1>
        <span onClick={()=>{props.click(movieTitle)}} className={fab}></span>
       </div>
    
    )
}
export default MoviePreview 