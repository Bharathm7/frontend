import React, { Component } from 'react';
import axios from 'axios';


class Ticket extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      content: '',
      messages: '',
      status: '',
      img: '',
      file: '',
      imagePreviewUrl: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
    console.log('file burada');
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  onSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('img', this.state.file);
    formData.append('name', this.state.name);
    formData.append('content', this.state.content);
    formData.append('messages', this.state.messages);

    axios({
      method: 'post',
      url: 'tickets/addTickets',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (response) {
        console.log(response); // handle success
      })
      .catch(function (response) {
        console.log(response); // handle error
      });
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="Preview" />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="container">
        <div className="ticket-form">
          <div className="form-header">
            <h1 className="text-center">ADD TICKET</h1>
          </div>
          <form encType="multipart/form-data" noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="mx-3">
                Ticket Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter ticket name"
                value={this.state.name}
                onChange={this.onChange}
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content" className="mx-3">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="form-control"
                rows="2"
                placeholder="Enter content"
                value={this.state.content}
                onChange={this.onChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="messages" className="mx-3">
                Message
              </label>
              <textarea
                id="messages"
                className="form-control"
                name="messages"
                rows="2"
                placeholder="Enter Message"
                value={this.state.messages}
                onChange={this.onChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                  <input
                    className="fileInput"
                    type="file"
                    onChange={(e) => this._handleImageChange(e)}
                  />
                  <button
                    className="submitButton"
                    type="submit"
                    onClick={(e) => this._handleSubmit(e)}
                  >
                    Upload Image
                  </button>
                </form>
                
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Ticket;
