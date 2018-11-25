import React, { Component } from 'react';

import '../scss/GForm.scss';

class GForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.setSubmit = this.setSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      submitSuccessful: null,
    };
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  setSubmit(bool) {
    this.setState({submitSuccessful: bool});
  }

  handleFormSubmit(e) {
    //prevent form from redirecting to different page
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbyVREX2GBuPbU6VcTEDbQ_wkxIffWqHfuY7KJc7/exec";

    //construct object to hold form data
    let formFields = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    let data = [];
    for(let field in formFields) {
      data.push(encodeURIComponent(field) + '=' + encodeURIComponent(formFields[field]));
    }

    //convert object into a properly formated URI component
    data = data.join('&').replace(/%20/g, '+');

    let xhr = new XMLHttpRequest();

    //create closure to change form submit state in xhr event listeners
    const setSubmit = this.setSubmit;

    // Define what happens on successful data submission
    xhr.addEventListener('load', function(event) {
      setSubmit(true);
    });

    // Define what happens in case of error
    xhr.addEventListener('error', function(event) {
      setSubmit(false);
    });

    //send data
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  }

  render() {

    let submitMessage = "";
    let disableSubmit = false;

    if (this.state.submitSuccessful === true){
      submitMessage = "Thanks! I'll be in contact with you soon.";
      disableSubmit = true;
    }

    if (this.state.submitSuccessful === false) {
      submitMessage = "Oops! This is embarrassing. Something seems to have gone wrong. Please try again later.";
    }

    return (
      <div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            ></textarea>
          </div>

          <button
            className="btn"
            onClick={this.handleFormSubmit}
            disabled={disableSubmit}
            >Submit
          </button>
        </form>

        <p className="form-submit-message">{submitMessage}</p>
      </div>
    );
  }
}

export default GForm;