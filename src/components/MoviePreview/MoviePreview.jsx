import React from 'react' 
import classes from './MoviePreview.module.scss'
import utilService from '../../services/utilService'
import Modal from '../ui/Modal/Modal'
const MoviePreview = (props) =>{
    let movieTitle = props.movie.title
    let movie = props.savedMovie && Object.keys(props.savedMovie).find(movie=> movie===movieTitle)
    let fab = (props.savedMovie[movie])?"fas fa-bookmark ":"far fa-bookmark "
    let img = utilService.getImg(movieTitle)
    let modalCmp = (props.show)? <Modal movie={props.movie}/>:""
    
   return (
       <div className={classes['preview-container']} >
       {modalCmp}
       <div className={classes['img-movie']} style={{backgroundImage: `url(${img})`}} onClick={ props.backdrop}></div>
       <h1>{movieTitle}</h1>
        <span onClick={()=>{props.click(movieTitle)}} className={fab}></span>
       </div>
    
    )
}
export default MoviePreview 