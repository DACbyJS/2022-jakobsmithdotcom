import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

// Fonts
import { fonts } from '../../lib/constants';

function ReactStrapModal({ args, children, isActive, toggle }) {
  return (
    <Modal
      className={`${fonts?.overpass?.variable} ${fonts?.overpassMono?.variable} ${fonts?.jsMath?.variable}`}
      isOpen={isActive}
      toggle={toggle}
      {...args}
    >
      <ModalBody className="white-black-border">{children}</ModalBody>
    </Modal>
  );
}

export default ReactStrapModal;
