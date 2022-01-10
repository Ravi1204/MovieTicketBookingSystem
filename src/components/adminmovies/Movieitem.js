import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteMovie } from "../../actions/AdminMovieActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Movieitem extends Component {
    onDeleteClick = id => {
        this.props.deleteMovie(id);
      };
    render() {
        const {movie}=this.props;
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }
        return (
            <div className="container-fluid">
            <div className="card card-body bg-dark mb-4" style={{width:"40rem;"}}>
                <div className="row" style={{ color: "orange" }}>
                    <div className="col-2">
                        {/*<span className="mx-auto">{movie.id}</span>*/}
                    </div>
                    <div style={{ height: "200px", width: "200px"}}>
                            <img src={movie.poster} alt='movie'></img>
                        </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        
                        <br />
                        <h3><b>Movie : </b>{movie.title}</h3>
                        <h3><b>Id : </b>{movie.id}</h3>
                        <p><b>Genere : </b>{movie.genre}</p>
                        <p><b>Duration : </b>{movie.duration}{"Min"}</p>
                        <Link to={`/updateadminmovie/${movie.id}`}>

                                <li className="list-group-item update">

                                    <button className="btn btn-dark">update info</button>

                                </li>

                            </Link>
                             

                                <li className="list-group-item update" onClick={this.onDeleteClick.bind(this,movie.id)}>

                                    <button className="btn btn-dark">delete</button>

                                </li>

                           
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">

                            {/*<a href="#">
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1">Watch Trailer </i>
                                </li>

    </a>*/}
                            
                        </ul>

                    </div>

                </div>

            </div>
        </div>

        //     <div className="container">
        //     <div className="card card-body bg-light mb-3">
        //         <div className="row">
        //             <div className="col-lg-6 col-md-4 col-8">
        //                 <h3><b>Movie Name: </b>{movie.title}</h3>
        //                 <p><b>Genre: </b>{movie.genre}</p>
        //                 <p><b>Duration: </b>{movie.duration}</p>
        //                 <p><b>Poster: </b>{movie.poster}</p>
        //             </div>
        //             <div className="col-md-4 d-none d-lg-block">
        //                 <ul className="list-group">
                          
        //                     <Link to={`/updateadminmovie/${movie.id}`}>
        //                     <li className="list-group-item update">
        //                             <i className="fa fa-edit pr-1">Update Movie Info</i>
        //                         </li>
        //                     </Link>
        //                     <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,movie.id)}>
        //           <i className="fa fa-minus-circle pr-1"> Delete Movie</i>
        //         </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        );
    }
}


Movieitem.propTypes = {deleteMovie: PropTypes.func.isRequired};
  
  export default connect(null, { deleteMovie })(Movieitem);