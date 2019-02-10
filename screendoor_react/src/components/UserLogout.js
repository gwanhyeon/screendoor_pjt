import React from 'react'
import {Button} from 'reactstrap'

const UserLogout = ({onClick}) => {

    return(
        <Button color="success" onClick={onClick}>Logout</Button>
    )

}

export default UserLogout