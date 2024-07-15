import propsType from 'prop-types'

function UserGreeting(props){
    /* //// another way
    if(props.isloggedin){

       return <h2>welcome {props.Username}</h2>
       
    }
    else{
        return <h2>You have to first log in</h2>
    }*/

    return(
        props.isloggedin ? <h2 className="welcome-message">Welcome {props.Username}</h2> :
                           <h2 className="login-prompt">You should first log in </h2>
         );

}

UserGreeting.propsType = {
    isloggedin : propsType.bool,
    Username : propsType.string
}

UserGreeting.defaultProps = {
    Username : "new guest"
}

export default UserGreeting 
