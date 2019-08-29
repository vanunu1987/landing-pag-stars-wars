import React from 'react' 
import classes from './About.module.scss'
import MovieList from '../MovieList/MovieList';

const about = (props) =>(
    <div className={classes['about-container']} id="about" >
        <MovieList movies={props.movies} 
        savedMovie={props.savedMovie}
        click={props.click}
        backdrop={props.backdrop}
        show={props.show}/>
    </div>
)
export default about 