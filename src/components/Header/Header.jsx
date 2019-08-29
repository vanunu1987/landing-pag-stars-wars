
import React from 'react' 
import classes from './Header.module.scss'



const header = (props) =>{

    const scrollToElement = () => {
        const element = document.getElementById('about')
        element.scrollIntoView()
    }
    
    return(
        <div className={classes['header-container']}>
        <div className={classes['content']}>
            <h1 className={classes['header-title']}>CHOOSE YOUR FAVORITE STAR-WARS MOVIE</h1>
            <button onClick={()=>scrollToElement()} className={classes['go-btn']} >May the force be with you</button>
            
        </div>
        </div>
    )
}
export default header 