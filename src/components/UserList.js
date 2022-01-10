import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from "prop-types"

import { connect } from "react-redux";
import { getUsers } from "../actions/AdminUserAction.js";
import Useritem from "./adminuser/Useritem.js";

class UserList extends React.Component {
componentDidMount(){
    this.props.getUsers();
}
    render() {
        const {users}=this.props.users
        console.log(users.length);
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }
        return (
            // <div className="users">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-md-12">
            <div>
                            <h1 className="display-4 text-center">Users</h1>
                            <br />
                           
                            <br />
                            <hr />
                            {users.map(user=>(

             <Useritem key={user.id} user={user} />

    ))}
    </div>
                            
            //             </div>
            //         </div>
            //     </div>
            // </div>

        )
    }
}
UserList.propTypes={
    users:PropTypes.object.isRequired,
   getUsers:PropTypes.func.isRequired
};
const mapStateToProps=state=>({
   users:state.users
})

export default connect(mapStateToProps,{getUsers}) (UserList);
