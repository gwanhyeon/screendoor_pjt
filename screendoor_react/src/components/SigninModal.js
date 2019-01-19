import React,{ Component } from 'react';
import { Button, Modal, Input, Label, Form, FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SigninModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.handleOnClick}>Sing in</Button>
        <Modal isOpen={this.state.modal} toggle={this.handleOnClick} className="modal-dialog">
          <ModalHeader toggle={this.handleOnClick}>Sign in</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
                <Label for="exampleEmail">ID</Label>
                <Input type="email" name="user_id" placeholder="Enter ID" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="user_password" placeholder="Enter Password" />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleOnClick}>Sign in</Button>{' '}
            <Button color="secondary" onClick={this.handleOnClick}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SigninModal;