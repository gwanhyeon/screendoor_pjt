import React,{ Component } from 'react';
import { Button, Modal, Input, Label, Form, FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SigninModal extends Component {

    constructor() {
        super();
        this.state = {
            user_id:'',
            user_password:'',
            response:'',
            modal:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnClick = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {user_id, user_password} = this.state
        const user = {
            user_id: user_id,
            user_password: user_password,
        }

        this.setState({
            ...user,
        })
        //current user리듀서 사용해서 response에 있는 jwt값 스토어에 업데이트
        //나중에 여기다가 node 연결 넣으면됨
        console.log(this.state);
        this.handleOnClick();
    }




  render() {
    const { handleChange, handleOnClick,handleSubmit, state } = this;
    return (
      <div>
        <Button color="success" onClick={handleOnClick}>Sing in</Button>
        <Modal isOpen={state.modal} toggle={handleOnClick} className="modal-dialog">
        <form onSubmit={handleSubmit}>
          <ModalHeader toggle={this.handleOnClick}>Sign in</ModalHeader>
          <ModalBody>
            <FormGroup>
                <Label for="exampleEmail">ID</Label>
                <Input type="text" value={state.user_id} name="user_id" placeholder="Enter ID" onChange={ handleChange } />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" value={state.user_password} name="user_password" placeholder="Enter Password" onChange={handleChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success">Sign in</Button>{' '}
            <Button color="secondary" onClick={handleOnClick}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SigninModal;