import React, { Component } from 'react';

class SeatList extends Component {
    render() {
        const{seat}=this.props;
        return (
            <div>
                <h6>{seat.seatNumber}</h6>
            </div>
        );
    }
}

export default SeatList;