import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createMovies,updateMovies} from "../../actions/AdminMovieActions.js"
class UpdateMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            title:"",
            poster:"",
            genre:"",
            duration:"",
          error:""
            // errors:{}

        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        const updateMovie={
            id:this.state.id,
            title:this.state.title,
            poster:this.state.poster,
            genre:this.state.genre,
            duration:this.state.duration,
            
        
        }
        if(updateMovie.title.length==0 || updateMovie.poster.length==0 || updateMovie.genre.length==0 || updateMovie.duration.length==0)
        {
            this.setState({error:"All Fields are Required"})
            return;
        }
        console.log(updateMovie);
        this.props.createMovies(updateMovie,this.props.history);

    }
    componentDidMount(){
        const{id}=this.props.match.params;
        this.props.updateMovies(id,this.props.history);
    }
    componentWillReceiveProps(nextProps){
     const{
         id,title,poster,genre,duration,
     }=nextProps.movie;
     this.setState({id,title,poster,genre,duration});
    }
    render() {
        // const {errors}=this.state;
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }
        return (
            <div className="movie">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Movie </h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="Movie Title" name="title" value={this.state.title} onChange={this.onChange} />
                            </div>
                           
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Movie Poster"
                                name="poster" value={this.state.poster} onChange={this.onChange} />
                            </div>
                          
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Movie Genre" name="genre" value={this.state.genre} onChange={this.onChange}></textarea>
                            </div>
                          
                            <h6>Duration</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="duration" value={this.state.duration} onChange={this.onChange} />
                            </div>
                            <p style={{color:"red"}}>{this.state.error}</p>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}

UpdateMovie.propTypes={
    createMovies:PropTypes.func.isRequired,
    updateMovies:PropTypes.func.isRequired,
    movie:PropTypes.object.isRequired

};
const mapStateToProps=state=>({
    movie:state.adminMovies.movie
})

export default connect(mapStateToProps,{updateMovies,createMovies}) (UpdateMovie);
