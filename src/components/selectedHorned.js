import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';




class SelectedHorned extends React.Component{
    render(){
        return(
            <Modal show={this.props.display} onHide={this.props.closing}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.displayContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img variant="top" src={this.props.displayContent.image_url} alt={this.props.displayContent.title} style = {{width :'200px'}} />
              {this.props.displayContent.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closing}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        )
    }
}

export default SelectedHorned;