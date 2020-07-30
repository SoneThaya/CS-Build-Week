import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button variant="primary" onClick={handleShow}>
        About
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Conway's Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-header">The Game</div>
          <p>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</p>
          
          <div className="modal-header">Cellular Automata</div>
        <p>A cellular automaton is a program that operates on data typically stored in a 2D grid. A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.</p>
        <p>Each round of the simulation examines the current state of the grid, and then produces an entirely new grid consisting of the old state.</p>
        
          <p>This new grid becomes the "current" state of the simulation, and the process repeats. Each new grid is referred to as a generation.</p>
          
          <div className="modal-header">Turing Completeness</div>
          <p>We say a computing system is Turing Complete if it is capable of performing arbitrary, general purpose computation.</p>
          <p>Anything computable can be computed in The Game of Life given a large enough grid and enough time. Most people, however, find JavaScript to be a far easier development medium.</p>

          <div className="modal-header">Double Buffering</div>
          <p>There's a technique that's commonly used in graphics programming called double buffering. This is when we display one buffer to the user, but do work on one that's hidden from sight. In this way, the user doesn't see the buffer being generated, they only see the one that was previously completed.</p>
          <p>When we're done doing work on the hidden buffer, we page flip and show the hidden buffer to the user. Then the previously-displayed buffer becomes the new hidden buffer, and work begins again. There are multiple benefits to this approach. One is that the user doesn't see the work being progressively completed. From their perspective, the work is suddenly done as soon as the page flips.</p>

          <p>Another is that the program can use the previous buffer (i.e. the one that is currently being displayed) as a source for material to perform calculations to produce the next buffer. This is particularly beneficial where you need to produce a completely new output based on the complete previous output. If you were to only use a single buffer, you'd have to overwrite the pixels as you went, and this might affect the outcome of the subsequent pixels in an undesirable way.</p>

          <p>And this is very useful when implementing a cellular automaton.
          
          There will be two arrays of data for the automaton. One of them holds the data that the user currently sees on the canvas. The other one is where the next frame to be shown is being actively constructed.
          
          After the new frame is constructed, the next from becomes the current frame, and the current frame becomes the next frame. And the process repeats.</p>
        
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

export default About