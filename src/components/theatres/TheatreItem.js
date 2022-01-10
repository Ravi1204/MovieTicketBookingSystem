import React, { Component } from 'react';
import axios from 'axios';
import { getScreeningsByMovieId } from "../../actions/ScreeningAction.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TheatreScreeningView from './TheatreScreeningView.js';

class TheatreItem extends Component {
    state = {
        screenings: []

    };

    componentDidMount() {

        this.props.getScreeningsByMovieId(this.props.movieId);

    }
    render() {
        const { screenings } = this.props.screenings;
        const { theatre } = this.props;
        const screenings2 = screenings.filter(s => s.auditorium.theatre.id === theatre.id);
        console.log(screenings.length);
        // console.log(screenings2.length);
        return (
            <div className="container-fluid">
                <div className="row" style={{ color: "orange" }}>
                    <div className="col-2">
                        {/*<span className="mx-auto">{movie.id}</span>*/}
                    </div>
                    <div className="card card-body bg-dark mb-3" style={{ width: "150rem;", height: "80rem;", backgroundColor: "honeydew" }}>
                        <h4><b>Theatre : {theatre.name}</b></h4>
                        <h5><b>City : {theatre.city}</b></h5>
                        <button className="btn btn-secondary" style={{color:"darkgoldenrod"}}>
                        {screenings2.map(screening => (
                            <TheatreScreeningView key={screening.id} screening={screening} />

                        ))}
                        </button>
                        {/*<Link to="/screenings">
                            <li className="list-group-item board">
                                <button className="btn btn-dark">Select Theatre</button>
                            </li>
                        </Link>*/}
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    screenings: state.screenings
})
export default connect(mapStateToProps, { getScreeningsByMovieId })(TheatreItem);