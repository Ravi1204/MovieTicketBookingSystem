import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createScreenings,updateScreenings} from "../../actions/AdminScreeningActions.js";
class UpdateScreening extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            date:"",
            startTime:"",
            endTime:"",
            isFull:"False",
            price:"",
             
          
            // errors:{}

        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        const updateScreening={
            id:this.state.id,
            date:this.state.date,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            isFull:this.state.isFull,
            price:this.state.price,
            
        
        }
        console.log(updateScreening);
        this.props.createScreenings(updateScreening,this.props.history);

    }
    componentDidMount(){
        const{id}=this.props.match.params;
        this.props.updateScreenings(id,this.props.history);
    }
    componentWillReceiveProps(nextProps){
     const{
        id,date,startTime,endTime,price
     }=nextProps.screening;
     this.setState({id,date,startTime,endTime,price});
    }
    render() {
        // const {errors}=this.state;
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
                        <h5 className="display-4 text-center">Create / Edit Screening </h5>
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
                           
                            
                            <h6>Price</h6>
                            <div className="form-group">
                                <input type="text" placeholder="Price" className="form-control form-control-lg" name="price" value={this.state.price} onChange={this.onChange} />
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

UpdateScreening.propTypes={
    createScreenings:PropTypes.func.isRequired,
    updateScreenings:PropTypes.func.isRequired,
    screening:PropTypes.object.isRequired

};
const mapStateToProps=state=>({
    screening:state.adminScreenings.screening
})

export default connect(mapStateToProps,{updateScreenings,createScreenings}) (UpdateScreening);
