import { useState, useEffect } from 'react';

//This component is created for parallel comparison with its class based component implementation
//Again the state variable here is created to compare it with the state variable of the class based
//component implementation. So again do not judge
//Going to implement a random counter which has no connection with the component's intended functionality
//This is to draw parallel with the class based component implementation.

const User = (props) => {
    console.log(props.name + ' 1');
    const [userId, setUser] = useState(1);
    const [randomCounter, setRandomCounter] = useState(0);

    useEffect(()=>{
        console.log(props.name+ ' 3');
    });

    return (<div className='user'>
        <div className='counter'>{'Random Counter: '+randomCounter}{console.log(props.name+' 2')}</div>
        <div className='counter'><button onClick={
            () => {
                setRandomCounter(randomCounter+1);
            }
        }>Increment Random Counter</button></div>
        <h4>{props.name}</h4>
        <h5>{props.mobileNumber}</h5>
        <h5>{props.emailId}</h5>
        <h5>Employee Id:{userId}</h5>
    </div>);

}

export default User;