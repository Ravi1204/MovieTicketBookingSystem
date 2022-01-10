import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createMovies} from "../../actions/AdminMovieActions"
class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            poster:"",
            genre:"",
            duration:"",
            error:""
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        const newMovie={
            title:this.state.title,
            poster:this.state.poster,
            genre:this.state.genre,
            duration:this.state.duration,
       
        
        }
        if(newMovie.title.length==0 || newMovie.poster.length==0 || newMovie.genre.length==0 || newMovie.duration.length==0)
        {
            this.setState({error:"All Fields are Required"})
            return;
        }
        // if(Number.isInteger(newMovie.duration))
        // {
            
        // }
        // else{
        //     this.setState({error:"Value must be integer"})
        //     return;
        // }
        // // console.log(newMovie);
        this.props.createMovies(newMovie,this.props.history);

    }
   
    render() {
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
                           
                            <h6>Movie Duration</h6>
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

AddMovie.propTypes={
    createMovies:PropTypes.func.isRequired,
   
};
const mapStateToProps=state=>({
    adminErrors:state.adminErrors
})

export default connect(mapStateToProps,{createMovies}) (AddMovie);
//export default AddProject;