import React, { Component } from 'react'

export default class Bookingcard extends Component {
    render() {
        const userId=JSON.parse(localStorage.getItem('user'));;
        if(userId==null|| userId==0)
        {
            this.props.history.push("/sign-up");
        }
      
        return (
            <div>

            <br/><br/>
                <div class="card" style={{width: "18rem;",}}>
                    <div class="card-body">
                        
                    <br/>
                    <center><h3 class="card-title">Movie Booked Sucessfully...</h3></center><br/>
                    <center><h5 class="card-title">Enjoy Your Show</h5></center>
                        
                        <br/><center><a href="/dashboard" class="btn btn-primary">Back To Home</a></center>
                    </div>
                </div>
            </div>
        )
    }
}
