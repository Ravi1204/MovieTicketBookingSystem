import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from "prop-types"

import { connect } from "react-redux";
import { getScreenings } from "../actions/AdminScreeningActions.js";
import CreateScreeningButton from "./adminscreening/CreateScreeningButton.js";
import Screeningitem from "./adminscreening/Screeningitem.js";

class AdminScreeningList extends React.Component {
componentDidMount(){
    this.props.getScreenings();
}
    render() {
        const {screenings}=this.props.adminScreenings
        console.log(screenings.length);
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }
        return (
            // <div className="screenings">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-md-12">
            <div>
                            <h1 className="display-4 text-center">Screening</h1>
                            <br />
                            <CreateScreeningButton/>
                            <br />
                            <hr />
                            {screenings.map(screening=>(

             <Screeningitem key={screening.id} screening={screening} />

    ))}
                </div>            
               // </div>
            //         </div>
            //     </div>
            // </div>

        )
    }
}
AdminScreeningList.propTypes={
    screenings:PropTypes.object.isRequired,
   getScreenings:PropTypes.func.isRequired
};
const mapStateToProps=state=>({
    adminScreenings:state.adminScreenings
})



export default connect(mapStateToProps,{getScreenings}) (AdminScreeningList);
