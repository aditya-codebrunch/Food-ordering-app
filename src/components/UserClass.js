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
            randomCounter:0
        }
    }

    render(){
        console.log(this.props.name+" child render");
        return (<div className='mb-2 p-[5%] border border-gray-400 border-solid flex flex-col flex-nowrap justify-center'>
        <div className='text-right'>{'Random Counter: '+this.state.randomCounter}</div>
        <div className='text-right'><button className='bg-gray-300 rounded-lg p-[0.5%]' onClick={
            () => {
                this.setState({
                    randomCounter: this.state.randomCounter+1
                });
            }
        }>Increment Random Counter</button></div>
        <h4>{this.props.name}</h4>
        <h5>{this.props.mobileNumber}</h5>
        <h5>{this.props.emailId}</h5>
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