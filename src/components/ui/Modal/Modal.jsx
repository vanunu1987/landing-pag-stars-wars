import React from 'react' 
import classes from './Modal.module.scss'
const modal = (props) =>(
    <div className={classes['modal-container']}>
        <h2>{props.movie.title}</h2>
        <p>director: {props.movie.director}</p>
        <p>producer: {props.movie.producer}</p>
        <p>release_date: {props.movie['release_date']}</p>
        <p>opening_crawl: {props.movie['opening_crawl']}</p>
    </div>
)
export default modal 