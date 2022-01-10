import React, { Component } from 'react'

export default class MyTicketItem extends Component {
    render() {



        return (
            <div>
                <div className="backgroundImage">

            <br/><br/>
                <div className="card transparentText" style={{width: "18rem;",}}>
                    <div className="card-body">

                    <br/>

                    <center><h3 className="card-title"> <i className="fa fa-credit-card" aria-hidden="true"></i><b>Theatre: </b>{this.props.seatBooking.screening.auditorium.theatre.name}&nbsp;&nbsp;<b>Movie : </b>{this.props.seatBooking.screening.movie.title}</h3></center><br/>
                    <center><h5 className="card-title"><b>Seat Number: {this.props.seatBooking.seat.seatNumber}</b></h5></center>
                    <center><h5 className="card-title"><b>Price: {this.props.seatBooking.screening.price}</b></h5></center>

                    <center><h5 className="card-title">Enjoy Your Show</h5></center>

                        <br/><center><a href="/dashboard" className="btn btn-primary">Back To Home</a></center>
                    </div>
                </div>
            </div></div>
        )
    }
}
