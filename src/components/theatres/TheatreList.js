import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { getTheatres } from '../../actions/TheatreAction.js';
import TheatreItem from './TheatreItem.js';

class TheatreList extends Component {
    constructor(props){

        super(props);
        this.state={
                id:this.props.match.params.id

        };
      
    }

     componentDidMount(){
         
        this.props.getTheatres()
    }


    render() {
         const{theatres}=this.props.theatres;
         const userId=JSON.parse(localStorage.getItem('user'));;
         if(userId==null|| userId==0)
         {
             this.props.history.push("/sign-up");
         }
        return (
            // <div>
            //     {theatres.map(theatre=>(
            //    <TheatreItem key={theatre.id} movieId={this.state.id} theatre={theatre}/>
              
            //  ) ) }
            // </div>

            
            <div>
                <div className="card card-body bg-light mb-3" style={{width:"30rem;"}}>
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{theatres.id}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                        <div>
                            {theatres.map(theatre=>(
                           <TheatreItem key={theatre.id} movieId={this.state.id} theatre={theatre}/>
                          
                         ) ) }
                        </div>
                        </div>
                        <div className="col-md- d-none d-lg-block">
                            <ul className="list-group">

                                {/*<Link to={`/theatres/${movie.id}`}>

                                <li className="list-group-item update">
    
                                    <i className="fa fa-edit pr-1">Book Ticket</i>
    
                                </li>
    
                            </Link>
        */}
                            </ul>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps=state=>({
    theatres:state.theatres
   })
  export default connect(mapStateToProps,{getTheatres}) (TheatreList);