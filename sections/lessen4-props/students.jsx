// below is proptypes that used for ensure that passed in data is correct like if user sending name it should be string and if not error
import propTypes from 'prop-types'

function Student(props){

    return(
        <div className="student">
            <p> Name :{props.name}</p>
            <p> Age :{props.age}</p>
            <p> Is student :{props.isStudent ? 'YES' : 'NO'}</p>
        </div>
    );
}

import React from 'react'


// propstype
Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool
}

// defaultprops that we set default value if user didnt provide
Student.defaultProps = {
    name : 'geust',
    age : 0,
    isStudent : false
}


export default Student