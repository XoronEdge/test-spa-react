import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import MakeContextConsumer from "../../Auth/MakeContextConsumer";
import VideoViewModalBody from "./VideoViewModalBody";

class VideoView extends Component {
  render() {
    const { modal, toggle, title } = this.props;
    return (
      <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: 1110 }}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <VideoViewModalBody />
        </ModalBody>
      </Modal>
    );
  }
}

export default MakeContextConsumer(VideoView);
