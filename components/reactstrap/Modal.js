import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ReactStrapModal(args, children) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <ReactStrapModal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ReactStrapModal>
    </div>
  );
}

export default Modal;
