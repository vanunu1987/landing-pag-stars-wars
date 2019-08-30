
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
            <h1 className={classes['header-title']}>CHooSE YoUR FAVoRiTE STAR-WARS MoViE</h1>
            
        </div>
            <button onClick={()=>scrollToElement()} className={classes['go-btn']} >May the force be with you</button>
        </div>
    )
}
export default header 