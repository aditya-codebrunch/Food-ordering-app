import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+" child constructor");
        //This id is given here to just explore state object in class based component implementation
        //So please do not judge
        //Going to implement a random counter which has no connection with the component's intended functionality
        //This is to explore how to change the state in class based components
        this.state = {
            id: 2,
            randomCounter:0
        }
    }

    render(){
        console.log(this.props.name+" child render");
        return (<div className='user'>
        <div className='counter'>{'Random Counter: '+this.state.randomCounter}</div>
        <div className='counter'><button onClick={
            () => {
                this.setState({
                    randomCounter: this.state.randomCounter+1
                });
            }
        }>Increment Random Counter</button></div>
        <h4>{this.props.name}</h4>
        <h5>{this.props.mobileNumber}</h5>
        <h5>{this.props.emailId}</h5>
        <h5>Employee Id:{this.state.id}</h5>
    </div>);
    }

    componentDidMount(){
        console.log(this.props.name+" child componentDidMount");
        this.timer = setInterval(()=>{
            console.log('hello')
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default UserClass;