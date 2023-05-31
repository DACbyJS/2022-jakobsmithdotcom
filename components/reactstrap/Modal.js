import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

// Fonts
import { overpass, overpassMono, jsMath } from '../../lib/constants';

function ReactStrapModal({ args, children, isActive, toggle }) {
  return (
    <Modal
      className={`${overpass.variable} ${overpassMono.variable} ${jsMath.variable}`}
      isOpen={isActive}
      toggle={toggle}
      {...args}
    >
      <ModalBody className="white-black-border">{children}</ModalBody>
    </Modal>
  );
}

export default ReactStrapModal;
