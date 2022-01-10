import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteUsers } from "../../actions/AdminUserAction.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Useritem extends Component {
    onDeleteClick = id => {
        this.props.deleteUsers(id);
      };
    render() {
        const {user}=this.props;
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }
        return (
            <div className="container-fluid">
            <div className="card card-body bg-dark mb-4" style={{width:"40rem;"}}>
                <div className="row" style={{ color: "orange" }}>
                  

                    <div className="col-lg-6 col-md-4 col-8">
                        
                        <br />
                        <h3>UserId: {user.id}</h3>
                        <h3>UserName: {user.userName}</h3>
                      
                             

                                <li className="list-group-item update" onClick={this.onDeleteClick.bind(this,user.id)}>

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
        //                 <h3>UserId: {user.id}</h3>
        //                 <h3>UserName: {user.userName}</h3>
        //             </div>
        //             <div className="col-md-4 d-none d-lg-block">
        //                 <ul className="list-group">
                          
        //                     <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,user.id)}>
        //           <i className="fa fa-minus-circle pr-1"> Delete User</i>
        //         </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        );
    }
}


Useritem.propTypes = {deleteUsers: PropTypes.func.isRequired};
  
  export default connect(null, { deleteUsers })(Useritem);