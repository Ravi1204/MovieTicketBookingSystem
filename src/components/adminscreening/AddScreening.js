import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createScreenings} from "../../actions/AdminScreeningActions.js"
class AddScreening extends Component {
    constructor(props){
        super(props);
        this.state={
            date:"",
            startTime:"",
            endTime:"",
            isFull:false,
            price:"",
            movieId:"",
            auditoriumId:""
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        const newScreening={
            date:this.state.date,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            isFull:this.state.isFull,
            price:this.state.price,
            movie:{id:this.state.movieId},
            auditorium:{id:this.state.auditoriumId}

        }
        console.log(newScreening);
        this.props.createScreenings(newScreening,this.props.history);

    }
    
   
    render() {
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }

        return (
            <div className="screening">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Movie </h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <h6>Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg " placeholder="Screening Date" name="date" value={this.state.date} onChange={this.onChange} />
                            </div>

                            <h6>Start Time</h6>
                            <div className="form-group">
                                <input type="time" className="form-control form-control-lg" placeholder="Start Time"
                                name="startTime" value={this.state.startTime} onChange={this.onChange} />
                            </div>
                            
                            <h6>End Time</h6>
                            <div className="form-group">
                            <input type="time"  className="form-control form-control-lg" placeholder="End Time" name="endTime" value={this.state.endTime} onChange={this.onChange}/>
                            </div>
                           
                            
                            {/* <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="isFull" value={this.state.isFull} onChange={this.onChange} />
                            </div> */}
                        
                            <div className="form-group">
                                <input type="text" placeholder="Price" className="form-control form-control-lg" name="price" value={this.state.price} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="MovieId" className="form-control form-control-lg" name="movieId" value={this.state.movieId} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="AuditoriumId" className="form-control form-control-lg" name="auditoriumId" value={this.state.auditoriumId} onChange={this.onChange} />
                            </div>
                           
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}

AddScreening.propTypes={
    createScreenings:PropTypes.func.isRequired,
   
};
const mapStateToProps=state=>({
    adminErrors:state.adminErrors
})

export default connect(mapStateToProps,{createScreenings}) (AddScreening);
