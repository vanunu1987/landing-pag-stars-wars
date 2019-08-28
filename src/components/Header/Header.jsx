
import React from 'react' 
import classes from './Header.module.scss'


const header = (props) =>{
    return(
        <div className={classes['header-container']}>
        <div className={classes['content']}>
            <h1 className={classes['header-title']}>CHOOSE YOUR FAVORITE STAR-WARS MOVIE</h1>
        </div>
        </div>
    )
}
export default header 