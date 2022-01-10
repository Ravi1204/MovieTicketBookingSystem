import React, { Component, Container, Row } from 'react';
import { Link } from 'react-router-dom';

class MovieList extends Component {

    render() {
        const { movie } = this.props;
        return (
            // <div className="container-fluid">
            //     <h4>{movie.title}</h4>
            //     <h5>{movie.poster}</h5>
            //     <h5>{movie.genre}</h5>
            //     <h5>{movie.duration}</h5>
            //     {/* <Link to={`/theatres`}> */}
            //     <Link to={`/theatres/${movie.id}`}>

            //                 <li className="list-group-item update">

            //                         <i className="fa fa-edit pr-1">Book Ticket</i>

            //                     </li>

            //     </Link>
            //     <br/>                
            // </div>



            // <div class="row">
            // <div class="col-sm-6">
            //             <div className="card" style={{ width: "25rem" }}>
            //                 {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}


            //                         <div className="card-body">
            //                             <h5 className="card-title">{movie.title}</h5>
            //                             <h5 className="card-title">{movie.poster}</h5>
            //                             <h5 className="card-title">{movie.genre}</h5>
            //                             <h5 className="card-title">{movie.duration}</h5>
            //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //                             <Link to="screening" className="btn btn-primary">Book Ticket</Link>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>

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
                            <Link to={`/theatres/${movie.id}`}>

                                    <li className="list-group-item update">

                                        <button className="btn btn-dark">Book Ticket</button>

                                    </li>

                                </Link>
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

        );
    }
}

export default MovieList;