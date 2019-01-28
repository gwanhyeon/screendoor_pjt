import React,{ Component } from 'react';
import { Button, Modal, Input, Label, Form, FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FailureAlert from './FailureAlert'

class SigninModal extends Component {

  render() {
    
    const { onClick, onChange, onSubmit, user_id, user_password,result,modal } = this.props;
    let view = null;
    if(result === 401 || result === 502){
      view = <FailureAlert name="로그인"/>
    }
    return (
      <div>
        <Button color="success" onClick={onClick}>Sing in</Button>
        <Modal isOpen={modal} toggle={onClick} className="modal-dialog">
        <form>
          <ModalHeader toggle={onClick}>Sign in</ModalHeader>
          {view}
          <ModalBody>
            <FormGroup>
                <Label for="user_id">ID</Label>
                <Input type="text" value={user_id} name="user_id" placeholder="Enter ID" onChange={onChange} />
            </FormGroup>
            <FormGroup>
                <Label for="user_password">Password</Label>
                <Input type="password" value={user_password} name="user_password" placeholder="Enter Password" onChange={onChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onSubmit} type="submit" color="success" >Sign in</Button>{' '}
            <Button color="secondary" onClick={onClick}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SigninModal;