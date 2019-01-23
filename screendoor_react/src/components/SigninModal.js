import React,{ Component } from 'react';
import { Alert, Button, Modal, Input, Label, Form, FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SigninModal extends Component {

    state ={
        modal:false,
    }

    handleOnClick = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
  
  render() {
    const { onChange, onSubmit, user_id, user_password,result } = this.props;
    const { handleOnClick, state } = this

    return (
      <div>
        <Button color="success" onClick={handleOnClick}>Sing in</Button>
        <Modal isOpen={state.modal} toggle={handleOnClick} className="modal-dialog">
        <form>
          <ModalHeader toggle={handleOnClick}>Sign in</ModalHeader>
          <ModalBody>
            <FormGroup>
                <Label for="exampleEmail">ID</Label>
                <Input type="text" value={user_id} name="user_id" placeholder="Enter ID" onChange={onChange} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" value={user_password} name="user_password" placeholder="Enter Password" onChange={onChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onSubmit} type="submit" color="success" >Sign in</Button>{' '}
            <Button color="secondary" onClick={handleOnClick}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SigninModal;