import React, { Component } from 'react';

class GForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
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

  handleFormSubmit(e) {
    //prevent form from redirecting to different page
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbyVREX2GBuPbU6VcTEDbQ_wkxIffWqHfuY7KJc7/exec";

    //construct object to hold form data
    let data = [];
    for(let field in this.state) {
      data.push(encodeURIComponent(field) + '=' + encodeURIComponent(this.state[field]));
    }

    //convert object into a properly formated URI component
    data = data.join('&').replace(/%20/g, '+');

    let xhr = new XMLHttpRequest();

    // Define what happens on successful data submission
    xhr.addEventListener('load', function(event) {
      //TODO make thank you message appear
      console.log('Yeah! Data sent and response loaded.');
      console.log(event);
    });

    // Define what happens in case of error
    xhr.addEventListener('error', function(event) {
      //TODO make error message appear
      console.log('Oops! Something goes wrong.');
      console.log(event);
    });

    //send data
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);



  }

  render() {

    return (
      <form id="gform" method="POST">
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
          >Submit</button>
      </form>
    );
  }
}

export default GForm;