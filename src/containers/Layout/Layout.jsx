import React,{Component} from 'react'
import classes from './Layout.module.scss'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import movieServise from '../../services/movieService'
import utilService from '../../services/utilService'
import Backdrop from '../../components/ui/Backdrop/Backdrop'


class layout extends Component {
    state = {  
        movies: null,
        savedMovie: [],
        show:false
    }

    async componentDidMount(){

       let movies = await movieServise.loadMovies()
       let savedMovie = utilService.loadFromStorage('movies')
       this.setState({movies,savedMovie})
       console.log(this.state.savedMovie);
       

    }
    handleSave =(movieTitle)=>{
        let savedMovies = (!utilService.loadFromStorage('movies'))?{}:utilService.loadFromStorage('movies')
        let val= (savedMovies[movieTitle]) ? false:true
        savedMovies = {...savedMovies,[movieTitle]: val}
        utilService.saveToStorage('movies',savedMovies)
        this.setState({savedMovie:savedMovies})
    }

    handleBackdrop=()=>{
        console.log('innnnn');
        
        this.setState(prevState =>{
            let newVal = !prevState.show
            return {show: newVal}
        })
    }

    
    render() { 
        return (
            <div className={classes['main-layout']}>
                <Backdrop show={this.state.show} clicked={this.handleBackdrop}/>
                <Header click={this.handelClick}/>
                <About movies={this.state.movies } 
                savedMovie={this.state.savedMovie}
                click={this.handleSave}
                backdrop={this.handleBackdrop}
                show={this.state.show}
                />
                
            </div>
          );
    }
}
 
export default layout;