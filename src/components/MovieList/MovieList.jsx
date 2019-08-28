import React from 'react' 
import classes from './MovieList.module.scss'
import MoviePreview from '../MoviePreview/MoviePreview';
const movieList = (props) =>{
    console.log(props);
    
    let movieForDisplay =(props.movies)?props.movies.map(movie=><li key={movie.title}><MoviePreview  movie={movie} savedMovie={props.savedMovie}/></li>):''
    return(
        <div className={classes['list-container']}>
            <ul>
                {movieForDisplay}
            </ul>
        
        </div>
    )
}
export default movieList 