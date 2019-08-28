import React,{Component} from 'react'
import classes from './Layout.module.scss'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import movieServise from '../../services/movieService'
import utilService from '../../services/utilService'


class layout extends Component {
    state = {  
        movies: null,
        savedMovie: []
    }

    async componentDidMount(){

       let movies = await movieServise.loadMovies()
       let savedMovie = utilService.loadFromStorage('movies')
       this.setState({movies,savedMovie})
       console.log(this.state.savedMovie);
       

    }

    
    render() { 
        return (
            <div className={classes['main-layout']}>
                <Header click={this.handelClick}/>
                <About movies={this.state.movies } 
                savedMovie={this.state.savedMovie}/>

            </div>
          );
    }
}
 
export default layout;