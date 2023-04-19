import React from "react";
import Modal from'react-bootstrap/Modal';
interface Props{
    handlecloseModal:any;
    showModal:boolean;
}
interface state{

}

export default class ModalComponent extends React.Component<Props,state> {
    render() {
        
     const{showModal,handlecloseModal}=this.props;
        return (
            <Modal show={showModal} onHide={handlecloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        
      </Modal>
    
        )
    }
}