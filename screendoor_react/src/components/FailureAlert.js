import React from 'react';
import { Alert } from 'reactstrap';

const FailureAlert = ({name}) => {
    return (
        <Alert color="danger">
            {name}에 실패하였습니다.
        </Alert>
    );
}

export default FailureAlert;