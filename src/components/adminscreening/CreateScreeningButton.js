import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
var CreateScreeningButton=()=>{
    return(
        <React.Fragment>
       
        <Link to="/addscreening" className="btn btn-lg btn-info" > Add Screening </Link>
    
        </React.Fragment>
    );
}
export default CreateScreeningButton;