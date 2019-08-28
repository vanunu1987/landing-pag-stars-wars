import React from 'react' 
import classes from './About.module.scss'
import MovieList from '../MovieList/MovieList';

const about = (props) =>(
    <div className={classes['about-container']}>
        <MovieList movies={props.movies}/>
    </div>
)
export default about 