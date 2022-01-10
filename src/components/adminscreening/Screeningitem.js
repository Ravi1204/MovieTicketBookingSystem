import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteScreening } from "../../actions/AdminScreeningActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import ScreeningList from '../ScreeningList.js';

class Screeningitem extends Component {
    onDeleteClick = id => {
        this.props.deleteScreening(id);
      };

    render() {
        const {screening}=this.props;
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
                  
                    <div className="col-lg-6 col-md-4 col-8">
                        
                        <br />
                            {/* <h3><b>Movie: </b>{screening.movie.title}</h3>
                      <p><b>Theatre: </b>{screening.auditorium.theatre.name}</p>  */}
                        {/* <p><b>Date: </b>{screening.date}</p> */}
                        <p><b>Start Time: </b> {screening.startTime}</p>
                         <p><b>End Time: </b>{screening.endTime}</p>
                         <p>{screening.isFull}</p>
                         <p><b>Price: </b>{screening.price}</p>
                        
                        <Link to={`/updatescreening/${screening.id}`}>

                                <li className="list-group-item update">

                                    <button className="btn btn-dark">update info</button>

                                </li>

                            </Link>
                             

                                <li className="list-group-item update" onClick={this.onDeleteClick.bind(this,screening.id)}>

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
        //               {/* <h3><b>Movie: </b>{screening.movie.title}</h3>
        //               <p><b>Theatre: </b>{screening.auditorium.theatre.name}</p> */}
                      
        //                 <p><b>Date: </b>{screening.date}</p>
        //                 <p><b>Start Time: </b> {screening.startTime}</p>
        //                 <p><b>End Time: </b>{screening.endTime}</p>
        //                 <p>{screening.isFull}</p>
        //                 <p><b>Price: </b>{screening.price}</p>
                        
                      
                        
        //             </div>
        //             <div className="col-md-4 d-none d-lg-block">
        //                 <ul className="list-group">
                          
        //                     <Link to={`/updatescreening/${screening.id}`}>
        //                     <li className="list-group-item update">
        //                             <i className="fa fa-edit pr-1">Update Screening Info</i>
        //                         </li>
        //                     </Link>
        //                     <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,screening.id)}>
        //           <i className="fa fa-minus-circle pr-1"> Delete Screening</i>
        //         </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        );
    }
}

//export default Screeningitem;
Screeningitem.propTypes = {deleteScreening: PropTypes.func.isRequired};
export default connect(null, { deleteScreening })(Screeningitem);