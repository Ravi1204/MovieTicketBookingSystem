import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TheatreScreeningView extends Component {
    constructor(props){

        super(props);
        this.state={
                screening:this.props.screening

        };
      
    }

    render() {
     
        return (

            <div>
                {/* <h6>{this.state.screening.startTime}</h6> */}
                <Link to={`/showscreening/${this.state.screening.id}`}>

                           {/*} <li className="list-group-item update">

                                    <i className="fa fa-edit pr-1">{this.state.screening.startTime}</i>

        </li>*/}
        <li className="list-group-item update">

                                        <button className="btn btn-dark">{this.state.screening.startTime}</button>

                                    </li>

                </Link>
                
            </div>
        );
    }
}

export default TheatreScreeningView;