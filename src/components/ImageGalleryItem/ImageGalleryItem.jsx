import { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import { ImageItem, Image, ImageModal } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prev) => ({ showModal: !prev.showModal }));
  };

  render() {
    return (
      <ImageItem>
        <Image
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onModalClick={this.toggleModal}>
            <ImageModal src={this.props.largeImageURL} alt={this.props.tags} />
          </Modal>
        )}
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};