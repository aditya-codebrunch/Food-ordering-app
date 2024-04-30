import User from './User.js';
import UserClass from './UserClass.js';
import AnotherUserClass from './AnotherUserClass.js';
import { BASE_URL } from '../utils/constants.js';
import React from 'react';

//Commenting out functional implementation of the component

// import { useEffect, useState } from 'react';

// const About = () => {
//     let [users,setUsers] = useState(null);

//     useEffect(()=>{
//         fetchUsers();
//     },[]);

//     async function fetchUsers(){
//         let users = await fetch(BASE_URL+'/users');
//         let data = await users.json();
//         setUsers(data);
//     }

//     return !users?(<h1>Loading...</h1>):(
//         <div className="mid-content">
//             <h3>Hunger Games is a food delivery application</h3>
//             <h3>Here are our founders</h3>
//             <User name={users[0].name} emailId={users[0].emailId} mobileNumber={users[0].mobileNumber} />
//             <UserClass name={users[1].name} emailId={users[1].emailId} mobileNumber={users[1].mobileNumber}/>
//         </div>
//     );
// }


//Implementing class based component to explore class based component's life cycle


class About extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
        console.log("Parent Constructor");
    }

    render() {
        console.log("Parent Render");
        return !this.state.users ? (<h1>Loading...</h1>) : (
            <div className="mid-content">
                <h3>Hunger Games is a food delivery application</h3>
                <h3>Here are our founders</h3>
                <User name={this.state.users[0].name} emailId={this.state.users[0].emailId} mobileNumber={this.state.users[0].mobileNumber} />
                <UserClass name={this.state.users[1].name} emailId={this.state.users[1].emailId} mobileNumber={this.state.users[1].mobileNumber} />
                <UserClass name={"Ashwathama"} emailId={this.state.users[1].emailId} mobileNumber={this.state.users[1].mobileNumber} />
                <AnotherUserClass name={"Karna"} emailId={this.state.users[1].emailId} mobileNumber={this.state.users[1].mobileNumber} />
            </div>
        );
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
        this.fetchUsers();
    }

    async fetchUsers() {
        let users = await fetch(BASE_URL + '/users');
        let data = await users.json();
        this.setState({users:data});
    }

}



export default About;