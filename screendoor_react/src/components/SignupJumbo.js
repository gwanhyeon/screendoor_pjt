import React from 'react'
import {Jumbotron} from 'reactstrap'

const SignupJumbo = ({children}) => {
    return(
        <Jumbotron>
            <h3 className="display-4">Sign up</h3>
            <hr className="my-4"/>
            {children}
        </Jumbotron>
    )
}

export default SignupJumbo;