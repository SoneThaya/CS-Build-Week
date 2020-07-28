import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Rules = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button variant="primary" onClick={handleShow}>
        Click For Rules
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Conway's Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <strong>For a space that is 'populated':</strong>
        <p> - Each cell with one or no neighbors dies, as if by solitude.</p>
        <p> - Each cell with four or more neighbors dies, as if by overpopulation.</p>
        <p> - Each cell with two or three neighbors survives.</p>
        <strong>For a space that is 'empty' or 'unpopulated'</strong>
        <p> - Each cell with three neighbors becomes populated.</p>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Rules
