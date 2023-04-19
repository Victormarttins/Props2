import React from "react";
import ModalComponent from "./modal";
import Button from 'react-bootstrap/Button';
interface Props{
handlecloseModal:any;
showModal:boolean;
}
interface state{

}

export default class Botao extends React.Component <Props,state>{
    render() {

     const{showModal,handlecloseModal}=this.props;

        return (
            <>
            <Button variant="primary" onClick={handlecloseModal}>
            Launch demo modal
          </Button>
    
            <ModalComponent showModal={showModal}handlecloseModal={handlecloseModal}/>
          </>
          
        )
    }

}