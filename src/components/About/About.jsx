import React from 'react' 
import classes from './About.module.scss'
import MovieList from '../MovieList/MovieList';

const about = (props) =>(
    <div className={classes['about-container']}>
        <MovieList movies={props.movies} 
        savedMovie={props.savedMovie}
        click={props.click}/>
    </div>
)
export default about 