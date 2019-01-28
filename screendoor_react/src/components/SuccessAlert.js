import React from 'react';
import { Alert } from 'reactstrap';

const SuccessAlert = ({name}) => {
    return (
        <Alert color="success">
            {name}에 성공하였습니다.
        </Alert>
    );
}

export default SuccessAlert;