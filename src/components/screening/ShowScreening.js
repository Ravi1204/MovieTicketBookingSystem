import React, { Component } from 'react';
import { getScreeningById } from '../../actions/ScreeningAction.js';
import { connect } from 'react-redux';
import { getSeatsByScreeningId } from '../../actions/SeatActions.js';
import SeatList from '../seats/SeatList.js';
import axios from 'axios';

class ShowScreening extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          total:0
        }
    this.handleCount=this.handleCount.bind(this);

      }
    
      handleCount(value,price) {
          if(this.state.count==0 && value==-1)
          {}
          else{
        this.setState((prevState) => ({ count: prevState.count + value }));
        this.setState((prevState) => ({ total: prevState.count*price }));
    }
      }

    // onSeatClick(seatNumber){
    //     console.log(seatNumber+"has been selectred");
    // }

    componentDidMount(){
        this.props.getScreeningById(this.props.match.params.id);
        this.props.getSeatsByScreeningId(this.props.match.params.id);
       
    }
   async checkAndBookSeats(seats,screeningId){
       const seatsNotBooked=seats.filter(s=>!s.booked);
      // console.log(seats.length);
      // console.log(seatsNotBooked.length);

    if(this.state.count>seatsNotBooked.length){
    window.alert("Only "+seatsNotBooked.length+ " seats are available :(");
    return;
    }
    if(this.state.count==0){
        window.alert("Cannot Book 0 Seats ");
        return;
    }
    for(var i=0;i<this.state.count;i++){
        const seatBooking={
            screening:{id:screeningId},
            seat:{id:seatsNotBooked[i].id},
            user:{id:JSON.parse(localStorage.getItem('user'))}
        }
        const seat=seatsNotBooked[i];
      seat.booked=true;
    try{    
         const res=await axios.post(`http://localhost:8080/seatbooking/save`,seatBooking);
         const res1=await axios.post(`http://localhost:8080/seat/save`,seat);
        }
        catch(error){
            console.log("error occured");
        }
   this.props.history.push('/bookingcard');
        

    }
    }
    //  renderSeats(seats){
    //    for(var i=0;i<seats.length;i++){
    //     return(<div key={i}>
    //     <div
    //      className="block-example border border-dark"
    //       style={{width:20,height:20,backgroundColor:this.state.colors[i]}}
    //        onClick={this.onChange(i)}
    //       >
    //   <h6>{seats[0].seatNumber}</h6>
    //    </div>
    //    <br/>
    //   </div>
    //   );
    //    }
    // }
    render() {
       
        const{seats}=this.props.seats;
        const{screening}=this.props.screenings;
        const userId=JSON.parse(localStorage.getItem('user'));;
        if(userId==null|| userId==0)
        {
            this.props.history.push("/sign-up");
        }
      
        return (
            <div>
                <h4><br/><br/>{"Start Time : "}{screening.startTime} <br/>{"End Time : "} {screening.endTime} <br/>
                {"Price : "} {screening.price}</h4>
                <hr/>
                <h4>How many Tickets Would You Like to book?</h4>
                <center><button onClick={(e)=>this.handleCount(1,screening.price)}> + </button></center>
                <br/><p><center>{this.state.count}</center></p>
                <center><button onClick={(e)=>this.handleCount(-1,screening.price)}> - </button></center>
                <br/><hr/>
                <h4>You Have Selected {this.state.count} Seats With Sub Total Of  <h3 style={{fontWeight: "bold"}}>₹ {this.state.total}</h3></h4>
                <hr/>
                <center><button onClick={(e)=>this.checkAndBookSeats(seats,screening.id)}>Book Now</button></center>
                {/* {seats.map(seat=>(
                <SeatList key={seat.id} seat={seat} />
             ) ) } */}
            </div>
        );
    }
}


const mapStateToProps=state=>({
    screenings:state.screenings,
    seats:state.seats
   })
  export default connect(mapStateToProps,{getScreeningById,getSeatsByScreeningId}) (ShowScreening);
